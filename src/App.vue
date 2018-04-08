<template lang='pug'>
  div(id="q-app")
    q-layout
      q-toolbar(slot="header")
        q-toolbar-title
          | Cardinal
      router-view
</template>

<script>
export default {
  data() {
    return { yo: 'lul' }
  }
}
</script>

<style></style>
