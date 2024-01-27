<template>
  <vee-form
    action=""
    :validation-schema="validationSchema"
    @submit="submitForm"
  >
    <div class="input-field">
      <label for="name">Cardholder Name</label>
      <vee-field
        type="text"
        id="name"
        name="cardHolder"
        placeholder="e.g. Jane Appleseed"
        v-model="cardData.holderName"
      />
      <error-message class="err-msg" name="cardHolder" />
    </div>
    <div class="input-field">
      <label for="number">Card Number</label>
      <vee-field name="cardNumber" #default="{ field, errors }">
        <input
          type="text"
          maxlength="16"
          pattern="[0-9]*"
          inputmode="numeric"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          v-model="cardData.cardNumber"
          @input="splitIntoCompinations"
          v-bind="field"
        />
      </vee-field>
      <error-message class="err-msg" name="cardNumber" />
    </div>
    <div class="date-cvv">
      <div class="input-field">
        <label for="date">Exp. Date (MM/YY)</label>
        <vee-field
          class="err"
          type="text"
          id="month"
          placeholder="MM"
          inputmode="numeric"
          name="cardMonth"
          maxlength="2"
          v-model="cardData.expDate.month"
        />
        <vee-field
          type="text"
          id="year"
          placeholder="YY"
          inputmode="numeric"
          name="cardYear"
          maxlength="2"
          v-model="cardData.expDate.year"
        />
        <error-message class="err-msg card-month-err" name="cardMonth" />
        <error-message class="err-msg card-month-err" name="cardYear" />
      </div>
      <div class="input-field">
        <label for="cvc">cvc</label>
        <vee-field
          type="text"
          id="cvc"
          placeholder="123"
          maxlength="3"
          name="cardCvc"
          inputmode="numeric"
          v-model="cardData.cvc"
        />
        <error-message class="err-msg" name="cardCvc" />
      </div>
    </div>
    <button class="btn" type="submit">Confirm</button>
  </vee-form>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCardStore } from "../store/card";
import { ref } from "vue";

const cardStore = useCardStore();

const { cardData } = storeToRefs(cardStore);

const splitIntoCompinations = (evt) => {
  cardData.value.cardNumber = evt.target.value
    .replace(/\s/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

const validationSchema = {
  cardHolder: "required|alpha_spaces|max:35|min:10",
  cardNumber: "required",
  cardMonth: "required|numeric|min:2|between:1,12",
  cardYear: "required|numeric|min:2|between:24,50",
  cardCvc: "required|numeric|min:3",
};

const isSubmitted = ref(false);
const emit = defineEmits(["update:submitted"]);

const submitForm = (values) => {
  console.log(values);
  isSubmitted.value = true;
  emit("update:submitted", isSubmitted.value);
};
</script>

<style scoped>
form {
  display: grid;
  /* grid-template-rows: auto; */
  gap: 1rem;
  width: 400px;
}
.input-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.date-cvv {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.date-cvv .input-field:first-child {
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  column-gap: 1rem;
}

.date-cvv .input-field:last-child {
  margin-left: 0.5rem;
}

.date-cvv .input-field label {
  grid-column: 1 / span 2;
}

.btn {
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: var(--primary-color);
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  margin-top: 1rem;
  cursor: pointer;
}
input {
  border: 1px solid var(--light-grey-violet);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 18px;
  font-family: "Space Grotesk", sans-serif;

  width: 100%;
}

input:focus {
  outline: none;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%));
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.input-field label {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  color: var(--primary-color);
}

.err-msg {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #ff5252;
  border-color: #ff5252;
}

.card-month-err {
  grid-column: 1 / span 2;
}
</style>
