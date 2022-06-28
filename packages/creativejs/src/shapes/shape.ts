export abstract class Shape {
  domElement = document.createElement('canvas')
  abstract render(): void
}
