class Animal {
    nombre: string;
    raza: string;

    constructor(nombre: string, raza: string){
        this.nombre = nombre;
        this.raza = raza
    }
    
    comer(){
        console.log("comer");
    }

    nadar(){
        console.log("nadar");    
    }
}

class Giraffe extends Animal{
    constructor(nombre: string, raza: string){
        super(nombre, raza);
    }

    comer() : string{
        return "";
    };
}

class Pato extends Animal{
    constructor(nombre: string, raza: string){
        super(nombre, raza);
    }

    comer() : string{
        return "";
    };
}

///////

interface IAnimal{
    comer();
}

interface IAnimalAcuatico{
    nadar();
}

interface IAnimalSubterraneo{
    cavar();
}

class Jirafa2 implements IAnimal{
    comer(){
        throw new Error("Method not implemented");
    }
}

class Pato2 implements IAnimalAcuatico, IAnimal{
    comer(){
        throw new Error("Method not implemented");
    }
    nadar(){
        throw new Error("Method not implemented");
    }
}

class Especimen implements IAnimalSubterraneo, IAnimalAcuatico{
    nadar(){
        throw new Error("Method not implemented");
    }
    cavar(){
        throw new Error("Method not implemented");
    }
}