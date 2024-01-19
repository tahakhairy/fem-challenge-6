<template>
  <div class="container">
    <div class="card-bg"></div>

    <div class="content">
      <div class="cards-container">
        <div class="card-front">
          <img src="./assets/images/card-logo.svg" alt="card-logo" />
          <div class="card-info">
            <div class="card-number">
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
            </div>
            <div class="card-name-date">
              <p>TAHA KHAIRY</p>
              <p>01/25</p>
            </div>
          </div>
        </div>
        <div class="card-back">
          <span class="card-cvv">000</span>
        </div>
      </div>

      <div class="card-form">
        <card-form></card-form>
      </div>
    </div>
  </div>
</template>
<script setup>
import CardForm from "@/components/CardForm.vue";
</script>
<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
  max-width: 1900px;
  display: flex;
  z-index: 1;
}

.container .card-bg {
  position: absolute;
  width: 30%;
  background: url(./assets/images/bg-main-desktop.png) no-repeat;
  height: 100%;
  z-index: -1;
}

.container .content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.container .content .cards-container {
  margin: 8rem 2rem;
  width: 447px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-self: normal;
}

.cards-container .card-back {
  margin-top: 2rem;
  margin-left: 6rem;
}
.cards-container .card-front,
.cards-container .card-back {
  width: 100%;
  height: 100%;
}
.cards-container .card-front {
  background: url(./assets/images/bg-card-front.png);
  padding: 1.5rem;
  border-radius: 10px;
}

.cards-container .card-back {
  background: url(./assets/images/bg-card-back.png);
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

.card-form {
  /* width: 60%; */
  padding: 8rem;
}
</style>
