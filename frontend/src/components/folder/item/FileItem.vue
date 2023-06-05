<template>
  <b-col>
    <b-card style="max-width: 20rem;" class="mb-2 h-100">
      <b-card-text>
        <b-row>
          <b-col>
            <b-icon icon="file-earmark-pdf" aria-hidden="true" scale="2" />
          </b-col>
          <b-col>
            <b-row>
              <b-col>
                <div class="text-end">Size. {{ file.size }} Mb</div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col>{{ file.name }}</b-col>
          <b-col>
            <b-row>
              <b-col>
                <div class="text-end">
                  <!-- {{ file.shared }} -->
                  <template v-if="file.shared === 'N'">
                    <b-icon
                      icon="trash"
                      aria-hidden="true"
                      scale="1"
                      @click="deleteFile(file)"
                    />
                  </template>

                  <b-icon
                    icon="download"
                    aria-hidden="true"
                    scale="1"
                    @click="handleDownload"
                  />
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
import router from "@/router";
export default {
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleDownload() {
      this.$emit("download", this.file.name);
    },
    deleteFile(file) {
      this.$itemApi.deleteFile(file);
      router.go(0);
    }
  }
};
</script>
