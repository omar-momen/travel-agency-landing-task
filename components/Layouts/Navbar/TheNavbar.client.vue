<template>
  <section class="navs">
    <nav class="theNav" :class="{ stikyNav: stikyNav, inView: inView }">
      <div class="container">
        <div class="leftSide">
          <SwitchLanguage />
          <ChangeTheme class="mx-4" />
          <SearchMenu />
        </div>

        <Logo fixed_src="/images/logo/logo_dark.png" />

        <div class="rightSide">
          <notification-menu
            class="mx-2"
            v-if="useAuthStore().user && useAuthStore().user.token"
            :image="useAuthStore().user && useAuthStore().user.image"
            url="/lol"
          ></notification-menu>

          <UserMenu
            class="mx-2"
            v-if="useAuthStore().user && useAuthStore().user.token"
          />

          <base-button
            v-if="!useAuthStore().user"
            aria-label="login"
            link
            to="/authentication/login"
            class="mx-2"
            >Login</base-button
          >
        </div>
      </div>
    </nav>
    <LowerNav />
  </section>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";

const stikyNav = ref(false);
const inView = ref(false);

onMounted(() => {
  setTimeout(() => {
    const BODY = document.querySelector("body");
    const NAV_HEIGHT = document.querySelector("nav.theNav").clientHeight;

    window.addEventListener("scroll", () => {
      let documentScrollTop = document.documentElement.scrollTop;

      stikyNav.value = documentScrollTop > 6 * NAV_HEIGHT;
      inView.value =
        documentScrollTop > 8 * NAV_HEIGHT &&
        useHelpers().scrollDirection() != "down";

      if (stikyNav.value) {
        BODY.style.paddingTop = NAV_HEIGHT + "px";
      } else {
        BODY.style.paddingTop = 0;
      }
    });
  }, 1000);
});
</script>

<style lang="scss" scoped>
.theNav {
  background: var(--main_bg);
  padding-top: 3px;
  box-shadow: 0 0 10px var(--main_shadow);
  .container {
    position: relative;
    transition: all 0.3s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;

    .leftSide {
      display: flex;
      align-items: center;
    }

    .rightSide {
      display: flex;
      align-items: center;

      & > div {
        margin: 0 5px;
      }
    }

    @media (max-width: 700px) {
      .language,
      .change_theme,
      .fave,
      .cart,
      .user {
        display: none;
      }
      .toggleMenu {
        display: block;
      }
    }
  }

  transition: all 0.3s ease-in-out;
  &.stikyNav {
    position: fixed;
    top: -100px;
    width: 100%;
    z-index: 999;
    border-bottom: 1.5px solid var(--border);
    box-shadow: 0 0 10px var(--main_shadow);
  }
  &.inView {
    top: 0;
  }
}
</style>
