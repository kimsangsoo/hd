<template>
  <b-container fluid="xl" class="mt-5">
    <b-row>
      <template v-if="sharedfileList !== null">
        <h3>Shared File List</h3>
        <hr />
        <FileItem
          v-for="(sharedFile, SharedfileIndex) in sharedfileList"
          :key="'sharedFile-' + SharedfileIndex"
          :file="sharedFile"
          @download="downloadFile(sharedFile.name)"
        />
      </template>
    </b-row>
  </b-container>
</template>

<script>
import FileItem from "@/components/folder/item/FileItem.vue";

export default {
  created() {
    this.id = this.$route.query.id;
    this.loadData(this.id);
  },
  data() {
    return {
      id: null,
      sharedfileList: null
    };
  },
  methods: {
    downloadFile(fileName) {
      this.$downloadApi.download(fileName);
    },
    loadData(id) {
      this.getSharedFileList(id);
    },
    getSharedFileList(id) {
      this.$itemApi.getSharedFileList(id).then(result => {
        this.sharedfileList = result;
        console.log("sharedfileList : ", this.sharedfileList);
      });
    }
  },
  components: {
    FileItem
  }
};
</script>
