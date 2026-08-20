export class Materia {
  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string
  ) {}
 
  obtenerAlumnos(): string {
    return `Los alumnos de ${this.nombre} son: ...`;
  }
  
}
