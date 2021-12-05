<template>
  <section class="product" :class="{ deleting: isDeleting }">
    <img class="product__image" :src="product.image" :alt="product.title" />
    <div class="product__body">
      <button class="product__delete" type="button" @click="deleteProduct" />
      <h2 class="product__title">{{ product.title }}</h2>
      <p class="product__text">
        {{ product.description }}
      </p>
      <div class="product__price">{{ product.price }}</div>
    </div>
  </section>
</template>

<script>
import sleep from '~/utils/sleep'
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDeleting: false,
    }
  },
  methods: {
    async deleteProduct() {
      this.isDeleting = true
      await sleep(300)
      this.isDeleting = false
      this.$store.commit('products/delete', this.product.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.product {
  $self: &;

  position: relative;
  background: #fffefb;
  border-radius: 4px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease-in;
  &__delete {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background: url('../assets/images/icons/delete.svg') center center
      no-repeat#ff8484;
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translate(25%, -25%);
    cursor: pointer;
    transition: all 0.3s ease-in;

    @media (hover: hover) {
      visibility: hidden;
      opacity: 0;
    }
  }
  &:hover {
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.02);
    cursor: pointer;
    #{$self}__delete {
      visibility: visible;
      opacity: 1;
    }
  }
  &.deleting {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.product__body {
  padding: 1rem;
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
