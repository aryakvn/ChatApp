<template>
  <div class="app-bar">
      <span v-if="title"> {{ title }} </span>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: ["title"]
};
</script>

<style scoped>
.app-bar {
  top: 0;
  position: sticky;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #bdbdbd;
  backdrop-filter: blur(16px);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>