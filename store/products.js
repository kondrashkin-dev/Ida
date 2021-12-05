const image = require('../assets/images/Polaroid.jpg')

export const state = () => ({
  products: [
    {
      id: '1',
      image,
      title: 'Один',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '12 000 руб.',
    },
    {
      id: '2',
      image,
      title: 'Два',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.',
    },
    {
      id: '3',
      image,
      title: 'Три',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '20 000 руб.',
    },
    {
      id: '4',
      image,
      title: 'Один',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '12 000 руб.',
    },
    {
      id: '5',
      image,
      title: 'Два',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '10 000 руб.',
    },
    {
      id: '6',
      image,
      title: 'Три',
      description:
        'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      price: '20 000 руб.',
    },
  ],
})

export const mutations = {
  add({ products }, product) {
    products.push(product)
  },
  delete({ products }, id) {
    const index = products.findIndex((product) => product.id === id)
    products.splice(index, 1)
  },
  sort({ products }, type) {
    function compareTitle(a, b) {
      if (a.title > b.title) return 1 // если первое значение больше второго
      if (a.title === b.title) return 0 // если равны
      if (a.title < b.title) return -1
    }
    function compareLargerPrice(a, b) {
      if (a.price > b.price) return 1 // если первое значение больше второго
      if (a.price === b.price) return 0 // если равны
      if (a.price < b.price) return -1
    }
    function compareSmallerPrice(a, b) {
      if (a.price > b.price) return -1 // если первое значение больше второго
      if (a.price === b.price) return 0 // если равны
      if (a.price < b.price) return 1
    }

    switch (type) {
      case 2:
        products.sort(compareLargerPrice)
        break
      case 3:
        products.sort(compareSmallerPrice)
        break
      default:
        products.sort(compareTitle)
        break
    }
  },
}

export const getters = {
  products: ({ products }) => products,
}
