<template>
  <!-- voted class name will be used to change card color once we have the style guide
    v-card has a "color" prop that can be used for this -->
  <v-card
    width="190"
    height="250"
    :class="getCardClasses([voted ? 'voted' : '', revealed ? 'revealed' : ''])"
    hover
  >
    <v-card-title v-if="revealed">{{ vote }}</v-card-title>
    <v-card-title v-else>
      <font-awesome-icon icon="times" />
    </v-card-title>

    <v-card-text>{{ user }}</v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.sv-card {
  text-align: center;

  .v-card__title {
    justify-content: center;
    font-size: 30px;
    height: 80%;

    .fa-times {
      font-size: 45px;
    }
  }

  .v-card__text {
    font-size: 16px;
  }
}
</style>
<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes);

export default {
  name: 'SvCard',
  components: {
    FontAwesomeIcon
  },
  props: {
    vote: String,
    value: Number,
    user: String,
    voted: Boolean,
    revealed: Boolean
  },
  methods: {
    getCardClasses: function(classesArray) {
      let finalClassString = 'sv-card';
      classesArray.forEach((className) => {
        className && (finalClassString = `${finalClassString} ${className} `);
      });
      return finalClassString;
    }
  }
};
</script>
