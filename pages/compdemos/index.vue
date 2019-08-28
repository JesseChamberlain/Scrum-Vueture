<template>
  <v-layout column justify-center align-center>
    <sv-card vote="1" user="Brendan L." :revealed="false" />
    <sv-card-collection />
  </v-layout>
</template>

<script>
import SvCard from '../../components/SvCard';
import SvCardCollection from '../../components/SvCardCollection';
export default {
  name: 'SvComponentsDemos',
  components: {
    SvCard,
    SvCardCollection
  }
};
</script>
