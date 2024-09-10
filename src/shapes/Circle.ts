import { Shape } from "../interfaces/Shape";
import { roundToTenths } from "../utils";

export class Circle implements Shape {
  constructor(private radius: number) {}

  getArea(): number {
    return roundToTenths(Math.PI * this.radius ** 2);
  }

  getPerimeter(): number {
    return roundToTenths(2 * Math.PI * this.radius);
  }

  getDiameter(): number {
    return roundToTenths(2 * this.radius);
  }
}
