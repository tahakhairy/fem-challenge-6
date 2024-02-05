<template>
  <div class="cards-container">
    <div class="card-front">
      <img
        src="../assets/images/bg-card-front.png"
        class="card-front-img"
        alt=""
      />
      <img
        class="card-logo"
        src="../assets/images/card-logo.svg"
        alt="card-logo"
      />
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
      <img
        src="../assets/images/bg-card-back.png"
        class="card-back-img"
        alt=""
      />
      <span v-if="cardStore.cardData.cvc === ''" class="card-cvv">000</span>
      <span v-else class="card-cvv">{{ cvc }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCardStore } from "@/store/card";

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
.cards-container {
  margin-right: 12rem;
}

.cards-container .card-back {
  margin-top: 2rem;
  margin-left: 6rem;
  /* box-shadow: 0 4px 60px -2px rgba(0, 0, 0, 0.295); */
}
.cards-container .card-front,
.cards-container .card-back {
  position: relative;
  width: 447px;
}

.card-front-img {
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  object-fit: contain;
  left: 0;
}

.card-back-img {
  position: relative;
  width: 100%;
  object-fit: contain;
  z-index: -1;
  top: 0;
  left: 0;

  overflow: hidden;
}
.cards-container .card-front {
  padding: 1.5rem;
  border-radius: 10px;
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
  /* margin: 6rem 2rem 6rem 6rem; */
  position: absolute;
  padding-bottom: 0.2rem;
  right: 14%;
  color: #dedddf;
}

@media (max-width: 500px) {
  .cards-container {
    margin: 0;
    width: 82%;
    height: 225px;
    position: relative;
  }

  .cards-container .card-back {
    width: 100%;
    margin: 0;
    position: absolute;
    z-index: 1;
    left: 11%;
  }

  .cards-container .card-front {
    padding: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    position: absolute;
    z-index: 2;
    top: 98px;
    right: 11%;
  }

  .card-front .card-info {
    margin-top: 1rem;
  }

  .card-front .card-info .card-number {
    margin: 1rem 0;
    font-size: 1.4rem;
  }

  .card-front .card-info .card-number span {
    margin-right: 0.5%;
    height: 1rem;
  }

  .card-front .card-info .card-name-date,
  .card-back .card-cvv {
    font-size: 0.75rem;
  }

  .card-logo {
    width: 25%;
  }
}
</style>
