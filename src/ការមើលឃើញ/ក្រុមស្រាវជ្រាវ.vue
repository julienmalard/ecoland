<template>
  <v-sheet class="my-6 mx-auto" max-width="1000">
    <h1>ក្រុមស្រាវជ្រាវអេកូលែន</h1>
    <p class="mt-3">និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។
    និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។
  និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ និយាយអ្វីមួយអំពិអេកូលែននៅទីនេះ។ </p>
    <h1 class="mb-6">អ្នកស្រាវជ្រាវ</h1>
    <v-row>
      <v-col
        v-for="អ្នក in អ្នកស្រាវជ្រាវ.filter(អ្នក => អ្នក.តួនាទី === 'អ្នកស្រាវជ្រាវ')"
        :key="អ្នក.ឈ្មោះ"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="អ្នក.រូបថត || `https://picsum.photos/500/300?image=${Math.floor(Math.random(1)*20)}`"
          :lazy-src="អ្នក.រូបថត || `https://picsum.photos/500/300?image=${Math.floor(Math.random(1)*20)}`"
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
            {{អ្នក.ឈ្មោះ}}
          </v-card-title>
        </v-img>
      </v-col>
    </v-row>
    <h1 class="my-6">អ្នកស្រាវជ្រាវសហការ</h1>
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
    <h1 class="my-6">អ្នកហាត់ការ</h1>
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
  data: () => {
    return {
      អ្នកស្រាវជ្រាវ: [
        {
          ឈ្មោះ: "ដានិ",
          រូបថត: require('../assets/IMG_1946.jpg'),
          តួនាទី: "អ្នកស្រាវជ្រាវ"
        },
        {
          ឈ្មោះ: "ភិទូរ",
          រូបថត: require('../assets/IMG_1952 copie.jpg'),
          តួនាទី: "អ្នកស្រាវជ្រាវ"
        },
        {
          ឈ្មោះ: "ធារ៉ា",
          រូបថត: require('../assets/IMG_1938 copie.jpg'),
          តួនាទី: "អ្នកស្រាវជ្រាវ"
        },
        {
          ឈ្មោះ: "ស្រីទូច",
          រូបថត: require('../assets/IMG_1940 copie.jpg'),
          តួនាទី: "អ្នកស្រាវជ្រាវ"
        },
        {
          ឈ្មោះ: "អ្នកផ្សែង",
          រូបថត: "",
          តួនាទី: "អ្នកស្រាវជ្រាវសហការ"
        },
        {
          ឈ្មោះ: "អ្នកផ្សែង",
          រូបថត: "",
          តួនាទី: "អ្នកហាត់ការ"
        }
      ]
    }
  }
}
</script>
