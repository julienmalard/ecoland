<template>
  <v-card
    flat
    outlined
    max-width="400"
    class="my-6"
  >
    <v-img
      :src="ruptot || `https://picsum.photos/500/300?image=${Math.floor(Math.random(1)*20)}`"
      :lazy-src="ruptot || `https://picsum.photos/500/300?image=${Math.floor(Math.random(1)*20)}`"
      aspect-ratio="1"
      class="grey lighten-2 white--text align-end"
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
      <v-card-title class="text-h3">
        {{ chmoah }}
      </v-card-title>
    </v-img>
    <v-card-text class="text-start text-body-1">
      {{ ambi }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AmbiYerng',
  props: ["chmoah", "ambi", "ruptot"]
}

</script>
