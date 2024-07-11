export default class Cl_Equipo {
constructor (){
 this.cont_partido=0
 this.cont_victorias=0
 this.cont_derrotas=0
}
    procesar(p){
        this.cont_partido++;
        if(p.resultado==1){ //1) Victoria 2) Derrota
            this.cont_victorias++;
        }
        else if(p.resultado==0){
            this.cont_derrotas++;
        }
    }
    porcentajeVic(){
        return (this.cont_victorias/this.cont_partido)*100
    }
}