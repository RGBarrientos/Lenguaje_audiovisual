class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
        this.bacon = bacon;
    }
}

class PizzaBuilder {
    private size: string = 'medium'; // Tamaño predeterminado
    private cheese: boolean = false;
    private pepperoni: boolean = false;
    private mushrooms: boolean = false;
    private bacon: boolean = false;

    constructor(size: string) {
        this.size = size;
    }

    addCheese() {
        this.cheese = true;
        return this; // Devuelve el propio constructor para permitir la llamada encadenada
    }

    addPepperoni() {
        this.pepperoni = true;
        return this;
    }

    addMushrooms() {
        this.mushrooms = true;
        return this;
    }

    addBacon() {
        this.bacon = true;
        return this;
    }

    build() {
        return new Pizza(this.size, this.cheese, this.pepperoni, this.mushrooms, this.bacon);
    }
}

// Uso del constructor de PizzaBuilder
const myPizza = new PizzaBuilder('large')
    .addCheese()
    .addPepperoni()
    .addBacon()
    .build();



/*class Pizza {
    size: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;

    constructor(size: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
        this.size = size;
        this.cheese = cheese;
        this.pepperoni = pepperoni;
        this.mushrooms = mushrooms;
        this.bacon = bacon;
    }
}

const myPizza = new Pizza('large', true, true, false, true);*/

