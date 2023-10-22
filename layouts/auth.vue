<template>
  <div class="auth_layout">
    <logo :big="true" class="mb-5" fixed_src="/images/logo/logo_dark.png" />

    <div class="_container">
      <div class="image">
        <nuxt-img
          provider="unsplash"
          src="/photo-1520006403909-838d6b92c22e"
          preset="default"
          width="500"
          height="500"
        />
        <div class="overlay"></div>
      </div>
      <div class="form">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth_layout {
  background: var(--main_bg);
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    .logo {
      display: none;
    }
  }

  ._container {
    display: flex;
    width: 70%;
    height: 70vh;

    .form {
      padding: 15px;
      box-shadow: 0 0 10px var(--main_shadow);
      flex-grow: 1;
      background: var(--main_bg);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .image {
      position: relative;
      width: 60%;
      height: 100%;

      .overlay {
        border-radius: 15px 0 0 15px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 15px 0 0 15px;
      }
    }

    @media (max-width: 1120px) {
      width: 90%;

      .image {
        width: 50%;
      }
    }

    @media (max-width: 700px) {
      width: 100%;
      height: 100vh;
      flex-direction: column;

      .image {
        width: 100%;

        img {
          border-radius: 0;
        }
      }

      .form {
        border-radius: 50px 50px 0 0;
        transform: translateY(-210px);
        z-index: 3;

        h2 {
          margin-bottom: 20px !important;
        }
      }
    }
  }
}
</style>

<script setup>
import { useAuthStore } from "@/stores/auth";
</script>
