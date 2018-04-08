<template lang='pug'>
  .layout-padding
    div(style="padding-bottom:20px;")
      big.light-paragraph.layout-padding.inline Find Donation Locations
    
    .row.md-gutter.justify-center
      .col-xl-3.col-md-4.col-sm-12
        q-card.layout-padding
          q-field(icon='location_on' label="Zip Code")
            q-input(v-model="zip" type="number" label="Zip Code")
          q-btn.full-width(flat color="blue" @click="populateList()") Search by Location
      .col
        q-card.layout-padding
          | Locations
          q-list(v-for="location in locations" :key="location.name" multiline v-if="locations.length > 0")
            q-item
              q-item-side
                | {{location.multiplier}}
              q-item-main
                | {{location.name}}
                br
                | {{location.address}}
                br
                | {{location.address2}}

</template>

<script>
var defaultLocations = [
  {
    name: 'SF Regional Office',
    address: '1663 Market Street',
    address2: 'San Francisco, CA 94103',
    multiplier: '+5%'
  },
  {
    name: 'Alameda County',
    address: '3901 Broadway Avenue',
    address2: 'Oakland, CA 94611',
    multiplier: '+10%'
  },
  {
    name: 'Contra Costa County',
    address: '1300 Alberta Way',
    address2: 'Concord, CA 94521',
    multiplier: '+15%'
  },
  {
    name: 'Marin County',
    address: '712 5th Avenue',
    address2: 'San Rafael, CA 94901',
    multiplier: '+25%'
  }
]
export default {
  data() {
    return {
      zip: '95051',
      locations: [{ name: '' }]
    }
  },
  methods: {
    populateList() {
      this.locations = defaultLocations
    }
  }
}
</script>

<style>

</style>
