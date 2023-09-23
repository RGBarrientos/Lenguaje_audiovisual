// Observador (Observer)
interface Observer {
    update(article: string): void;
}

// Sujeto (Subject)
class Journalist {
    name: string;
    private observers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    // Método para registrar observadores
    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    // Método para eliminar observadores
    removeObserver(observer: Observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Método para notificar a los observadores
    publishArticle(article: string) {
        this.observers.forEach((observer) => {
            observer.update(article);
        });
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

// Observador concreto
class Reader implements Observer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(article: string) {
        console.log(`${this.name} ha leído el artículo: ${article}`);
    }
}

// Uso del patrón Observer
const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

// Registra al lector como observador del periodista
journalistA.addObserver(readerB);

journalistA.publishArticle("Los beneficios de la programación");


/*class Journalist {
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticles(journalist: Journalist) {
        const latestArticle = journalist.articles[journalist.articles.length - 1];
        console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.publishArticle("Los beneficios de la programación");
readerB.checkForNewArticles(journalistA);*/

