import { Persona } from "./Persona";

export class Alumno extends Persona {
  constructor(
      public edad: number,
      nombre: string,
  ) {
    super(nombre);
  }
  obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }
  esMayorDeEdad(): boolean {
    return this.edad >= 18;
  
  }
}
