import { Profesor } from './../src/Profesor';
import { describe, expect, test } from "vitest";


describe("Profesor", () => {
  test("un profesor debe tener un nombre, un legajo y una materia", () => {
    const profesor = new Profesor("María", 54321, "Matemáticas");

    expect(profesor.nombre).toBe("María");
    expect(profesor.legajo).toBe(54321);
    expect(profesor.materia).toBe("Matemáticas");
  });

  test("un profesor debe tener un nombre, un legajo y una materia", () => {
    const profesor = new Profesor("Matias", 54322, "Matemáticas");

    expect(profesor.nombre).toBe("Matias");
    expect(profesor.legajo).toBe(54322);
    expect(profesor.materia).toBe("Matemáticas");
  });
  test("un profesor debe tener un nombre, un legajo y una materia", () => {
    const profesor = new Profesor("Lucia", 54323, "Matemáticas");

    expect(profesor.nombre).toBe("Lucia");
    expect(profesor.legajo).toBe(54323);
    expect(profesor.materia).toBe("Matemáticas");
  });

  test("un profesor debe tener un nombre, un legajo y una materia", () => {
    const profesor = new Profesor("Sofia", 54324, "Matemáticas");

    expect(profesor.nombre).toBe("Sofia");
    expect(profesor.legajo).toBe(54324);
    expect(profesor.materia).toBe("Matemáticas");
  });
});
