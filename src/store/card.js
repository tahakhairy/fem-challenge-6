import { defineStore } from "pinia";
import { ref } from "vue";
export const useCardStore = defineStore("card", () => {
  // State
  const cardData = ref({
    holderName: "",
    cardNumber: [firstComp, secondComp, thirdComp, fourthComp],
    expDate: `${month}/${year}`,
    cvc: 000,
  });
});
