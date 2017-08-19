<template>
  <div class="card my-4">
      <h5 class="card-header">Timer</h5>
      <div class="card-body">
        <Clock :blink="true" :display-seconds="true" />
<!--         <div class="comment">
          <textarea class="form-control" placeholder="Optional comment"></textarea>
        </div>
        <button class="btn btn-primary" type="button" @click="save">Save</button> -->
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
    }
  },
  methods: {
    save() {
    }
  }
}
</script>
