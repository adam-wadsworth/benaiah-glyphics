<template>
  <div class="canvas">
    <canvas id="canvas" width="800" height="500"></canvas>
    <div class="input">
      <input v-model="text" type="text" id="text" name="text" placeholder="Type" autocomplete="off">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vueCanvas: null,
      text: 'benaiah',
      textColour: '#000000',
      font: '20px benaiah_matheson',
      textAlign: 'center',
      textBaseline: 'top',
      backgroundColour: '#ffffff',
      canvasSize: '0, 0, 800, 500'
    }
  },
  mounted () {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    this.vueCanvas = context
    this.vueCanvas.clearRect(0, 0, 800, 500)
    this.vueCanvas.rect(0, 0, 800, 500)
    this.vueCanvas.fillStyle = this.backgroundColour
    this.vueCanvas.fill()
    this.vueCanvas.font = this.font
    this.vueCanvas.textBaseline = this.textBaseline
    this.vueCanvas.textAlign = this.textAlign
    this.vueCanvas.fillStyle = this.textColour
    this.vueCanvas.fillText(this.text.toUpperCase(), 400, 250)
  },
  watch: {
    text () {
      this.vueCanvas.clearRect(0, 0, 800, 500)
      this.vueCanvas.rect(0, 0, 800, 500)
      this.vueCanvas.fillStyle = this.backgroundColour
      this.vueCanvas.fill()
      this.vueCanvas.font = this.font
      this.vueCanvas.textBaseline = this.textBaseline
      this.vueCanvas.textAlign = this.textAlign
      this.vueCanvas.fillStyle = this.textColour
      this.vueCanvas.fillText(this.text.toUpperCase(), 400, 250)
    }
  }

}
</script>
