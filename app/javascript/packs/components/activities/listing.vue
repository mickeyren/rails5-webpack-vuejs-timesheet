<template>
  <div class="col-md-8">
    <div class="card mb-4 my-4">
      <div class="card-body">
        <h1 class="">Activity</h1>
        <p><strong>18 August</strong> Saturday</p>

        <div class="entries">
          <div class="row" v-for="activity in activities">
            <div class="col">{{ formatDuration(activity.duration) }}</div>
            <div class="col-9">{{ activity.notes }}</div>
          </div>

          <div class="row">
            <div class="col">
              1h 45m
            </div>
            <div class="col-9">
              create initial base files for a vuejs timesheet tracker
            </div>
          </div>
          <div class="row">
            <div class="col">
              40m
            </div>
            <div class="col-9">
              initial work on the timer component
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default{
  methods: {
    formatDuration(duration) {
      let seconds = Math.floor(duration % 60)
      let minutes = Math.floor(duration / 60)
      let hours = Math.floor(minutes / 60)

      let text = []
      if(hours) text.push(hours + 'h')
      if(minutes) text.push(minutes + 'm')
      if(seconds) text.push(seconds + 's')

      return text.join(' ')
    }
  },
  computed: {
    activities(){
      return this.$store.state.activities
    }
  }
}
</script>
