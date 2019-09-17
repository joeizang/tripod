<template>
    <nav>
      <v-toolbar app>
        <v-toolbar-title class="text-uppercase grey--text">
        <span class="front-weight-light">Tripod OfficeApp</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-btn flat color="gray">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Top extends Vue {

}
</script>

<style scoped>

</style>