import ExampleComponent from './src/components/exampleComponent/index.js'
import ExampleComponentTwo from './src/components/ExampleComponentTwo/index.js'

const components = [ ExampleComponentTwo, ExampleComponent]
const install = (Vue, opts = {}) => {
  components.forEach(component => {
    console.log(component)
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  ExampleComponentTwo,
  ExampleComponent
}
