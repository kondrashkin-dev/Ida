<template>
  <section class="product">
    <img
      class="product__image"
      src="~assets/images/Polaroid.jpg"
      alt="Polaroid"
    />
    <h2 class="product__title">{{ title }}</h2>
    <p class="product__text">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <div class="product__price">10 000 руб.</div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.product {
  padding: 1rem;
  background: #fffefb;
  border-radius: rem(4);
  box-shadow: 0 rem(20) rem(30) rgba(0, 0, 0, 0.04),
    0 rem(6) rem(10) rgba(0, 0, 0, 0.02);
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
