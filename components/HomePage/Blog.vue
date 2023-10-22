<template>
  <div class="blog">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="card in cards" :key="card.id">
        <nuxt-link :to="`/blogs/${card.id}`">
          <v-card>
            <v-img
              class="align-end text-white"
              height="200"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              Number {{ card.id }}
            </v-card-subtitle>

            <v-card-text>
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>

              <v-btn color="orange"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
</script>

<style lang="scss" scoped></style>
