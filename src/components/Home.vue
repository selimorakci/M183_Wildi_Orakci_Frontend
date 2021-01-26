<template>
  <div class="container">
    <div class="login-container">
      <div>
          <p v-if="this.userRole">Welcome {{this.userRole}}!!</p>
          <button v-on:click="logout()">LOGOUT</button>
      </div>    
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Home',
  data: function() {
    return {
      userRole: null,
    }
  },
  beforeCreate() {
    if (!this.$session.exists()) {
      this.$router.push('/login')
    }
  },
  created() {
    this.userType();
  },
  methods: {
    logout() {
      this.$session.destroy()
      this.$router.push('/login')
    },
    userType() {
      axios.get('http://localhost:3030/api/posts/', {
        headers: {
          'auth-token': this.$session.get('jwt')
        }
      }).then(() => {
          this.userRole = "admin";
        }, (err) => {
          if (err.response.status === 400) {
            this.userRole = "viewer";
          }
        })
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
