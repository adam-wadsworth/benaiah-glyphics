<template>
  <div>
    <button @click="googleLogin">Sign in with <span>Google</span></button>
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
    googleLogin () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
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
