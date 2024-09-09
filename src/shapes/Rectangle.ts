import { Shape } from "../interfaces/Shape";
import { roundToTenths } from "../utils";

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea(): number {
    return roundToTenths(this.width * this.height);
  }

  getPerimeter(): number {
    return roundToTenths(2 * (this.width + this.height));
  }

  getName(): string {
    return "Rectangle";
  }
}
