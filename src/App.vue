<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Countdown :until="time" @finished="alert" />
    <FormFocus />
    <p v-if="finished">Do Stuff</p>
  </div>
</template>

<script>
import '@/assets/css/tailwind.css'
import Countdown from './components/Countdown.vue'
import FormFocus from './components/FormFocus.vue'
import moment from 'moment'

export default {
  name: 'App',
  components: {
    Countdown,
    FormFocus,
  },
  data() {
    return {
      time: moment().add(10, 'seconds'),
      finished: false,
    }
  },
  methods: {
    alert() {
      this.finished = true
    },
  },
}
</script>
