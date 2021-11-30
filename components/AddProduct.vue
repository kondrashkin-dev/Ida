<template>
  <div class="add-product">
    <form class="add-product__form" @submit.prevent="addProduct">
      <label>
        Наименование товара
        <input
          v-model="product.title"
          type="text"
          placeholder="Введите наименование товара"
        />
      </label>
      <label>
        Описание товара
        <textarea placeholder="Введите описание товара" />
      </label>
      <label>
        Ссылка на изображение товара
        <input type="text" placeholder="Ссылка на изображение товара" />
      </label>
      <label>
        Цена товара
        <input type="text" placeholder="Введите цену" />
      </label>
      <button type="submit">Добавить товар</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        id: new Date(),
        title: '',
      },
    }
  },
  methods: {
    addProduct() {
      this.$store.commit('products/add', this.product)
    },
  },
}
</script>

<style lang="scss" scoped>
.add-product {
  flex: 1 0 332px;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
}
</style>
