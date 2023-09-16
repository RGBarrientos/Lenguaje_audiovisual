class Rectangulo{
    alto: number;
    ancho: number;
    constructor(alto: number, ancho: number){
        this.alto = alto;
        this.ancho = ancho;
    }

    serAlto(value: number){
        this.alto = value;
    }

    serAncho(value: number){
        this.alto = value;
    }

    area(): number{
        return this.alto * this.ancho;
    }
}

class Cuadrado extends Rectangulo{
    constructor(lado: number){
        super(lado, lado);
    }

    serAlto(value: number){
        this.alto = value;
        this.ancho = value;
    }
}