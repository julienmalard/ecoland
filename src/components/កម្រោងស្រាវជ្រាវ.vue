<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-card
        flat
        outlined
        max-width="400"
        class="my-6"
        v-bind="attrs"
        v-on="on"
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
          <h2 class="text-h5 mb-2">{{ លេខខ្មែរ(chnaam_chabphtaem) }} - {{ លេខខ្មែរ(chnaam_chap) }}</h2>
          {{ ambi_kleih || ambi.slice(0, 150) + "..."}}
        </v-card-text>
      </v-card>
    </template>

    <v-card>
      <v-img
        height="250"
        class="white--text align-end"
        :src="ruptot || `https://picsum.photos/500/300?image=${Math.floor(Math.random(1)*20)}`"
      >
        <v-card-title class="text-h4">
          {{ chmoah }}
        </v-card-title>
      </v-img>


      <v-card-text class="my-4 text-start">
        {{ ambi }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          បិទ
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
import { உரைக்கு } from "ennikkai";

export default {
  name: 'AmbiYerng',
  props: ["chmoah", "ambi", "ambi_kleih", "chnaam_chabphtaem", "chnaam_chap", "ruptot"],
  data: function () {
    return {
      dialog: false
    }
  },
  methods: {
    លេខខ្មែរ: function (លេខ) {
      return உரைக்கு(លេខ, "ខ្មែរ")
    }
  }
}

</script>
