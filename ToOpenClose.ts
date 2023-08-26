class Libro3{
    titulo: string;
    autor: string;
    contenido: string;

    constructor(titulo: string, autor: string, contenido: string){
        this.titulo = titulo;
        this.autor = autor;
        this.contenido = contenido;
    }

    mostrarContenido(){
        return this.contenido;
    }

}

interface TipoLibro {
    obtenerTipo(): string;
}

class LibroConTipo extends Libro3{
    tipo: TipoLibro;

    constructor(titulo: string, autor: string, contenido: string, tipo: TipoLibro) {
        super(titulo, autor, contenido);
        this.tipo = tipo;
    }

    obtenerTipo() {
        return this.tipo.obtenerTipo();
    }
}
