<template>
  <div class="header">
    <header>
      <nav>
        <a href="https://shop.benaiahmatheson.com/" target="_blank" title="Shop" aria-label="Shop">Shop</a>
        <a @click="signOut" href="#" title="Sign Out" aria-label="Sign Out">Sign Out</a>
      </nav>
    </header>
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
      firebase.auth().signOut().then(() => {
        this.$router.replace({ name: 'sign-in' })
      })
    }
  }
}
</script>
