<template>
  <v-app>
    <v-content>
      <Top />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Top from '@/components/Top.vue';
import Login from '@/views/Login.vue';

@Component({})
export default class App extends Vue {

  public data() {
    return {};
  }
}
</script>
