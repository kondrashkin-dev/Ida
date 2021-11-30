<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <button class="header__btn btn" type="button">
      <span class="header__btn-content"> По умолчанию </span>
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
.header__title {
  color: #3f3f3f;
  font-weight: 600;
  font-size: rem(28);
  line-height: em(35);
}
.header__btn {
  padding: em(11) 1em;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.header__btn-content {
  display: flex;
  align-items: center;
  color: #b4b4b4;
  font-size: rem(12);
  line-height: em(15);
  &::after {
    width: 1em;
    height: em(12);
    margin-left: em(5);
    background-image: url('~assets/images/icons/arrow.svg');
    background-size: cover;
    content: '';
  }
}
</style>
