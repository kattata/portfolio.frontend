<script lang="ts" setup></script>

<template>
  <div class="business-card-decorative-top">
    <!-- The inline SVG is a copy of the icon below -->
    <svg
      width="261"
      height="100"
      viewBox="0 0 261 100"
      xmlns="http://www.w3.org/2000/svg"
      class="negative-path"
    >
      <path
        id="curve"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M261 0H0V100C30.0723 80.1471 77.3416 67.3515 130.5 67.3515C183.658 67.3515 230.928 80.1471 261 100V0Z"
        fill="transparent"
      />
      <text>
        <textPath startOffset="410px" xlink:href="#curve">
          Get in touch!
        </textPath>
      </text>
    </svg>

    <BaseIcon name="negative" />
  </div>
</template>

<style lang="postcss" scoped>
.business-card-decorative-top {
  position: relative;

  &:deep(.icon svg) {
    width: 100%;
    height: 100%;
  }

  .negative-path {
    position: absolute;
    bottom: 24px;
  }

  textPath {
    font-size: 26px;
    font-family: var(--font-family-display-primary);
    text-transform: uppercase;
    fill: var(--color-secondary-100);
  }
}
</style>
