class Libro1{
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

class BaseDeDatos {
    guardarLibro(libro: Libro1) {
        // Código para guardar el libro en la base de datos
        console.log(`Guardando el libro ${libro.titulo} en la base de datos...`);
    }
}

const libro1 = new Libro1('El Principito', 'Antoine de Saint-Exupéry', 'Érase una vez...');
const baseDeDatos = new BaseDeDatos();
baseDeDatos.guardarLibro(libro1);