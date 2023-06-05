<template>
  <div>
    <b-form-file
      v-model="selectedFile"
      :state="Boolean(selectedFile)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <!-- <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->
    <!-- <div>
      <b-form-file
        v-model="selectedFile"
        @change="handleFileChange"
      ></b-form-file>
    </div> -->
  </div>
</template>

<script>
// import { BFormFile } from "bootstrap-vue";
export default {
  data() {
    return {
      selectedFile: null
    };
  },
  methods: {
    handleFileChange(file) {
      console.log("file : ", file);
    }
  }
};
</script>
