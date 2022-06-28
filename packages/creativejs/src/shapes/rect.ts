import { Shape } from './shape'

export class Rect extends Shape {
  render(): void {
    const context = this.domElement.getContext('2d')

    if (context) {
      context.fillRect(25, 25, 100, 100)
      context.clearRect(45, 45, 60, 60)
      context.strokeRect(50, 50, 50, 50)
    }
  }
}
