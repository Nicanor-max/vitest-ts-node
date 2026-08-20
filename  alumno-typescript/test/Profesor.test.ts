import { Profesor } from './../src/Profesor';
import { describe, expect, test } from "vitest";


describe("Profesor", () => {
  test("un profesor debe tener un nombre, un legajo y una materia", () => {
    const profesor = new Profesor("María", 54321, "Matemáticas");

    expect(profesor.nombre).toBe("María");
    expect(profesor.legajo).toBe(54321);
    expect(profesor.materia).toBe("Matemáticas");
  });
});
