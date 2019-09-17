<template>
    <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-lock-question</v-icon>
                    </v-btn>
                  </template>
                  <span>Click here if you forgot your password</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-help</v-icon>
                    </v-btn>
                  </template>
                  <span>You are expected to enter your official email and password given you when you joined!</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-checkbox v-model="rememberme" label="Remember Me?"></v-checkbox>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" large><v-icon>mdi-lock-open</v-icon>  Login</v-btn>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                      color="red darken-3"
                      large
                      target="_blank"
                      href="http://localhost:5050/auth"
                    >
                      Remote Login
                    </v-btn>
                    </template>
                  <span>Login using our World class Authentication Server without a password!</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {}
</script>

<style scoped>

</style>