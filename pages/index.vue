<template>
  <main class="home">
    <AddProduct />
    <Products />
  </main>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.home {
  @media (min-width: em(768)) {
    display: flex;
    align-items: flex-start;
  }
}
</style>
