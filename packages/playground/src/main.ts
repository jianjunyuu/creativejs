import { Renderer, Scene } from 'creativejs'

const scene = new Scene()
const renderer = new Renderer()
scene.add()
function render() {
  requestAnimationFrame(render)
  renderer.render(/* scene */)
}
render()

document.body.appendChild(renderer.domElement)
