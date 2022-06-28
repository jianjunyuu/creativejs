import type { Shapes } from '../shapes'

function runIfContextExist(canvas: HTMLCanvasElement, cb: (context: CanvasRenderingContext2D) => void) {
  const context = canvas.getContext('2d')
  if (context)
    cb(context)
}

export class Scene {
  domElement = document.createElement('canvas')
  private shapes = new Set<Shapes>()

  add(shape: Shapes) {
    this.shapes.add(shape)

    shape.render()
  }

  render() {
    runIfContextExist(this.domElement, (context) => {
      this.shapes.forEach((shape) => {
        context.drawImage(shape.domElement, 0, 0)
      })
    })
  }
}
