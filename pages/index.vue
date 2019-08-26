<template>
  <v-layout column justify-center align-center>
    <sv-card-collection />
  </v-layout>
</template>

<script>
import SvCardCollection from '../components/SvCardCollection';
export default {
  name: 'App',
  components: {
    SvCardCollection
  }
};
</script>
