import Vue from 'vue'
Vue.directive('price-mask', {
  bind(el) {
    //  Даёт возможность навесить директиву на родителя инпута или сам инпут
    const input = el.matches('input') ? el : el.querySelector('input')

    input.oninput = function (e) {
      input.value = input.value
        .replace(/\s/g, '') // убираем те пробелы которые были
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') // добавляем пробелы где нужно
    }
  },
})
