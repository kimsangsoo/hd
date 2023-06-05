<template>
  <b-container fluid="xl" class="mt-5">
    <div>
      <UploadFile />
      <!-- <input type="file" @change="selectFile" />
      <button @click="uploadFile">Upload</button> -->
    </div>
    <b-row>
      <template v-if="fileList !== null">
        <h3>File List</h3>
        <hr />
        <FileItem
          v-for="(file, fileIndex) in fileList"
          :key="'file-' + fileIndex"
          :file="file"
          @download="downloadFile(file.name)"
        />
      </template>

      <template v-if="folderList !== null">
        <h3 class="mt-5">Folder List</h3>
        <hr />
        <FolderItem
          v-for="(folder, folderIndex) in folderList"
          :key="'folder-' + folderIndex"
          :folder="folder"
        />
      </template>
    </b-row>
  </b-container>
</template>

<script>
import FileItem from "@/components/folder/item/FileItem.vue";
import FolderItem from "@/components/folder/item/FolderItem.vue";
import UploadFile from "@/components/file/UploadFilePage";
export default {
  created() {
    this.id = this.$route.query.id;
    this.loadData(this.id);
  },
  data() {
    return {
      id: null,
      fileList: null,
      folderList: null
    };
  },
  methods: {
    downloadFile(fileName) {
      this.$downloadApi.download(fileName);
    },
    loadData(id) {
      this.getFileList(id);
      this.getFolderList(id);
    },
    getFileList(id) {
      this.$itemApi.getFileList(id).then(result => {
        this.fileList = result;
      });
    },
    getFolderList(id) {
      this.$itemApi.getFolderList(id).then(result => {
        this.folderList = result;
      });
    }
  },
  components: {
    FileItem,
    FolderItem,
    UploadFile
  }
};
</script>
