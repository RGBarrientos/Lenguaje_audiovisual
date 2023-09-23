// Componente base
class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

// Decorador abstracto
abstract class RoomDecorator extends Room {
    abstract showRoom(): void;
}

// Decorador concreto para agregar diseño
class DesignDecorator extends RoomDecorator {
    constructor(room: Room, design: string) {
        super(room.paint);
        this.design = design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

// Decorador concreto para agregar mobiliario
class FurnitureDecorator extends RoomDecorator {
    private furniture: string;

    constructor(room: Room, furniture: string) {
        super(room.paint);
        this.furniture = furniture;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has ${this.furniture} furniture.`);
    }
}

// Uso de los decoradores
const myBasicRoom = new Room('blue');
const roomWithDesign = new DesignDecorator(myBasicRoom, 'stripe');
const roomWithFurniture = new FurnitureDecorator(myBasicRoom, 'modern');

myBasicRoom.showRoom();         // Muestra la habitación básica
roomWithDesign.showRoom();      // Muestra la habitación con diseño
roomWithFurniture.showRoom();   // Muestra la habitación con mobiliario


/*class Room {
    paint: string;
    design: string;

    constructor(paint: string) {
        this.paint = paint;
        this.design = '';
    }

    applyDesign(design: string) {
        this.design += design;
    }

    showRoom() {
        console.log(`This room is painted with ${this.paint} and has a ${this.design} design.`);
    }
}

const myRoom = new Room('blue');
myRoom.applyDesign('stripe');
myRoom.showRoom();*/
