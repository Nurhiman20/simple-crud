<template>
  <div>
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">User List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">User List</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="table-users">
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>       
                <tr v-for="(user, index) in userList" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ user.name }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.phone }}</td>
                </tr>
              </tbody>
            </table>
            <div class="mt-4 d-flex" style="width: 100%" v-if="loadingGetList">
              <div class="spinner-border text-primary mx-auto" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('user')

export default {
  data() {
    return {
      loadingGetList: false
    }
  },
  created () {
    this.loadingGetList = true
    this.$store.dispatch('user/getListUser')
      .then(response => {
        this.loadingGetList = false
      })
      .catch((error) => {
        this.loadingGetList = false
        this.errorMessage = "System error"
        this.dialogFailed = true
      })
  },
  computed: {
    ...mapState({
      userList: state => state.userList
    })
  }
}
</script>
