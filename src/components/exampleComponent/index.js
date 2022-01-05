import ExampleComponent from './src/ExampleComponent.vue'
import _Vue from 'vue'
/* istanbul ignore next */
ExampleComponent.install = function(Vue) {
  if (!Vue) {
    window.Vue = Vue = _Vue
    }
  Vue.component(ExampleComponent.name, ExampleComponent)
}

export default ExampleComponent
