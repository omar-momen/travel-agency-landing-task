<template>
  <!-- =========== Text && Number && Email =========== -->
  <v-text-field
    v-if="
      type == 'text' || type == 'tel' || type == 'email' || type == 'number'
    "
    :aria-label="`input ${type}`"
    :name="`input ${type}`"
    v-bind:="$attrs"
    class="custom_input"
    :type="type"
    :class="[type]"
    :rules="allRules"
    variant="solo"
    :required="required"
    @click:clear="clearValue"
    @input="updateValue"
  >
    <template v-slot:append-inner>
      <slot name="appendInner"></slot>
    </template>
  </v-text-field>

  <!-- =========== Textarea =========== -->
  <v-textarea
    v-else-if="type == 'textarea'"
    v-bind:="$attrs"
    class="custom_input"
    :class="[type]"
    :rules="allRules"
    @input="updateValue"
    variant="solo"
    @click:clear="clearValue"
    :required="required"
    filled
    :aria-label="`input ${type}`"
    :name="`input ${type}`"
  >
    <slot />
  </v-textarea>

  <!-- =========== Password =========== -->
  <v-text-field
    v-else-if="type == 'password'"
    v-bind:="$attrs"
    class="custom_input"
    :class="[type]"
    :rules="allRules"
    @input="updateValue"
    variant="solo"
    :required="required"
    :type="showPass ? 'text' : 'password'"
    :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append-inner="showPass = !showPass"
    @click:clear="clearValue"
    :aria-label="`input ${type}`"
    :name="`input ${type}`"
  >
    <slot />
  </v-text-field>

  <div class="unsuported input type" v-else></div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    required: true,
  },
  rules: {
    required: false,
    type: Array,
    default: () => [],
  },
  type: {
    default: "text",
    type: String,
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};

const allRules = computed(() => {
  if (!props.required) {
    return [];
  }
  let default_rules = [
    (val) => {
      if (!val) {
        return useNuxtApp().$i18n.global.t("validation.empty");
      } else {
        return true;
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const showPass = ref(false);

const clearValue = () => {
  emits("update:modelValue", null);
};
</script>

<style lang="scss">
.v-input.custom_input {
  .v-input__control {
    .v-field {
      border-radius: 5px;
      border: 1px solid var(--border);
      box-shadow: none;

      .v-field__overlay {
      }

      .v-field__loader {
      }
      .v-field__field {
        label {
        }

        input {
        }
      }

      .v-field__clearable {
      }

      .v-field__outline {
        .v-field__outline__start {
        }
        .v-field__outline__end {
        }
      }
    }
  }

  .v-input__details {
    .v-messages {
      & > div:first-child {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
