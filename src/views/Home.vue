<template>
  <div class="home">
    <aside class="image-wrapper">
      <img alt="Vue logo" src="../assets/logo.png" width="100px" />
    </aside>

    <article class="full-width show-value">
      <span><strong>Selected:</strong> {{ value }}</span>
    </article>

    <Typehead @selectedValue="value = $event" />
  </div>
</template>

<script>
// @ is an alias to /src
import Typehead from "@/components/Typehead.vue";

export default {
  name: "Home",
  components: {
    Typehead,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="css">
.image-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.show-value {
  margin: 1rem 0;
}

.full-width {
  text-align: center;
  width: 100%;
}
.strong {
  font-weight: 700;
}
</style>
