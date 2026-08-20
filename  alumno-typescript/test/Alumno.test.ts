import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
  
  test("un alumno debe tener un nombre y una edad", () => {
    const alumno = new Alumno(12, "Juan");

    expect(alumno.nombre).toBe("Juan");
    expect(alumno.edad).toBe(12);
  });


  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno(18, "Juan");

    expect(alumno.esMayorDeEdad()).toBe(true);          
  });

  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno(25, "Ana");

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno(17, "Pedro");

    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("un alumno de 18 años debe obtener el estado 'Mayor de edad'", () => {
    const alumno = new Alumno(18, "Laura");

    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 16 años debe obtener el estado 'Menor de edad'", () => {
    const alumno = new Alumno(16, "Carlos");

    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });  
  
  test("un alumno de 20 años debe obtener el estado 'Mayor de edad'", () => {
    const alumno = new Alumno(20, "Sofía");

    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  }); 

  test("un alumno de 15 años debe obtener el estado 'Menor de edad'", () => {
    const alumno = new Alumno(15, "Diego");

    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
});
