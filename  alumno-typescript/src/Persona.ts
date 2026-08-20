export class Persona {
  constructor(
    public nombre: string,
  ) {}

  obtenerInformacion(): string {
    return `Nombre: ${this.nombre}`;
  }
}
