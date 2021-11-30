export const state = () => ({
  products: [
    { id: 1, title: '', text: 'lorem' },
    { id: 2, title: '', text: 'lorem' },
    { id: 3, title: '', text: 'lorem' },
  ],
})

export const mutations = {
  add(state, product) {
    state.products.push(product)
  },
}

export const getters = {
  products: (state) => state.products,
}
