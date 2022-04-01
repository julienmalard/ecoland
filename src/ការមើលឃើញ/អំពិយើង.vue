<template>
  <v-sheet class="my-6 mx-auto" max-width="1000">
    <img alt="Vue logo" height="400" class="my-6" src="../assets/អេកូលែន.png">
    <h1>មជ្ឈមណ្ឌលស្រាវជ្រាវសេវាកម្មប្រព័ន្ធបរិស្ថាន និងការប្រើប្រាស់ដី (អេកូលែន)</h1>
    <p class="mt-3">
      {{ "និយាយអ្វីមួយដែលបំផុសគំនិតអំពិអេកូលែននៅទីនេះ។ ".repeat(12)}}
    </p>
    <h1 class="mb-6">ការងារយើង</h1>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :class="{ 'on-hover': hover }"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 0}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2 white--text align-end"
            >
              <v-card-title >
                ឈ្មោះកម្រោង
              </v-card-title>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: 'AmbiYerng',
};
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
