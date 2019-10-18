<template>
  <div class="vote btn-container">
    <div v-if="revealed">
      <v-btn
        v-for="n in voteCardData"
        :key="n.key"
        :class="n.selected ? 'card-btn selected' : 'card-btn'"
        @click="toggleSelection(n.key)"
        disabled
      >
        {{ n.text }}
      </v-btn>
    </div>
    <div v-else>
      <v-btn
        v-for="n in voteCardData"
        :key="n.key"
        :class="n.selected ? 'card-btn selected' : 'card-btn'"
        @click="toggleSelection(n.key)"
      >
        {{ n.text }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vote {
  &.btn-container {
    width: 235px;
  }

  .card-btn {
    height: 120px;
    margin: 14px 14px;
    font-size: 24px;
  }
  .card-btn.selected {
    background-color: #777;

    &.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline) {
      background-color: #363636 !important;
    }
  }
}
</style>

<script>
export default {
  name: 'SvCardCollection',
  props: {
    reset: Boolean,
    revealed: Boolean,
    voteCardData: Array
  },
  methods: {
    toggleSelection(target) {
      this.voteCardData.forEach((card) => {
        if (card.selected === true && card.key != target) {
          card.selected = false;
        }
      });
      this.voteCardData[target].selected = !this.voteCardData[target].selected;
    }
  }
};
</script>
