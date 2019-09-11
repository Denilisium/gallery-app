<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="login">User</label>
        <input type="text" class="form-control" name="login" v-model="login" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="text" class="form-control" name="password" v-model="password" required />
      </div>
      <div class="form-group">
        <button type="submit">Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
import { instance } from "../services/authorization.service";

export default {
  name: "authorization",
  data: function() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    onSubmit: function() {
      if (this.login && this.password) {
        instance.signIn(this.login, this.password).then(() => {
          this.$router.push("/gallery");
        });
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

form {
  width: 30rem;
  height: 10rem;
}

.form-group {
  display: flex;
  margin-bottom: 1rem;
}

.form-group label {
  flex-basis: 12rem;
  text-align: start;
  align-self: center;
}

.form-control {
width: 100%;
  background-color: transparent;
  padding: 0.2rem 0.5rem;
  border: 0.1rem solid #333;
  border-radius: 1rem;
  font-size: inherit;
}

.form-group:last-child {
  justify-content: flex-end;
}

[type="submit"] {
  background-color: transparent;
  padding: 0.2rem 0.5rem;
  border: 0.1rem solid #333;
  border-radius: 1rem;
  cursor: pointer;
  font-size: inherit;
}
</style>