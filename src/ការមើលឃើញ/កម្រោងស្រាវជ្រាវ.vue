<template>
  <v-sheet class="my-6 mx-auto" max-width="1000">
    <h1>កម្រោងស្រាវជ្រាវបច្ចុប្បន្ន</h1>
    <p class="mt-3">និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។
    និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។
  និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ </p>
    <h1 class="mb-6">កម្រោងស្រាវជ្រាវដែលបានបញ្ចប់</h1>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
export default {
  name: 'AmbiYerng',
}
</script>
