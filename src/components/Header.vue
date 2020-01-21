<template>
<div class="fixed w-full">
  <header>
    <nav class="p-6">
      <div class="flex">
        <div class="flex-1">&nbsp;</div>
        <div class="flex-1 text-center">
            <router-link :to="{name: 'home'}" class="block" title="Benaiah Matheson" aria-label="Benaiah Matheson">
              <i class="icon-logo text-5xl leading-none"></i>
            </router-link>
        </div>
        <div v-if="user.loggedIn" class="flex-1 text-right">
          <a @click="signOut" class="inline-block bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border-2 border-black hover:border-transparent" title="Sign Out" aria-label="Sign Out">Sign Out</a>
        </div>
        <div v-else class="flex-1 text-right">
          <router-link to="sign-in" class="inline-block bg-transparent hover:bg-black text-black hover:text-white py-2 px-4 border-2 border-black hover:border-transparent" title="Sign In" aria-label="Sign In">Sign In</router-link>
        </div>
      </div>
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
