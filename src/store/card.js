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

  const cardNumberSplitted = computed(() => {
    // Card number without dash (-)

    // Generate dashed number
    let dashedNumber = cardData.value.cardNumber.match(/.{1,4}/g);
    console.log(dashedNumber);
    // Replace the dashed number with the real one
    return dashedNumber.join(" ");
  });

  return { cardData, cardNumberCompination, cardNumberSplitted };
});
