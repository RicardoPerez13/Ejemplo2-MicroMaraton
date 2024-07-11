export default class Cl_Partido{
    constructor(result){
        this.resultado=result;
        }
        set resultado (r) {
            this._resultado=r;
    }
    get resultado () {
      return this._resultado;
    }
}