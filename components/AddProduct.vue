<template>
  <div class="add-product">
    <form class="add-product__form" @submit.prevent="addProduct">
      <TextField
        v-model="product.title"
        label="Наименование товара"
        placeholder="Введите наименование товара"
      />
      <TextField
        v-model="product.description"
        label="Описание товара"
        placeholder="Введите описание товара"
        textarea
      />
      <TextField
        v-model="product.image"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
      />
      <TextField
        v-model="product.price"
        label="Цена товара"
        placeholder="Введите цену"
      />
      <button
        class="add-product__form-submit"
        :disabled="!isValid"
        type="submit"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid'
export default {
  data() {
    return {
      product: {
        id: uniqueId('id'),
        title: '',
        description: '',
        image: '',
        price: '',
      },
    }
  },
  computed: {
    isValid() {
      return this.product.title && this.product.image && this.product.price
    },
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
  padding: rem(24);
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  @media (min-width: em(768)) {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media (max-width: em(768)) {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
}
.add-product__form {
  display: flex;
  flex-direction: column;
}

.add-product__form-submit {
  padding: em(11) 0;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  line-height: em(15);
  background: #7bae73;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:disabled {
    color: #b4b4b4;
    background-color: #eee;
    cursor: auto;
  }
  @media (min-width: em(768)) {
    font-size: rem(12);
  }
}
</style>
