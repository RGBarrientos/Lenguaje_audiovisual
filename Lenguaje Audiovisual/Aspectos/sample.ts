//crear interfaces para logs de Error, Warning, e Info
//crear un metodo con una logica para validar si un libro tiene el titulo correcto
//si no lo tiene, mostrar un mensaje de error en log y si tiene el mismo nombre
//mostrar un mensaje de info
//modificar el metodo find para que se retorne un warning cuando no encuentre el libro
//COMPLETADO

//mostrar en un log de info, toda la informacion del usuario que se esta prestando un libro
//mostrar en un log de info, toda informacion del usuario que esta retornando un libro
//tip debe estar el objeto completo del usuario

class Book{
    constructor(public title: string, public author: string, public isLoaded: boolean = false, public isAvailable: string){}
}

class User{
    constructor(public userID: string, public name: string){}
}

interface ILoadManager {
    loadBook(book: Book, user: User): void;
    returnBook(book: Book): void;
}

interface ILogger{
    log(message: string) : void;
}

interface ILoggerError{
    logError() : void;
}

interface ILoggerWarning{
    logWarning() : void;
}

interface ILoggerInfo{
    logInfo() : void;
}

class ConsoleLogger implements ILogger, ILoggerError, ILoggerWarning, ILoggerInfo{
    log(message: string): void {
        console.log(message);
    }

    logError(){ 
        console.log("ERROR: El nombre es incorrecto");
    }

    logWarning(){ 
        console.log("WARNING: El libro no fue encontrado");
    }

    logInfo(){ 
        console.log("INFO: El nombre coincide");
    }
}

class Library {
    private books: Book[] = [];
    private consLog: ConsoleLogger;

    private loadBooks: Map<string, User> = new Map;

    constructor(private logger: ILogger){}

    loadBook(book: Book, user: User): void{
        if(book.isLoaded){
            this.logger.log('book is loaded');
            return;
        }

        this.loadBooks.set(book.isAvailable, user);
        book.isLoaded = true;
        this.logger.log(`${user.name} has borrowed ${book.title}`)
    }
    returnBook(book: Book, user: User): void{
        if(!book.isLoaded){
            this.logger.log('book is loaded');
            return;
        }
        this.logger.log(`${user.name} has returned ${book.title}`)
    }

    addBook(book: Book) {
        this.logger.log("Inicio de operacion");
        this.books.push(book);
        this.logger.log("Fin de operacion");
    }

    findBookByTitle(title: string) : Book | undefined {
        this.logger.log("Inicio de operacion");
        return this.books.find(book => book.title === title);
        this.logger.log("Fin de operacion");
    }

    findBookByTitleInt(title: string) : void {
        this.logger.log("Inicio de operacion");
        if (this.books.find(book => book.title === title)){
            this.consLog.logInfo;
        }else{
            this.consLog.logWarning
        }
    }
    
    validateBookName(){
        for(let i=0; i<this.books.length; i++){
            if(this.books[i].title == "incorrecto"){
                this.consLog.logError;
            }
        }
    }
}
