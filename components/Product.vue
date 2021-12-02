<template>
  <section class="product">
    <img class="product__image" :src="product.image" alt="Polaroid" />
    <h2 class="product__title">{{ product.title }}</h2>
    <p class="product__text">
      {{ product.description }}
    </p>
    <div class="product__price">{{ product.price }}</div>
  </section>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  padding: 1rem;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0 20px r30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
}
.product__image {
  width: 100%;
  object-fit: cover;
}
.product__title {
  color: #3f3f3f;
  font-weight: 600;
  font-size: rem(20);
  line-height: em(25);
  &:not(:last-child) {
    margin-bottom: 1em;
  }
}
.product__text {
  color: #3f3f3f;
  font-size: 1rem;
  line-height: em(20);
  &:not(:last-child) {
    margin-bottom: 2em;
  }
}
.product__price {
  color: #3f3f3f;
  font-weight: 600;
  font-size: rem(24);
  line-height: em(30);
}
</style>
