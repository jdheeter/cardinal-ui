<template lang='pug'>
  .layout-padding
    .row.md-gutter.justify-center
      .col
        q-card
          headerChart(:chart-data="headerChartData" :height="100")      
    .row.md-gutter.justify-center
      .col
        q-card.layout-padding
          h6.light-paragraph.text-center Eligibility
          .row.justify-center
            q-btn(big rounded color="green" style="margin-top:20px;")
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

        q-card.layout-padding
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
                  | 0.00
          .row.justify-center(style="margin-top:20px;")
            div(style="margin-top:0px;")
              q-btn(color="green") Send
              q-btn(color="blue") Receive
              q-btn(color="purple") Donate
              br
              q-btn.full-width(flat) Transaction History
          
                  
      .col
        q-card.layout-padding
          h6.light-paragraph.text-center My Total Donations
            .row.justify-center
            br
            img.avatar(style="width:200px height:200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0dcjLeV7Nmtxsv4de0iVcs4GOUB_O4-cS8GttqomRluIPvvk")
            h4.inline 20 CCs
            q-btn(flat) Donation History

        q-card.layout-padding
          h6.light-paragraph.text-center My Milestone Progress
            q-list(sparse separator no-border)
              q-item
                img.avatar(:src="tokenIcon" style="margin:20px;")
                div(style="margin:20px;")
                  | milestone one
                q-progress(:percentage="10" style="height:20px;" stripe)

</template>

<script>
import headerChart from 'src/lineChart'
export default {
  data() {
    return {
      tokenIcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD-xi4OBAEIiPFE3ZfVczzqwhwrZTB3gUWfLHGHuz4rp2qRG8YQ',
      headerChartData: {
        labels: ['January', 'February', 'blah', 'dfsdfds', 'dsldjf', 'sdjdsjds'],
        datasets: [
          {
            label: 'A',
            backgroundColor: '#f83379',
            data: [10, 40, 0, 2, 8, 30]
          },
          {
            label: '0+',
            backgroundColor: '#f87979',
            data: [40, 20, 10, 5, 8, 30]
          }
        ]
      }
    }
  },
  components: { headerChart }
}
</script>

<style>

</style>
