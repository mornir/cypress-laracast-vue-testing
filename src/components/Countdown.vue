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
  props: {
    until: {
      type: [String, Date],
      default: null,
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

      if (remaining <= 0) {
        this.$emit('finished')
      }

      return remaining
    },
  },
  created() {
    const interval = setInterval(() => {
      this.now = new Date()
    }, 1000)

    this.$on('finished', () => clearInterval(interval))
  },
}
</script>

<style></style>
