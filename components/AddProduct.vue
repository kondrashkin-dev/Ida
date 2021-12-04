<template>
  <div class="add-product">
    <form class="add-product__form" @submit.prevent="addProduct">
      <TextField
        v-model="title"
        label="Наименование товара"
        placeholder="Введите наименование товара"
      />
      <TextField
        v-model="description"
        label="Описание товара"
        placeholder="Введите описание товара"
        textarea
        :required="false"
      />
      <TextField
        v-model="image"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
      />
      <TextField
        v-model="price"
        v-price-mask
        label="Цена товара"
        placeholder="Введите цену"
      />
      <button
        class="add-product__form-submit"
        :class="{ 'add-product__form-submit_success': isAddSuccess }"
        :disabled="!isValid || isAddSuccess"
        type="submit"
      >
        {{ isAddSuccess ? 'Товар успешно добавлен' : 'Добавить товар' }}
      </button>
    </form>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid'
import sleep from '../utils/sleep'
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
      price: '',
      isAddSuccess: false,
    }
  },
  computed: {
    isValid() {
      return this.title && this.image && this.price
    },
  },
  methods: {
    addProduct() {
      const product = {
        id: uniqueId('0'),
        image: this.image,
        title: this.title,
        description: this.description,
        price: this.price,
      }
      this.$store.commit('products/add', product)
      this.AddSuccess()
    },
    async AddSuccess() {
      this.isAddSuccess = true
      await sleep(1000)
      this.isAddSuccess = false
      //  Очистка полей формы
      this.image = this.title = this.description = this.price = ''
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
  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.02);
  }
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
  //  Обязательно дожен быть ниже обычного disabled, чтобы переписывать стили
  &_success {
    &:disabled {
      color: #fff;
      background-color: #28a745;
    }
  }

  @media (min-width: em(768)) {
    font-size: rem(12);
  }
}
</style>
