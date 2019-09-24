<template>
  <div>
    <v-btn @click="$emit('reset-cards')">Reset</v-btn>
    <v-btn @click="$emit('reveal-cards')">Reveal</v-btn>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  name: 'SvRevealReset'
};
</script>
