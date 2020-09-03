<template>
  <div>
    <div v-if="!finished">
      <span>{{ remaining.days() }} Days, </span>
      <span>{{ remaining.hours() }} Hours, </span>
      <span>{{ remaining.minutes() }} Minutes, </span>
      <span>{{ remaining.seconds() }} Seconds, </span>
      left...
    </div>
    <p v-else>{{ expiredText }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CountDown',
  props: {
    until: {
      type: [String, Date, Object],
      default: '',
      required: true,
    },
    expiredText: {
      type: String,
      default: 'Now Expired',
    },
  },
  data() {
    return {
      now: new Date(),
    }
  },
  computed: {
    finished() {
      return this.remaining <= 0
    },
    remaining() {
      let remaining = moment.duration(Date.parse(this.until) - this.now)
      return remaining
    },
  },
  created() {
    const interval = setInterval(() => {
      this.now = new Date()
      if (this.remaining.seconds() <= 0) {
        this.$emit('finished')
        clearInterval(interval)
      }
    }, 1000)
  },
}
</script>
