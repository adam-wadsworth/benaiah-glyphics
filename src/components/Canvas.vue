<template>
<div class="canvas">
  <canvas id="canvas" width="800" height="500"></canvas>
  <div class="input">
    <input v-model="text" @input="updateText" @change="updateText" type="text" id="canvas" name="input" placeholder="Type" autocomplete="off">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      text: this.$store.state.canvas.text,
      canvas: null
    }
  },
  created () {
    this.$store.watch(
      (state, getters) => getters.canvas,
      (newValue, oldValue) => {
        this.buildCanvas()
      },
      { deep: true }
    )
  },
  mounted () {
    this.buildCanvas()
  },
  methods: {
    buildCanvas () {
      const canvas = document.getElementById('canvas').getContext('2d')
      this.canvas = canvas
      this.canvas.clearRect(0, 0, 800, 500)
      this.canvas.rect(0, 0, 800, 500)
      this.canvas.fillStyle = `${this.$store.getters.canvas.backgroundColour}`
      this.canvas.fill()
      this.canvas.font = `${this.$store.getters.canvas.fontSize} ${this.$store.getters.canvas.fontFamily}`
      this.canvas.fillStyle = `${this.$store.getters.canvas.fontColour}`
      this.canvas.textAlign = `${this.$store.getters.canvas.textAlign}`
      this.canvas.textBaseline = `${this.$store.getters.canvas.textBaseline}`
      this.canvas.fillText(this.$store.getters.canvas.text, 400, 250)
    },
    updateText (e) {
      this.$store.commit('updateText', { text: e.target.value })
    }
  }
}
</script>
