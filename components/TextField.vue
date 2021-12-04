<template>
  <label class="text-field" :class="{ required: required }">
    <span class="text-field__text">{{ label }}</span>
    <textarea
      v-if="textarea"
      class="text-field__item text-field__item-textarea"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <input
      v-else
      class="text-field__item text-field__item-input"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    textarea: {
      type: Boolean,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.text-field {
  $self: &;

  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: rem(18);
  }
  &__text {
    position: relative;
    align-self: start;
    margin-bottom: em(12);
    color: #49485e;
    font-size: rem(16);
    line-height: em(13);

    @media (min-width: em(768)) {
      margin-bottom: em(10);
      font-size: rem(16);
      letter-spacing: -0.02em;
    }

    #{$self}.required &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 4px;
      background: #ff8484;
      border-radius: 4px;
      transform: translateX(100%);
      content: '';
    }
  }
  &__item {
    align-self: stretch;
    padding: em(11) 1em;
    color: #b4b4b4;
    font-size: rem(14);
    line-height: em(15);
    background: #fffefb;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    &:focus {
      outline: 1px solid #b4b4b4;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    &:hover {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }
    &-textarea {
      min-height: 125px;
      resize: none;
    }
  }
}
</style>
