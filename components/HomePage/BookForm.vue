<template>
  <v-form ref="form" class="auth" @submit.prevent="book">
    <h2 class="h_2 text-center">Adjust Your Flight</h2>
    <div class="inputs">
      <v-row>
        <!-- Passengers -->
        <v-col cols="12" :md="isThereChildren ? 4 : 6">
          <base-input
            type="number"
            v-model="data.numOfAdults"
            :label="$t('labels.numOfAdults')"
            required
          ></base-input
        ></v-col>
        <v-col v-if="isThereChildren" cols="12" :md="isThereChildren ? 4 : 6">
          <base-input
            type="number"
            v-model="data.numOfChildren"
            :label="$t('labels.numOfChildren')"
            required
          ></base-input
        ></v-col>
        <v-col cols="12" md="4">
          <v-switch
            :label="$t('labels.isThereChildren')"
            v-model="isThereChildren"
            color="primary"
          ></v-switch>
        </v-col>

        <!-- From - To -->
        <v-col cols="12" md="6">
          <select-input
            v-model="data.from"
            :staticItems="fromCities"
            :label="$t('labels.from')"
            required
          ></select-input>
        </v-col>
        <v-col cols="12" md="6">
          <select-input
            v-model="data.to"
            :staticItems="toCities"
            :label="$t('labels.to')"
            :_sync="data.from"
            required
          ></select-input>
        </v-col>

        <!-- Ticket Class -->
        <v-col cols="12" md="6">
          <select-input
            v-model="data.ticketClass"
            :staticItems="ticketClasses"
            :label="$t('labels.ticketClass')"
            required
          ></select-input>
        </v-col>

        <!-- Trip Type -->
        <v-col cols="12" md="6">
          <select-input
            v-model="data.tripType"
            :staticItems="tripTypes"
            :label="$t('labels.tripType')"
            required
          ></select-input>
        </v-col>

        <!-- Trip Date -->
        <v-col cols="12">
          <VueDatePicker
            v-model="data.tripDate"
            :placeholder="$t('labels.tripDate')"
          ></VueDatePicker>
        </v-col>
      </v-row>
    </div>

    <footer class="authFooter">
      <base-button :loading="loading" type="submit" class="lg w-100">{{
        $t("form.book")
      }}</base-button>
    </footer>
  </v-form>
</template>

<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const loading = ref(false);
const data = reactive({
  numOfAdults: null,
  numOfChildren: null,

  from: null,
  to: null,

  ticketClass: null,
  tripType: null,
  tripDate: null,
});

const isThereChildren = ref(false);

const form = ref(null);
const book = async () => {
  const { valid } = await form.value.validate();
  if (!valid) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};

// Fixed Data
const ticketClasses = [
  { name: "Economy", id: "economy" },
  { name: "Business", id: "business" },
  { name: "First Class", id: "first class" },
];
const tripTypes = [
  { name: "One Way", id: "one way" },
  { name: "Round Trip", id: "round trip" },
];
const fromCities = [
  { name: "Cairo", id: "cairo" },
  { name: "Alex", id: "alex" },
  { name: "Aswan", id: "aswan" },
  { name: "Luxor", id: "luxor" },
  { name: "Sharm", id: "sharm" },
  { name: "Hurghada", id: "hurghada" },
  { name: "Marsa Alam", id: "marsa alam" },
  { name: "Marsa Matrouh", id: "marsa matrouh" },
  { name: "Taba", id: "taba" },
  { name: "Dahab", id: "dahab" },
  { name: "Nuweiba", id: "nuweiba" },
  { name: "Ras Sudr", id: "ras sudr" },
];
const toCities = ref([...fromCities]);
watch(
  () => data.from,
  (val) => {
    toCities.value = fromCities.filter((city) => city.id !== val.id);
  }
);
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid var(--border);
}
</style>
