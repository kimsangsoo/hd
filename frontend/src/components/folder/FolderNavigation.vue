<template>
  <b-container fluid="xl" class="mt-5">
    <b-row>
      <b-col v-for="folder in folders" :key="folder.name">
        <b-card
          :title="folder.title"
          class="shadow"
          style="cursor:pointer"
          @click="navigateToFolder(folder.route)"
        >
          <b-icon
            :icon="folder.icon"
            font-scale="5"
            :variant="folder.variant"
          />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    folders: {
      type: Array,
      required: true
    }
  },
  methods: {
    navigateToFolder(route) {
      this.$router.push({ path: route, query: this.$route.query });
    }
  }
};
</script>
