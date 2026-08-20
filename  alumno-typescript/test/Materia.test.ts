import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";

describe("Materia", () => {



  test("una materia debe tener un nombre, un año y una carrera"), () => {
    const materia = new Materia("Matemática", 2024, "Ingeniería");

    expect(materia.nombre).toBe("Matemática");
    expect(materia.anio).toBe(2024);
    expect(materia.carrera).toBe("Ingeniería");
  }
   
});