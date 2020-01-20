<template>
<div id='app'>
  <div>
    {{user}}
    <router-link to='/'>Home</router-link>
    <router-link v-if='!user.loggedIn' to='/sign-in'>Sign In</router-link>
    <button v-if='user.loggedIn' @click="signOut">Sign Out</button>
  </div>
  <router-view />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'sign-in'
          })
        })
    }
  }
}
</script>
