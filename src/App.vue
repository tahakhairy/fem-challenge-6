<template>
  <div class="app-bg"></div>
  <div class="content">
    <card-sides></card-sides>

    <complete-state
      v-if="isSubmitted"
      v-model:completed="isSubmitted"
    ></complete-state>

    <card-form v-else v-model:submitted="isSubmitted"></card-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CardForm from "@/components/CardForm.vue";
import CompleteState from "./components/CompleteState.vue";
import CardSides from "./components/CardSides.vue";

const isSubmitted = ref(false);
</script>
<style scoped>
.app-bg {
  position: absolute;
  width: 30%;
  background: url(./assets/images/bg-main-desktop.png) repeat center
    center/cover;
  height: 100%;
  z-index: -1;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  /* transform: scale(0.85); */
}

@media (max-width: 500px) {
  .app-bg {
    height: 26%;
    width: 100%;
  }

  .content {
    margin: 0 auto;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    padding: 2rem 1rem;
  }
}
</style>
