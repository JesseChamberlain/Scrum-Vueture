<template>
  <div class="vote btn-container">
    <v-col>
      <v-btn
        v-for="n in voteCardData"
        :key="n.key"
        :class="n.selected ? 'card-btn selected' : 'card-btn'"
        v-on:click="toggleSelection(n.key)"
      >
        {{ n.text }}
      </v-btn>
    </v-col>
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
    background-color: #333;
  }
}
</style>

<script>
export default {
  name: 'SvCardCollection',
  methods: {
    toggleSelection(target) {
      this.voteCardData.forEach((card) => {
        if (card.selected === true && card.key != target) {
          card.selected = false;
        }
      });
      this.voteCardData[target].selected = !this.voteCardData[target].selected;
    }
  },
  props: {
    type: String
  },
  data() {
    return {
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
  }
};
</script>
