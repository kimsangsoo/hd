<template>
  <b-container fluid="xl" class="mt-5">
    <h3>Trash File List</h3>
    <hr />
    <b-button variant="danger" @click="deleteAllFile">All Delete</b-button>
    <b-row class="mt-5">
      <b-col
        v-for="(deletedFile, deletedFileIndex) in deletedfileList"
        :key="deletedFileIndex"
      >
        <b-card style="max-width: 20rem;" class="mb-2 h-100">
          <b-card-text>
            <b-row>
              <b-col>
                <b-icon icon="file-earmark-pdf" aria-hidden="true" scale="2" />
              </b-col>
            </b-row>
            <b-row class="mt-3">
              <b-col>{{ deletedFile.name }}</b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import router from "@/router";

export default {
  created() {
    this.id = this.$route.query.id;
    this.getDeletedFileList(this.id);
  },
  data() {
    return {
      id: null,
      deletedfileList: null
    };
  },
  methods: {
    getDeletedFileList(id) {
      this.$itemApi.getDeletedFileList(id).then(result => {
        this.deletedfileList = result;
      });
    },
    deleteAllFile() {
      this.$itemApi.setEmptyTrash(this.id).then(result => {
        router.go(0);
      });
    }
  }
};
</script>
