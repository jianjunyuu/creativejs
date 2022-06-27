// import type { CreativeObject } from '../object'
export class Canvas {
  // private objects: CreativeObject[] = []/* CreativeObject */
  constructor(/* element: HTMLCanvasElement */) {
    /**
     * 初始化上层画布
     */

    /**
     * 初始化下层画布
     */

  }

  add() {}
  // add(object: CreativeObject): void
  // add(...object: CreativeObject[]) {
  //   this.objects.push(object)
  // }
}

// const element = document.documentElement
export class Scene {
  constructor() {
    // console.log(this.canvas)
  }

  add() {}
}

export class Renderer {
  domElement = document.createElement('canvas')
  render(/* scene: Scene */) {}
  setSize() {}
}

export async function M() {
  return false
}
