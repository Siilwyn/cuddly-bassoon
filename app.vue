<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ query }}
  </div>
</template>

<script setup lang="ts">
import query from "./index.query.graphql";
</script>
