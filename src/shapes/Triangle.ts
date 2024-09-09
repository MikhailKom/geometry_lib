import { Shape } from "../interfaces/Shape";
import { roundToTenths } from "../utils";

export class Triangle implements Shape {
  constructor(private a: number, private b: number, private c: number) {}

  getPerimeter(): number {
    return roundToTenths(this.a + this.b + this.c);
  }
  getArea(): number {
    const s = this.getPerimeter() / 2;
    return roundToTenths(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
  getName(): string {
    return "Triangle";
  }
}
