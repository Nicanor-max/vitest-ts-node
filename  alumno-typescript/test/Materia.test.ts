import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {



  test("una materia debe tener un nombre, un año y una carrera"), () => {
    const materia = new Materia("Matemática", 2024, "Ingeniería");

    expect(materia.nombre).toBe("Matemática");
    expect(materia.anio).toBe(2024);
    expect(materia.carrera).toBe("Ingeniería");
  }
   
  test("una materia debe tener un nombre, un año y una carrera"), () => {
    const materia = new Materia("Fisica", 2025, "Ingeniería");

    expect(materia.nombre).toBe("Fisica");
    expect(materia.anio).toBe(2025);
    expect(materia.carrera).toBe("Ingeniería");
  }
  
  test("una materia debe tener un nombre, un año y una carrera"), () => {
    const materia = new Materia("Quimica", 2026, "Ingeniería");

    expect(materia.nombre).toBe("Quimica");
    expect(materia.anio).toBe(2026);
    expect(materia.carrera).toBe("Ingeniería");
  }
  
  test("una materia debe tener un nombre, un año y una carrera"), () => {
    const materia = new Materia("Biologia", 2027, "Ingeniería");

    expect(materia.nombre).toBe("Biologia");
    expect(materia.anio).toBe(2027);
    expect(materia.carrera).toBe("Ingeniería");
  } 


});