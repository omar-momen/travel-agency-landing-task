<template>
  <div class="notification" @click.stop="show = !show">
    <v-tooltip
      theme="light"
      text="Notifications"
      location="bottom"
      aria-label="Notifications Icon"
    >
      <template v-slot:activator="{ props }">
        <v-badge
          color="primary"
          :content="
            useAuthStore().user ? useAuthStore().user.notificationLength : 0
          "
        >
          <Icon v-bind="props" name="ion:md-notifications-outline" />
        </v-badge>
      </template>
    </v-tooltip>

    <NavDropdown :show="show" @close="show = false">
      <template v-slot>
        <div
          class="notification_drop_down"
          :class="{ no_Data: notifications.length === 0 }"
        >
          <ul class="items" v-show="notifications.length > 0">
            <li
              v-for="item in notifications"
              class="item"
              :key="item.id"
              @click.stop="show = false"
            >
              <div class="image">
                <nuxt-img
                  preset="default"
                  :src="item.image"
                  alt="Notification's Owner"
                />
              </div>

              <div class="content">
                <h6>{{ item.title }}</h6>
                <p class="desc">{{ item.body.slice(0, 50) }}</p>
              </div>
            </li>
          </ul>
          <div class="noData" v-show="notifications.length === 0">
            <nuxt-img
              preset="default"
              height="300"
              width="300"
              src="/images/bg/noNotifications.svg"
              alt="Notifications Empty Image"
            />
          </div>
        </div>
      </template>
    </NavDropdown>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { useAuthStore } from "@/stores/auth";

const show = ref(false);
const notifications = ref([]);

// const getData = async () => {
//   const res = await useFetch("notifications").then((res) => {});
// };
// getData();
</script>

<style lang="scss" scoped>
.notification {
  position: relative;

  @media (max-width: 800px) {
    position: unset;
  }

  .notification_drop_down {
    .items {
      width: 300px;
      height: auto;
      overflow-y: scroll;

      .item {
        padding: 20px 10px 10px;
        border-bottom: 1px solid #eee;
        display: flex;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
          background: #eee;
        }

        .image {
          margin-inline-end: 10px;
          img {
            height: 50px;
          }
        }

        .content {
          h6 {
            color: gray;
            font-size: 15px;
          }
          p.desc {
            font-size: 14px;
          }
        }
      }
    }

    .noData {
      overflow: hidden;
      height: 20vw;
      width: 20vw;

      @media (max-width: 800px) {
        width: 100%;
        height: 40vw;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }

    &.no_Data {
      .items {
        overflow: unset;
      }
    }
  }
}
</style>
