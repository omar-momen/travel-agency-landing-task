import { useAuthStore } from "@/stores/auth";
export const useCartStore = defineStore("cart", () => {
  const DB_CART = ref({
    items: [],
    total: 600,
    subtotal: 700,
  });

  const cart = ref({
    items: [],
  });

  const items_in_cart_length = computed(() => {
    return cart.value.items.length || useAuthStore().user?.cartLength || "0";
  });

  const getCart = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        cart.value = DB_CART.value;
        resolve();
      }, 1000);
    });
  };

  const addToCart = async (product) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        DB_CART.value.items.push(product);
        let beat = new Audio("/sounds/message_sent.mp3");
        beat.play();
        resolve(product);
        navigateTo("/cart");
      }, 1000);
    });
  };

  return { cart, getCart, addToCart, items_in_cart_length };
});
