<template>
  <div v-if="colour in colours" class="colours">
    <ul>
      <li><button></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colours: [
        {
          textColour: '',
          backgroundColor: ''
        },
        {
          textColour: '',
          backgroundColor: ''
        },
        {
          textColour: '',
          backgroundColor: ''
        },
        {
          textColour: '',
          backgroundColor: ''
        },
        {
          textColour: '',
          backgroundColor: ''
        }
      ]
    }
  }
}
</script>
