<template>
  <div>
    <main class="main">
      <article class="full-width show-value">
        <span><span class="strong">Input:</span> {{ value }}</span>
      </article>
      <div class="default-width">
        <select ref="mySelect"></select>
      </div>
    </main>
  </div>
</template>

<script>
import Choices from "choices.js";

export default {
  name: "Typehead",

  computed: {},

  mounted() {
    // choices.js instantiation
    this.myChoices = new Choices(this.$refs.mySelect, {
      searchChoices: true,
      searchResultLimit: 4,
      searchFields: ["label", "value"],
      classNames: {
        containerInner: "choices__inner",
      },
    });
    // populate choices with the Vuex stored choices
    this.myChoices.setChoices(this.$store.state.choices);
    // Adds some handlers to search and addItem events
    this.$refs.mySelect.addEventListener("search", this.handleSelectChange);
    this.$refs.mySelect.addEventListener("addItem", this.setValue);
  },

  methods: {
    // it emmits the selected value to the Vuex state
    setValue(e) {
      this.$store.commit("setValue", e.detail);
      this.$emit("selectedValue", e.detail.value);
      this.value = "";
    },

    handleSelectChange(e) {
      this.value = e.detail.value;
    },
  },

  data() {
    return {
      value: "",
    };
  },

  destroy() {
    // it destroys the current instance of choices.js
    this.myChoices.destroy();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.show-value {
  margin: 1rem 0;
}

.full-width {
  width: 100%;
}
.default-width {
  width: 350px;
}
</style>
