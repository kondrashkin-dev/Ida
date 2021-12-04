const image = require('../assets/images/Polaroid.jpg')

export const state = () => ({
  products: [
    {
      id: '1',
      image,
      title: 'Наименование товара',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.',
    },
    {
      id: '2',
      image,
      title: 'Наименование товара',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.',
    },
    {
      id: '3',
      image,
      title: 'Наименование товара',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.',
    },
  ],
})

export const mutations = {
  add(state, product) {
    state.products.push(product)
  },
  delete({ products }, id) {
    const index = products.findIndex((product) => product.id === id)
    products.splice(index, 1)
  },
}

export const getters = {
  products: (state) => state.products,
}
