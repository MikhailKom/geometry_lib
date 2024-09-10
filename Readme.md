# Библиотека для работы с геометрическими фигурами "shape_library".
##### Основные геометрические формулы для расчёта параметров фигур.
- Формулы квадратные: периметр квадрата = 4а, площадь квадрата = a².
- Формулы прямоугольников: периметр прямоугольника = 2(l + b), площадь прямоугольника = l × b.
- Формулы треугольника: периметр треугольника = сумма всех сторон, площадь треугольника = 1/2 × b × h.

### описание подключения.
```bash
npm install shape_library
```
### описание работы с библиотекой.
### Прямоугольник с методами для расчета площади и периметра.
```typescript 
export class Rectangle implements Shape {
  /**
   * Создает новый прямоугольник.
   * @param width Ширина прямоугольника.
   * @param height Высота прямоугольника.
 */
  constructor(private width: number, private height: number) {} 

  /** Возвращает площадь прямоугольника. */
  getArea(): number {
    return this.width * this.height;
  }

  /** Возвращает периметр прямоугольника. */
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
```
### Тест
исользуем jest
```bash
npx jest
```

пройден успешно
![alt text](<img/The test result is a rectangle.png>)