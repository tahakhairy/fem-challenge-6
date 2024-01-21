import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCardStore = defineStore("card", () => {
  // State
  const cardData = ref({
    holderName: "",
    cardNumber: "",
    expDate: "00/00",
    cvc: "000",
  });

  const cardNumberCompination = computed(() => {
    return cardData.value.cardNumber.match(/.{1,4}/g);
  });

  return { cardData, cardNumberCompination };
});
