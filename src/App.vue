<template>
  <div class="app-bg"></div>
  <div class="content">
    <div class="cards-container">
      <div class="card-front">
        <img src="./assets/images/card-logo.svg" alt="card-logo" />
        <div class="card-info">
          <div class="card-number">
            <span v-if="cardStore.cardData.cardNumber === ''"
              >0000 0000 0000 0000</span
            >
            <span v-else v-for="comp in cardNumber">{{ comp }}</span>
          </div>
          <div class="card-name-date">
            <p>{{ holderName }}</p>
            <p>
              <span v-if="cardStore.cardData.expDate.month === ''"> 00 </span>
              <span v-else>{{ expDate.month }}</span>
              /
              <span v-if="cardStore.cardData.expDate.year === ''">00</span>
              <span v-else>{{ expDate.year }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="card-back">
        <span v-if="cardStore.cardData.cvc === ''" class="card-cvv">000</span>
        <span v-else class="card-cvv">{{ cvc }}</span>
      </div>
    </div>
    <card-form></card-form>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useCardStore } from "./store/card";
import CardForm from "@/components/CardForm.vue";

const cardStore = useCardStore();

const cardNumber = computed(() => {
  return cardStore.cardData.cardNumber.split(" ");
});

const holderName = computed(() => {
  return cardStore.cardData.holderName;
});

const expDate = computed(() => {
  return {
    month: cardStore.cardData.expDate.month,
    year: cardStore.cardData.expDate.year,
  };
});

const cvc = computed(() => {
  return cardStore.cardData.cvc;
});
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

.content .cards-container {
  margin-right: 12rem;
}

.cards-container .card-back {
  margin-top: 2rem;
  margin-left: 6rem;
}
.cards-container .card-front,
.cards-container .card-back {
  width: 447px;
  height: 245px;
}
.cards-container .card-front {
  background: url(./assets/images/bg-card-front.png) no-repeat center
    center/cover;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 60px -2px rgba(0, 0, 0, 0.295);
}

.cards-container .card-back {
  background: url(./assets/images/bg-card-back.png) no-repeat center
    center/cover;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 50px -2px rgba(0, 0, 0, 0.295);
}

.card-front .card-info {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.card-front .card-info .card-number {
  font-size: 2rem;
  color: #dedddf;
  margin: 2rem 0;
}
.card-front .card-info .card-number span {
  margin-right: 0.7rem;
  height: 1rem;
}

.card-front .card-info .card-name-date {
  display: flex;
  justify-content: space-between;
  color: #dedddf;
}

.card-back {
  display: flex;
  justify-content: end;
  align-items: center;
}

.card-back .card-cvv {
  margin: 6rem 2rem 6rem 6rem;
  padding-bottom: 0.2rem;
  color: #dedddf;
}
</style>
