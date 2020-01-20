<template>
  <div>
    <button @click="facebookLogin">Sign in with <span>Facebook</span></button>
    <button @click="twitterLogin">Sign in with <span>Twitter</span></button>
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
