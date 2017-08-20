<template>
  <div class="input-group">
    <time class="form-control">
      <span class="clock__hour">{{ hours }}</span>
      <span>:</span>
      <span class="clock__minutes">{{ minutes }}</span>
      <span>:</span>
      <span class="clock__minutes">{{ seconds }}</span>
    </time>
    <span class="input-group-btn">
      <button class="btn btn-secondary" type="button" @click="stop" v-if="this.clock">Stop</button>
      <button class="btn btn-primary" type="button" @click="start" v-if="!this.clock">Start</button>
    </span>
  </div>
</template>

<script>
function padZero(number) {
  number = Math.floor(number)
  if (number < 10) {
    return '0' + number
  }
  return number
}

module.exports = {
  name: 'clock',
  props: ['activity'],
  data() {
    return {
      totalSeconds: 0,
      clock: null,
      minutes: padZero(0),
      hours: padZero(0),
      seconds: padZero(0),
    };
  },
  destroyed() {
    clearInterval(this.clock)
  },
  methods: {
    start() {
      this.clock = setInterval(() => {
        this.activity.duration = ++this.totalSeconds
        this.hours = padZero(this.minutes/60)
        this.minutes = padZero(this.totalSeconds/60)
        this.seconds = padZero(this.totalSeconds%60)
      }, 1000);

      this.$emit('clockStart')
    },
    stop() {
      clearInterval(this.clock)
      
      this.$emit('clockStop')
    },    
    reset() {
      Object.assign(this.$data, this.$options.data());
    }
  }
};
</script>
