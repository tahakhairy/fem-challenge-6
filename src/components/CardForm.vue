<template>
  <div class="form">
    <form action="">
      <div class="input-field">
        <label for="name">Cardholder Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          v-model="cardStore.cardData.holderName"
        />
      </div>
      <div class="input-field">
        <label for="number">Card Number</label>
        <input
          type="text"
          maxlength="16"
          pattern="[0-9]*"
          inputmode="numeric"
          id="number"
          placeholder="e.g. 1234 5678 9123 0000"
          v-model="cardStore.cardData.cardNumber"
        />
      </div>
      <div class="date-cvv">
        <div class="input-field">
          <label for="date">Exp. Date (MM/YY)</label>
          <input type="text" id="month" placeholder="MM" />
          <input type="text" id="year" placeholder="YY" />
        </div>
        <div class="input-field">
          <label for="cvc">cvc</label>
          <input type="text" name="" id="cvc" placeholder="123" />
        </div>
      </div>
      <button class="btn" type="submit" @click.prevent="">Confirm</button>
    </form>
  </div>
</template>

<script setup>
import { useCardStore } from "../store/card";
import { ref, watch } from "vue";
const cardStore = useCardStore();
</script>

<style scoped>
form {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
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
  grid-template-columns: 1fr 1fr;
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

.form .input-field label {
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  color: var(--primary-color);
}
</style>
