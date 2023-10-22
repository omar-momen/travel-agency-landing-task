<template>
  <div class="homePage">
    <TheHeader />

    <section class="homeSection" id="bookForm">
      <BookForm />
    </section>

    <section class="homeSection">
      <Blog />
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "HomePage",
});
</script>

<style scoped lang="scss">
.homeSection {
  margin-bottom: 100px;
  min-height: 200px;
}
</style>
