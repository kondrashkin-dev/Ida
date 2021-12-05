<template>
  <article v-if="products.length" class="products">
    <Product v-for="item in products" :key="item.id" :product="item" />
  </article>
  <article v-else class="products products_empty">Продуктов нет</article>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
  },
}
</script>

<style lang="scss" scope>
.products {
  display: grid;
  flex: 1 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(278px, 1fr));
  gap: 1rem;
  &_empty {
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
  }
}
</style>
