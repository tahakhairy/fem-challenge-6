<template>
  <form action="">
    <div class="input-field">
      <label for="name">Cardholder Name</label>
      <input type="text" />
    </div>
    <div class="input-field">
      <label for="name">Card Number</label>
      <input type="text" />
    </div>

    <div class="date-cvv">
      <div class="input-field">
        <label for="">Exp. Date (MM/YY)</label>
        <input type="text" />
        <input type="text" />
      </div>
      <div class="input-field">
        <label for="">CVV</label>
        <input type="text" name="" id="" />
      </div>
    </div>

    <!-- <button type="submit">Confirm</button> -->
  </form>
</template>

<style scoped>
form {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  padding: 0 10rem;
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
}

.date-cvv .input-field label {
  grid-column: 1 / span 2;
}

input {
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem 1.5rem;
}

label {
  margin-bottom: 0.5rem;
}
</style>
