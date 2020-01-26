<template>
  <div class="flex content-center flex-wrap justify-center h-screen">
    <div>
      <i class="block w-full text-5xl text-center mb-4 icon-logo"></i>
      <button @click="facebookLogin" class="block w-full mb-2 bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border-2 border-black font-semibold hover:border-transparent" title="Sign in with Facebook">Sign in with <span>Facebook</span></button>
      <button @click="twitterLogin" class="block w-full bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border-2 border-black font-semibold hover:border-transparent" title="Sign in with Twitter">Sign in with <span>Twitter</span></button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      error: null
    }
  },
  methods: {
    facebookLogin () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result)
        this.$router.replace({
          name: 'home'
        })
      }).catch((err) => {
        this.error = err.message
      })
    },
    twitterLogin () {
      const provider = new firebase.auth.TwitterAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result)
        this.$router.replace({
          name: 'home'
        })
      }).catch((err) => {
        this.error = err.message
      })
    }
  }
}
</script>
