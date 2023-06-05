<template>
  <div>
    <b-container fluid="sm" class="mt-5">
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <b-card class="shadow">
            <div>
              <h5><b>Login</b></h5>
            </div>
            <hr />
            <b-form @submit.prevent="login">
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
              </b-form-group>
              <div class="text-end">
                <b-button type="submit" variant="primary" class="mt-3" size="sm"
                  >Login</b-button
                >
              </div>
              <div v-if="valid" class="mt-3">
                <div>
                  <b-alert show variant="danger">
                    <h4 class="alert-heading">
                      Your login information is incorrect.
                    </h4>
                    <hr />
                    <p class="mb-0">
                      <b-link>
                        <p class="text-danger" @click="signUp()">
                          <b>SignUp</b>
                        </p>
                      </b-link>
                    </p>
                  </b-alert>
                </div>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      pw: "",
      valid: false
    };
  },
  methods: {
    async login() {
      try {
        const result = await this.$userApi.validUser({
          id: this.id,
          pw: this.pw
        });

        this.valid = result.length > 0 ? false : true;
        result.length > 0 ? this.$router.push(`/list?id=${this.id}`) : null;
      } catch (error) {
        console.error("Error occurred:", error);
      }
    },
    signUp() {
      this.$router.push(`/join`);
    }
  }
};
</script>
