<template>
  <article class="products">
    <Product v-for="item in products" :key="item.id" :title="item.title" />
  </article>
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

<style>
.products {
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
