<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Countdown :until="time" @finished="log" />
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'
import Countdown from './components/Countdown.vue'
import moment from 'moment'

export default {
  name: 'App',
  components: {
    Countdown,
  },
  data() {
    return {
      time: moment().add(10, 'seconds'),
    }
  },
  methods: {
    log() {
      console.log('child is finished!')
    },
  },
}
</script>

<style></style>
