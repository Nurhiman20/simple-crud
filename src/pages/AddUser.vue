<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Add User</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link to='/'>Home</router-link>
              </li>
              <li class="breadcrumb-item active">
                <router-link to='/user-list'>User List</router-link>
              </li>
              <li class="breadcrumb-item active">
                Add User
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="email">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="phone">
                  </div>
                </div>
              </div>
              <button class="btn btn-outline-warning mr-2" @click="$router.push('/user-list')">Cancel</button>
              <button class="btn btn-primary" @click.prevent="submitForm">Submit</button>
              <div class="spinner-border text-primary ml-2" role="status" v-if="loadingAdd">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="alert alert-success mt-4 d-flex flex-row justify-content-between" role="alert" v-if="successAddUser">
                <p>Successfully added user.</p>
                <div>
                  <button type="button" class="btn btn-warning" @click.prevent="$router.push('/user-list')">Back to user list page</button>
                  <button type="button" class="btn btn-primary ml-2" @click.prevent="addAnother">Add another user</button>
                </div>
              </div>
              <div class="alert alert-danger mt-4 d-flex flex-row justify-content-between" role="alert" v-if="failedAddUser">
                <p>System error. Please contact administrator.</p>
                <font-awesome-icon icon="window-close" class="pointer" @click="failedAddUser = false" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      username: null,
      email: null,
      phone: null,
      loadingAdd: false,
      successAddUser: false,
      failedAddUser: false
    }
  },
  methods: {
    addAnother () {
      this.name = null
      this.username = null
      this.email = null
      this.phone = null
      this.successAddUser = false
    },
    submitForm () {
      this.loadingAdd = true
      let allData = JSON.stringify({
        name: this.name,
        username: this.username,
        email: this.email,
        phone: this.phone
      })

      this.$store.commit('user/SET_NEW_USER', allData)
      this.$store.dispatch('user/postUser')
        .then(response => {
          this.successAddUser = true
          this.loadingAdd = false
        }).catch((error) => {
          this.failedAddUser = true
          this.loadingAdd = false
        })
    } 
  }
}
</script>
