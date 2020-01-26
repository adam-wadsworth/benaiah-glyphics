<template>
  <div class="main">
    <main>
      <Canvas />
      <Colours />
    </main>
  </div>
</template>

<script>
import Canvas from '@/components/Canvas'
import Colours from '@/components/Colours'
export default {
  components: {
    Canvas,
    Colours
  }
}
</script>
