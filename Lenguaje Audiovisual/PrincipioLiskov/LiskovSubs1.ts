class Pajaro{
    volar() {
        console.log("El pajaro vuela en el cielo");
    }
}

class Pinguino extends Pajaro{
    volar() {
        throw new Error("Los pinguinos no pueden volar");
    }
}