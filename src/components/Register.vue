<template>
  <div class="container">
    <div class="login-container">
      <div>
      </div>
      <label>Username: </label>
      <input v-model="username" type="text" />
      <label>Password: </label>
      <input v-model="password" type="password" />
      <button v-on:click="login(username, password)">Register</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login(username, password) {
        axios.post('http://localhost:3030/api/user/register', {
          username: username,
          password: password
        })
        .then(function( response ){
            console.log(response)
        }.bind(this));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .container {
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  height: 500px;
  width: 50%;
  background-color: #525252;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
} */
</style>
