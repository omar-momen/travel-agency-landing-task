<template>
  <header class="header">
    <section class="text" data-aos="fade-right">
      <small class="top font-italic text-h6">{{ $t("header.subTitle") }}</small>
      <h1>
        offering <span class="small">an</span> <br />
        <span class="big">Easy way</span> <span class="small">to</span> Make
        <br />
        <span class="small">Your</span> Dreem <br />
        trip
      </h1>

      <button @click="scrollDown" aria-label="Book Now">
        <span>{{ $t("form.book") }}</span>
        <!-- <Icon
          class="arrowRight"
          aria-label="arrow right icon"
          name="material-symbols:line-end-arrow-notch-rounded"
        /> -->
      </button>
    </section>

    <section class="image" data-aos="fade-left">
      <nuxt-img
        preset="default"
        src="/images/bg/head.svg"
        alt="Head section image"
        width="500"
        height="600"
      />
    </section>
  </header>
</template>

<script setup>
const scrollDown = () => {
  useHelpers().scrollToElement("#bookForm");
};
</script>

<style lang="scss" scoped>
header.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    font-family: "DM Serif Display", sans-serif;
    flex-grow: 1;

    h1 {
      font-size: 70px;

      letter-spacing: 5px;
      line-height: 1.4;
      text-transform: uppercase;

      span.big {
        color: var(--app_color);
      }
      span.small {
        font-size: 0.5em;
        text-transform: lowercase;
      }
    }

    @media (max-width: 720px) {
      text-align: center;

      h1 {
        font-size: 60px;
      }
    }

    @media (max-width: 550px) {
      h1 {
        font-size: 50px;
      }
    }

    button {
      font-family: "koho", sans-serif;
      color: var(--app_color);
      font-weight: 300;
      font-size: 2rem;
      text-align: end;
      display: block;
      font-style: italic;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-inline-end: 25px;

      span {
        margin-inline-end: 10px;
      }

      .arrowRight {
        margin-top: 13px;
        animation: arrowRight 0.9s ease-in-out infinite alternate;
      }
    }

    @keyframes arrowRight {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(13px);
      }
    }

    @keyframes arrowLeft {
      0% {
        transform: translateX(0) rotate(180deg);
      }
      100% {
        transform: translateX(-13px) rotate(180deg);
      }
    }
  }

  .image {
    @media (max-width: 1280px) {
      display: none;
    }
  }
}

body.rtl {
  header.header {
    .text {
      .arrowRight {
        animation: arrowLeft 0.9s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
