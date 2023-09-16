//Crear un programa que nos permita mostrar libros de una biblioteca, 
//nos permita actualizar el nombre del libro
//y eliminarlo

//libros fisicos
//audio libros
//libros digitales
//libros de hace 100 años

//combinaciones
//No se pueden eliminar los audiolibros
//no se puede actualizar ni eliminar libros antiguos
//quiero que la crear libros fisicos y libros digitales me pida diferentes autores



class libro {
    nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
    
}

class libroAnAutor extends libro{
    autor: string;

    constructor(nombre: string, autor: string){
        super(nombre);
        this.autor = autor;
    }
    
}

class libroManyAutor extends libro{
    autores: string[];

    constructor(nombre: string, autores: string[]){
        super(nombre);
        this.autores = autores;
    }
    
}

interface IActualizarNombreLibro{
    actualizarNombreLibro();
}

interface IEliminarLibro{
    eliminarLibro();
}

class libroFisico extends libroManyAutor implements IActualizarNombreLibro, IEliminarLibro{
    edicion: string;
    
    constructor(nombre: string, autores: string[], edicion: string){
        super(nombre, autores);
        this.edicion = edicion;
    }

    actualizarNombreLibro() {
        throw new Error("Method not implemented.");
    }
    eliminarLibro() {
        throw new Error("Method not implemented.");
    }

}

class audioLibro extends libroAnAutor implements IActualizarNombreLibro{
    url: string;
    
    constructor(nombre: string, autor: string, url: string){
        super(nombre, autor);
        this.url = url;
    }

    actualizarNombreLibro() {
        throw new Error("Method not implemented.");
    }
}

class libroDigital extends libroFisico implements IActualizarNombreLibro, IEliminarLibro{
    archivo: string;
    
    constructor(nombre: string, autores: string[], edicion: string, archivo: string){
        super(nombre, autores, edicion);
        this.archivo = archivo;
    }

    actualizarNombreLibro() {
        throw new Error("Method not implemented.");
    }
    eliminarLibro() {
        throw new Error("Method not implemented.");
    }
}

class libroAntiguo extends libroAnAutor{
    constructor(nombre: string, autor: string){
        super(nombre, autor);
    }
}
