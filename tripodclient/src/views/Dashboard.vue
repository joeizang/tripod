<template>
<div>
  <v-navigation-drawer
    v-model="draver"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <template>
        <v-row align="center">
          <v-col cols="6">
            <v-subheader></v-subheader>
          </v-col>
          <v-col cols="6" class="text-center">
            <a href="#!" class="body-2 black--text"></a>
          </v-col>
        </v-row>
        <v-list-group>
          <template>
            <v-list-item>
              <v-list-item-title>

              </v-list-item-title>
            </v-list-item>
          </template>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
  
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-toolbar-title
      style="width: 300px"
      class="ml-0 pl-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="hidden-sm-and-down">Tripod Insurance Brokers</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Navigate App"
      class="hidden-sm-and-down"
      ></v-text-field>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon large>mdi-account-circle</v-icon>
      </v-btn>
  </v-app-bar>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Top from '@/components/Top.vue';


@Component({})
export default class Dashboard extends Vue {}
</script>
