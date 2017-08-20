<template>
  <div class="card my-4">
      <h5 class="card-header">Timer</h5>
      <div class="card-body">
        <Clock :activity=activity ref="clock" />
        <div class="comment">
          <textarea class="form-control" placeholder="Optional comment" v-model="activity.notes"></textarea>
        </div>
        <button class="btn btn-primary" type="button" @click="save">Save</button>
      </div>
  </div>
</template>

<script>
import Clock from '../clock'

export default {
  components: {
    Clock,
  },
  data() {
    return {
      activity: {
        notes: '',
        duration: 0
      }
    }
  },
  methods: {
    save() {
      this.$store.dispatch('addActivity', {
        notes: this.activity.notes,
        duration: this.activity.duration
      })
      this.activity = {
        notes: '',
        duration: 0
      }
      this.$refs.clock.stop()
    }
  },
  computed: {
  }
}
</script>
