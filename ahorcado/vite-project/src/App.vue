<template>
  <div class="hangman">
    <h1>Juego del Ahorcado</h1>

    <img :src="currentImage" alt="Ahorcado" class="hangman-image" />

    <div class="word">
      <span v-for="(letter, index) in displayedWord" :key="index">{{ letter }}</span>
    </div>

    <div class="keyboard">
      <button
        v-for="letter in alphabet"
        :key="letter"
        @click="guessLetter(letter)"
        :disabled="usedLetters.includes(letter) || gameOver"
      >
        {{ letter }}
      </button>
    </div>

    <div class="status">
      <p>Intentos restantes: {{ maxTries - wrongTries }}</p>
      <p v-if="gameWon">¡Ganaste! 🎉</p>
      <p v-else-if="gameLost">Perdiste 😢. La palabra era: {{ word }}</p>
    </div>

    <button @click="resetGame">Reiniciar</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const words = ['JAVASCRIPT', 'VUE', 'AHORCADO', 'PROYECTO', 'FRAMEWORK']

const word = ref('')
const usedLetters = ref([])
const maxTries = 6


const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('')

const pickRandomWord = () => {
  const random = words[Math.floor(Math.random() * words.length)]
  word.value = random.toUpperCase()
  usedLetters.value = []
}

const guessLetter = (letter) => {
  if (!usedLetters.value.includes(letter)) {
    usedLetters.value.push(letter)
  }
}

const displayedWord = computed(() =>
  word.value.split('').map((l) => (usedLetters.value.includes(l) ? l : '_'))
)

const wrongTries = computed(() =>
  usedLetters.value.filter((l) => !word.value.includes(l)).length
)

const gameWon = computed(() =>
  word.value.split('').every((l) => usedLetters.value.includes(l))
)

const gameLost = computed(() => wrongTries.value >= maxTries)
const gameOver = computed(() => gameWon.value || gameLost.value)

const currentImage = computed(() => {
  const index = Math.min(wrongTries.value + 1, maxTries)
  return `/img/ahorcado_parte_${index}.webp`
})

const resetGame = () => {
  pickRandomWord()
}

pickRandomWord()
</script>

<style scoped>

.hangman {
  text-align: center;
  padding: 20px;
}

.hangman-image {
  width: 150px;
  margin: 20px 0;
}

.word {
  font-size: 2rem;
  letter-spacing: 10px;
  margin-bottom: 20px;
}

.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-bottom: 20px;
}

.keyboard button {
  width: 35px;
  height: 35px;
  font-size: 1rem;
  cursor: pointer;
}

.status {
  margin: 20px 0;
  font-weight: bold;
}
</style>