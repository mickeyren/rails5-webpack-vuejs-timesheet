<template>
  <div class="card my-4">
      <h5 class="card-header">Timer</h5>
      <div class="card-body">
        <Clock :blink="true" :display-seconds="true" />
        <div class="comment">
          <textarea class="form-control" placeholder="Optional comment" v-model="notes"></textarea>
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
      notes: ''
    }
  },
  methods: {
    save() {
      this.$store.dispatch('addActivity', {
        notes: this.notes
      })
    }
  },
  computed: {
  }
}
</script>
