<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string;
    size?: string;
  }>(),
  {
    text: '',
    size: '100px',
  }
);
</script>

<template>
  <div class="diamond">
    {{ props.text }}
  </div>
</template>

<style lang="postcss" scoped>
.diamond {
  position: relative;
  height: v-bind('props.size');
  width: v-bind('props.size');
  line-height: v-bind('props.size');
  text-align: center;

  &:before {
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    transform: rotateX(45deg) rotateZ(45deg);
  }

  &:after {
    position: absolute;
    top: 10px;
    left: 10px;
    content: '';
    height: calc(
      100% - 22px
    ); /* -22px is 2 * 10px gap on either side - 2px border on either side */
    width: calc(
      100% - 22px
    ); /* -22px is 2 * 10px gap on either side - 2px border on either side */
    background-color: var(--color-red-100);
    transform: rotateX(45deg) rotateZ(45deg);
  }
}
</style>
