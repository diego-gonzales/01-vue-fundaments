<template>
  <img v-if="image" :src="image" alt="image">
  <div class="bg-dark"></div>

  <div class="indecision-container">
      <input v-model="question" type="text" placeholder="Ask me a question">
      <p>Remember to end with a question mark (?)</p>
      <div v-if="isValidQuestion">
          <h2>{{ question }}</h2>
          <h1>{{ answer }}</h1>
      </div>
  </div>
</template>

<script>
export default {
    name: 'indecision',
    data() {
        return {
            question: null,
            answer: null,
            image: null,
            isValidQuestion: false
        }
    },
    methods: {
        async getAnswer() {
            try {
                this.answer = 'Pensando...';
                const response = await fetch('https://yesno.wtf/api');
                const { answer, image } = await response.json();
                this.answer = answer === 'yes' ? 'Sí!' : 'No!';
                this.image = image;
            } catch (error) {
                console.log('IndecisionComponent:', error);
                this.answer = 'API could not be loaded';
                this.image = null;
            }
        }
    },
    watch: {
        question(value, oldValue) {
            this.isValidQuestion = false;

            console.log({ value });

            if (!value.includes('?')) return;

            this.isValidQuestion = true;
            this.getAnswer();
        }
    }
}
</script>

<style>
img, .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}
input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 5px;
}

h1, h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>