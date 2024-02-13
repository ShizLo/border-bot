<template>
  <v-card class="mt-3 mb-2 bg-grey-lighten-5">
    <h3 class="text-black py-3 text-center">Контракт в Ленинградской области</h3>

    <video
      :src="src"
      poster="../assets/prev.png"
      play
      controls="true"
      muted
      loop
      playsinline
      height="200"
      width="100%"
      class="px-1"
    >
      <source :src="src" type="video/mp4" />
    </video>
  </v-card>
</template>
<style lang="scss" scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
<script>
export default {
  data() {
    return {
      src: "https://psfsbspb.ru/src/prod.m4v",
    };
  },
};
</script>
