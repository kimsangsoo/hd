<template>
  <b-container fluid="sm" class="mt-5">
    <b-row class="justify-content-md-center">
      <b-col cols="6">
        <b-card class="shadow">
          <div>
            <h5><b>Join Us</b></h5>
          </div>
          <hr />
          <b-form @submit.prevent="join">
            <b-form-group>
              <b-form-input
                id="input-userId"
                v-model="id"
                placeholder="User Id"
                required
              ></b-form-input>
              <b-form-input
                id="input-password"
                v-model="pw"
                placeholder="Password"
                class="mt-2"
                type="password"
                required
              ></b-form-input>
              <b-form-input
                id="input-name"
                v-model="name"
                placeholder="Name"
                class="mt-2"
                required
              ></b-form-input>
            </b-form-group>
            <div class="text-end">
              <b-button type="submit" variant="primary" class="mt-3" size="sm"
                >Join</b-button
              >
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pw: "",
      name: "",
      valid: false
    };
  },
  methods: {
    async join() {
      try {
        const result = await this.$userApi.joinUser({
          id: this.id,
          pw: this.pw,
          name: this.name
        });

        this.$router.push(`/login`);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    }
  }
};
</script>
