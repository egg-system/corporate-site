<template>
  <v-layout row>
    <v-flex xs12>
      <v-layout align-center justify-center class="py-5">
        <slot name="title"/>
      </v-layout>

      <v-layout align-center justify-center>
        <slot/>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
