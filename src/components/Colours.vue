<template>
<div v-if="colours" class="colours">
  <ul>
    <li v-for="colour in colours" v-bind:key="colour.backgroundColour">
      <button v-bind:style="{ color: colour.fontColour, backgroundColor: colour.backgroundColour}" @click="updateColour(colour.fontColour, colour.backgroundColour)"></button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      colours: [
        {
          fontColour: '#ffffff',
          backgroundColour: '#FF0040'
        },
        {
          fontColour: '#000000',
          backgroundColour: '#F5F5F5'
        },
        {
          fontColour: '#ffffff',
          backgroundColour: '#0752D7'
        },
        {
          fontColour: '#ffffff',
          backgroundColour: '#A3A3A3'
        },
        {
          fontColour: '#ffffff',
          backgroundColour: '#356755'
        }
      ]
    }
  },
  methods: {
    updateColour (fontColour, backgroundColour) {
      this.$store.commit('updateColour', { fontColour, backgroundColour })
    }
  }
}
</script>
