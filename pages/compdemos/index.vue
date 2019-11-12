<template>
  <v-layout column justify-center align-center>
    <sv-card vote="1" user="Brendan L." :revealed="revealedStatus" />
    <sv-card-collection
      :reset="reset"
      :voteCardData="this.voteCardData"
      :revealed="revealedStatus"
    />

    <sv-reveal-reset
      @reveal-cards="toggleRevealedStatus()"
      @reset-cards="handleResetCards()"
    />
  </v-layout>
</template>

<script>
import SvCard from '../../components/SvCard';
import SvCardCollection from '../../components/SvCardCollection';
import SvRevealReset from '../../components/SvRevealReset';

export default {
  name: 'SvComponentsDemos',
  components: {
    SvCard,
    SvCardCollection,
    SvRevealReset
  },
  data() {
    return {
      revealedStatus: false,
      voteCardData: [
        {
          text: '1',
          value: 1,
          key: 0,
          selected: false
        },
        {
          text: '2',
          value: 2,
          key: 1,
          selected: false
        },
        {
          text: '3',
          value: 3,
          key: 2,
          selected: false
        },
        {
          text: '5',
          value: 5,
          key: 3,
          selected: false
        },
        {
          text: '8',
          value: 8,
          key: 4,
          selected: false
        },
        {
          text: '?',
          value: 0,
          key: 5,
          selected: false
        }
      ]
    };
  },
  methods: {
    toggleRevealedStatus() {
      this.revealedStatus = !this.revealedStatus;
    },
    handleResetCards() {
      this.voteCardData.forEach((card) => (card.selected = false));
      this.revealedStatus = false;
    }
  }
};
</script>
