<template>
  <div class="blog">
    <h1>{{ params.id }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const params = route.params;
</script>

<style lang="scss" scoped></style>
