<template lang='pug'>
  div(id="q-app")
    q-layout
      q-toolbar.cursor-pointer(slot="header" @click="$router.push('/')")
        q-toolbar-title
          | Cardinal
        q-btn(flat @click="logOut()" v-if="thisUser") Log Out

      router-view(:state="state" :thisUser="thisUser")
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      state: null,
      userKey: ''
    }
  },
  created() {
    var localKey = localStorage.getItem('userKey')
    if (localKey) {
      this.userKey = localKey
    }
    this.$root.$on('userKey', key => {
      this.userKey = key
      console.log(this.userKey)
    })
    setInterval(async () => {
      this.state = (await axios.get('http://localhost:3000/state')).data
      this.$root.$emit('state', this.state)
      // console.log(this.state)
    }, 1000)
  },
  methods: {
    logOut() {
      window.localStorage.removeItem('userKey')
      this.userKey = null
    }
  },
  computed: {
    thisUser() {
      try {
        if (this.state && this.userKey)
          try {
            if (this.userKey.length === 33 && this.state.accounts[this.userKey]) {
              console.log('GOT USERKEY', this.userKey)

              window.localStorage.setItem('userKey', this.userKey)
              var user = this.state.accounts[this.userKey]
              user.key = this.userKey
              var registered = this.state.registeredAccounts[this.userKey]
              if (registered) user.account = registered
              this.$root.$emit('clearKey')
              return user
            } else {
              console.log('we are here')
            }
          } catch (error) {
            console.log(error)
            this.userKey = ''
            window.localStorage.removeItem('userKey')
            this.$root.$emit('clearKey')
            window.alert('public key not valid')
          }
      } catch (error) {
        console.log(error)
        return null
      }
    }
  }
}
</script>

<style lang="stylus">
.q-card {
  padding: 20px;
}

h5 {
  font-size: 1.2 rem;
}
</style>
