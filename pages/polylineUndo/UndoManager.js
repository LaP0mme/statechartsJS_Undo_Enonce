import Stack from './stack';

class UndoManager{
    constructor(buttonUndo, buttonRedo){
        this.buttonUndo = buttonUndo
        this.buttonRedo = buttonRedo
        this.undoStack = new Stack()
        this.redoStack = new Stack()
    }
    
    execute(command){ 
        this.undoStack.push(command)
        this.buttonUndo.disabled = this.canUndo() // on désactive ou active le bouton undo selon l'état de la pile
        this.buttonRedo.disabled = this.canRedo() // on désactive ou active le bouton redo selon l'état de la pile
    }
    undo(){ 
        let command = this.undoStack.peek()
        command.undo()
        this.redoStack.push(command) //on ajoute la commande dans la pile redo pour pouvoir la anneuler le undo
        this.undoStack.pop()
        this.buttonUndo.disabled = this.canUndo()
        this.buttonRedo.disabled = this.canRedo()
    }

    canUndo(){ //si la pile est vide, on ne peut pas undo
        if(!this.undoStack.isEmpty()){
            return false
        }
        return true
    }

    redo(){
        let command = this.redoStack.peek()
        command.redo()
        this.undoStack.push(command) // on ajoute la commande dans la pile undo pour pouvoir la annuler le redo
        this.redoStack.pop()
        this.buttonUndo.disabled = this.canUndo()
        this.buttonRedo.disabled = this.canRedo()
    }

    canRedo(){ //si la pile est vide, on ne peut pas redo
        if(!this.redoStack.isEmpty()){
            return false
        }
        return true
    }
}
export default UndoManager;
