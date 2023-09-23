class TodoManager {
    private todos: string[] = [];

    add(todo: string) {
        this.todos.push(todo);
        this.save();
        this.render();
    }

    remove(index: number) {
        this.todos.splice(index, 1);
        this.save();
        this.render();
    }

    private save() {
        console.log("Saving todos to local storage...");
        // Código para guardar todos en el almacenamiento local
    }

    private render() {
        console.log("Rendering todos in the UI...");
        // Código para renderizar todos en la UI
    }
}
