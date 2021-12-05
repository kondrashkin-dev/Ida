<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <select class="header__select" v-model="selected" @change="onChange">
      <option disabled value="">По умолчанию</option>
      <option>В алфавитном порядке</option>
      <option>Цена по возрастанию</option>
      <option>Цена по убыванию</option>
    </select>
  </header>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    onChange() {
      switch (this.selected) {
        case 'В алфавитном порядке':
          this.$store.commit('products/sort')
          break
        case 'Цена по возрастанию':
          this.$store.commit('products/sort', 2)
          break
        case 'Цена по убыванию':
          this.$store.commit('products/sort', 3)
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &__title {
    color: #3f3f3f;
    font-weight: 600;
    font-size: rem(18);
    line-height: em(35);
    @media (min-width: em(576)) {
      font-size: rem(20);
    }
    @media (min-width: em(768)) {
      font-size: rem(28);
    }
  }
  &__select {
    padding: em(11) 1em;
    color: #b4b4b4;
    font-size: rem(12);
    line-height: em(15);
    background: #fffefb;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
