<template>
  <h2>{{ setTitle }}</h2>
  <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>
  <p data-testid="counter"> {{ counter }} </p>
  <div>
    <button @click="increaseCounter()">+1</button>
    <button @click="decreaseCounter()">-1</button>
  </div>
</template>

<script>
export default {
    // props: ['title', 'start'],
    props: {
        title: String,
        start: { // usado a lado del {{ setTitle }}
            type: Number,
            // required: true,
            default: 1,
            validator(value) {
                return value >= 0;
            }
        }
    },
    // name: 'Patito',
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter;
        },

        increaseCounter() {
            this.counter = this.counter + 1;
        },

        decreaseCounter() {
            this.counter--;
        }
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter;
        },
        setTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>