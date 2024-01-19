<template>
  <form action="">
    <div class="input">
      <label for="cardholder-name">CARDHOLDER NAME</label>
      <input
        type="text"
        id="cardholder-name"
        placeholder="e.g. Jane Appleseed"
      />
    </div>
    <div class="input">
      <label for="card-number">CARD NUMBER</label>
      <input
        type="text"
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
      />
    </div>

    <div class="card-date-cvc">
      <div>
        <label for="card-date">EXP. DATE (MM/YY)</label>
        <div style="display: inline-flex">
          <input type="text" placeholder="MM" />
          <input type="text" placeholder="YY" />
        </div>
      </div>
      <div>
        <label for="card-cvc">CVC</label>
        <div>
          <input type="text" placeholder="CVC" />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup></script>

<style scoped>
form {
  /* padding: 8rem; */
  flex: 29%;
  display: flex;
  flex-direction: column;
}

form label {
  color: hsl(278, 68%, 11%);
  font-size: 14px;
  margin-bottom: 0.5rem;
}

form input {
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  padding: 0.7rem 1rem;
}

form div.input {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}

form .card-date-cvc {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  justify-content: center;
}

::placeholder {
  color: hsl(279, 6%, 55%);
}
</style>
