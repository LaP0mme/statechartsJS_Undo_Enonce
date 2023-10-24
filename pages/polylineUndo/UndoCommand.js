class UndoCommand {
    constructor(polyline, dessin){
        this.polyline = polyline
        this.dessin = dessin
    }
    undo(){
            this.polyline.remove() //on remove la polyline
    }
    redo(){
        this.dessin.add(this.polyline) //on remet la dernière polyline supprimée
    }
}
export default UndoCommand;