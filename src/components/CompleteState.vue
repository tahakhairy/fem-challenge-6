<template>
  <div class="container">
    <img src="../assets/images/icon-complete.svg" alt="complete" />
    <div class="info">
      <p>Thank You!</p>
      <p>We've added your card details.</p>
    </div>

    <button class="btn" @click="$emit('update:completed', false)">
      Confirm
    </button>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 1rem 0; */
  align-items: center;
}

.container img {
  margin-top: 1.3rem;
}
.container .info {
  margin: 2rem;
  text-align: center;
}

.container .info p:first-child {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1.4rem;
  color: #21092f;
}

.container .info p:last-child {
  color: #dedddf;
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
  width: 100%;
}
</style>
