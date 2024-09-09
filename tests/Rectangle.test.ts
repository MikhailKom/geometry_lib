import { Rectangle } from '../src/shapes/Rectangle';

describe('Rectangle', () => {
  it('should calculate area correctly', () => {
    const rect = new Rectangle(10, 20);
    expect(rect.getArea()).toBe(200);
  });

  it('should calculate perimeter correctly', () => {
    const rect = new Rectangle(10, 20);
    expect(rect.getPerimeter()).toBe(60);
  });
});