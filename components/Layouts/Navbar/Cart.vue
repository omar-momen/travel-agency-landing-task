<template>
  <RouterLink to="/cart">
    <v-tooltip
      theme="light"
      text="Cart"
      location="bottom"
      aria-label="Cart Icon"
    >
      <template v-slot:activator="{ props }">
        <v-badge
          :class="{ animate: animate }"
          class="cartBadge"
          color="#349B89"
          :content="itemsLength"
        >
          <Icon v-bind="props" name="ph:shopping-cart-simple-light" />
        </v-badge>
      </template>
    </v-tooltip>
  </RouterLink>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
const itemsLength = computed(() => {
  return useCartStore().items_in_cart_length;
});

const animate = ref(false);
watch(itemsLength, () => {
  animate.value = true;

  setTimeout(() => {
    animate.value = false;
  }, 1000);
});
</script>

<style lang="scss">
.cartBadge {
  &.animate {
    .v-badge__badge {
      animation: bounce 0.9s linear;
    }
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
