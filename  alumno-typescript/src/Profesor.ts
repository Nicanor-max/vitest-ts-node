import { Persona } from "./Persona";

export class Profesor extends Persona {
  constructor(
    nombre: string,
    public legajo: number,
    public materia: string
  ) {
    super(nombre);
    this.legajo = legajo;
    this.materia = materia;
  }

}
