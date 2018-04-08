<template lang='pug'>
  .layout-padding()
    .row.md-gutter.justify-center
      img(src="statics/logo.png" style="width:100px; height:100px; margin:30px")
    .row.md-gutter.justify-center
      .col
        q-card
          h5.light-paragraph.text-center Global Blood Supply Demand
          headerChart(:chart-data="headerChartData" :height="100")
    .row.md-gutter.justify-center(v-if="!thisUser" style="padding-top:10px;")
      .col-sm-12.col-lg-6.col-md-8
        q-card
          | Enter your public key
          q-input.full-width.text-center(v-model="userKey" @change="$root.$emit('userKey',userKey)")
    .row.md-gutter.justify-center(v-else-if="!thisUser.account" style="padding-top:10px;")
      .col-sm-12.col-lg-6.col-md-8
        q-card
          h5.text-center {{thisUser.key}}
          h5.light-paragraph.text-center Public key not associated with Red Cross 
          q-field(label="email" type="email")
            q-input(v-model="register.email")
          q-field(label="password" type="password" )
            q-input(v-model="register.pass")
          br
          q-btn.full-width(flat color="red" @click="linkAccount()") Link Red Cross Account
    .row.md-gutter.justify-center(v-else)
      .col
        q-card()
          h6.light-paragraph.text-center Eligibility
          .row.justify-center
            q-btn(big rounded color="green" style="margin-top:20px;" @click="$router.push('/donate')")
              | Donate Now
            br
            br
          .row
            div(style="margin-top:20px;")
              q-icon.inline.on-left(name='check' color='green' ) 
              | Last donation was over three months ago
              br
              q-icon.inline.on-left(name='check' color='green' ) 
              | Your Account is in good standing

        q-card
          h6.light-paragraph.text-center My Wallet
          table.q-table.full-width
            thead
              tr
                th
                th
                th
                
            tbody
              tr
                td
                  img.avatar(:src="tokenIcon")
                td
                  | EGGs
                td
                  | {{thisUser.balance}}
          .row.justify-center(style="margin-top:20px;")
            div(style="margin-top:0px;")
              q-btn.on-left(color="green") Sell
              q-btn(color="purple") Incubate
              br
            br
            br
            br
            q-btn.full-width(flat) Transaction History
          
                  
      .col
        q-card
          h6.light-paragraph.text-center My Total Donations
            .row.justify-center
            br
            .row.justify-center
              q-chip.block(color="red" style="width:80px;") 
                h4.block {{thisUser.account.bloodType}}
            h4.inline 200 MLs 
            q-btn(flat color="red") Donation History

        q-card
          h6.light-paragraph.text-center My Milestone Progress
            q-list(sparse separator no-border)
              q-item
                q-item-side
                  img.avatar(:src="tokenIcon" style="margin:20px;")
                q-item-main
                  div(style="margin:20px;")
                    | Egg Incubating 
                  q-progress(:percentage="10" style="height:20px;" stripe)
                    | (40 days remaining)

</template>

<script>
import headerChart from 'src/lineChart'
import axios from 'axios'
import { setInterval } from 'timers'
export default {
  data() {
    return {
      tokenIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD-xi4OBAEIiPFE3ZfVczzqwhwrZTB3gUWfLHGHuz4rp2qRG8YQ',
      userKey: null,
      register: {
        email: '',
        pass: ''
      },
      registered: false
    }
  },
  components: { headerChart },
  created() {
    this.$root.$on('clearKey', () => {
      this.userKey = null
    })
    this.$root.$on('userKey', val => {
      this.userKey = val
    })
  },
  computed: {
    headerChartData() {
      if (!this.state) return null
      var stats = this.state.globalStats
      var types = Object.keys(stats)
      var datasets = types.map(el => {
        if (this.thisUser && this.thisUser.account && this.thisUser.account.bloodType == el) {
          var backgroundColor = 'rgba(220,100,100,1)'
          // console.log('matching blood type', el, strokeColor)
        } else {
          var backgroundColor = 'rgba(220,220,220,0.01)'
        }

        return {
          label: el,
          data: stats[el],
          backgroundColor
        }
      })
      var chartData = {
        labels: Array(7).fill(''),
        datasets
      }
      return chartData
    },
    thisUser2() {
      if (this.registered) {
      }
      return this.thisUser
    }
  },
  props: ['thisUser', 'state']
}
</script>

<style>

</style>
