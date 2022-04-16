<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- Utilize with the vue-transitions below -->
    <transition name="para">
      <p v-if="paraIsVisible">Make me disappear!</p>
    </transition>
    <button @click="toggleParagraph">Toggle Para</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-250px); */
  animation: slide 0.3s ease-out forwards;
}

/* .v-enter-from {
   opacity: 0;
  transform: translateY(-30px); 
} */

.para-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: slide 0.3s ease-out;
}

/* .v-enter-to {
   opacity: 1;
  transform: translateY(0); 
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0); 
} */

.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: slide 0.3s ease-in reverse;
}

/* .v-leave-to {
   opacity: 0;
  transform: translateY(-30px); 
} */

@keyframes slide {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>