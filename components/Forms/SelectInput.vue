<template>
  <v-autocomplete
    class="custom_input select"
    @update:modelValue="updateValue"
    :model-value="modelValue"
    :loading="loading"
    :deletable-chips="true"
    :items="isStatic ? staticItems : items"
    :disabled="disabled"
    :rules="allRules"
    :return-object="returnObject"
    variant="solo"
    item-title="name"
    item-value="id"
    v-bind:="$attrs"
  >
    <template v-slot:append-inner>
      <slot name="appendInner"></slot>
    </template>
  </v-autocomplete>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  disabled: {
    required: false,
    default: false,
    type: Boolean,
  },
  returnObject: {
    required: false,
    default: true,
    type: Boolean,
  },
  staticItems: {
    required: false,
    type: Array,
    default: () => [],
  },
  getUrl: {
    required: false,
    type: String,
  },
  modelValue: {
    required: true,
  },
  _sync: {
    required: false,
    type: Object,
    default: () => {},
  },
  rules: {
    require: false,
    type: Array,
    default: () => [],
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const loading = ref(false);

const isStatic = computed(() => {
  return props.staticItems.length > 0;
});

const items = ref([]);

const staticItems = computed(() => {
  return props.staticItems;
});

const _sync = computed(() => {
  return props._sync;
});
watch(_sync, () => {
  getSelectItems();
  emits("update:modelValue", null);
  items.value = [];
});

const disabled = computed(() => {
  return props.disabled || loading.value || props._sync === null;
});

const getSelectItems = async () => {
  if (isStatic.value || disabled.value) {
    return;
  }

  loading.value = true;
  const { data } = await useMyFetch(props.getUrl, {
    method: "GET",
  });
  items.value = data.value.data;
  loading.value = false;
};

const allRules = computed(() => {
  if (!props.required) {
    return [];
  }
  let default_rules = [
    (val) => {
      if (props.multiple) {
        return (
          val.length > 0 || useNuxtApp().$i18n.global.t("validation.empty")
        );
      } else {
        return !!val || useNuxtApp().$i18n.global.t("validation.empty");
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const updateValue = (e) => {
  emits("update:modelValue", e);
};

onMounted(async () => {
  await nextTick();
  await getSelectItems();
});
</script>
