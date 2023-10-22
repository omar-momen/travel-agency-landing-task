import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default defineNuxtPlugin(({}) => {
  return {
    provide: {
      iziToast,
    },
  };
});
