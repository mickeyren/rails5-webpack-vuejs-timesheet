<template>
  <div class="row">
    <Listing />
    <div class="col-md-4">
      <TimerWidget />
    </div>
  </div>
</template>

<script>
import Listing from './listing'
import TimerWidget from './timer-widget'

export default {
  components: {
    Listing,
    TimerWidget
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>


