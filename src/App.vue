<template>
  <v-app>
    <v-app-bar
      app
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      dark
      height="300"
      color="rgba(25,32,72)"
      :src="រូបថត"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.2), rgba(25,32,72,0)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon>
        <template v-slot:default>
          <img
            alt="Vue logo"
            class="my-6"
            height="20"
            src="./assets/អេកូលែន.png"
            @click="$router.push(encodeURI('/អំពិយើង'))"
            v-on:keyup.enter="$router.push(encodeURI('/អំពិយើង'))"
          />
        </template>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        {{ $t("ឈ្មោះអេកូលែន") }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        top
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-earth</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="ភាសា in Object.keys($i18n.messages).filter(ភាសា=> ភាសា !== 'default')"
            :key="ភាសា"
            @click="$i18n.locale = ភាសា"
          >
            <v-list-item-avatar dense>
              <v-icon v-show="$i18n.locale === ភាសា">mdi-check</v-icon>
            </v-list-item-avatar>
            <v-list-item-title class="text-start">{{ ភាសា }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab
            v-for="ផ in ផ្ទាំង"
            :key="ផ"
            @click="$router.push(encodeURI(`/${ផ}`))">{{ $t(`ផ្ទាំង.${ផ}`) }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="mt-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

  </v-app>

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  data: () => ({
    ផ្ទាំង: ['អំពិយើង', 'កម្រោងស្រាវជ្រាវ', 'ក្រុមស្រាវជ្រាវ', 'អត្ថបទបោះពុម្ភ', 'ទំនាក់ទំនង'],
    រូបថតៗ: [
      // eslint-disable-next-line
      require('./assets/photo_2022-03-31_09-43-14.jpg'),
      // eslint-disable-next-line
      require('./assets/IMG_1966 - copie.jpg'),
    ],
    រូបថត: '',
  }),
  mounted() {
    let អ = 0;
    this.រូបថត = this.រូបថតៗ[អ];
    setInterval(() => {
      អ += 1;
      if (អ >= this.រូបថតៗ.length) អ = 0;
      this.រូបថត = this.រូបថតៗ[អ];
    }, 2500);
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
