<template>
  <b-col>
    <b-card style="max-width: 20rem;" class="mb-2 h-100">
      <b-card-text>
        <b-row>
          <b-col class="ms-3 mt-2">
            <b-icon icon="folder" aria-hidden="true" scale="3" />
          </b-col>
          <b-col>
            <b-row>
              <b-col>
                <b>{{ folder.name }}</b>
              </b-col>
            </b-row>
            <hr />
            <b-row>
              <b-col>Sub File : {{ folder.fileName }}</b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    folder: {
      type: Object,
      required: true
    }
  }
};
</script>
