<template>
        <nav class="container-fluid  navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="d-lg-none form-inline mr-20 my-lg-0">
                <div class="dropdown dropleft">
                  <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                </a>
                  <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li>
                        <router-link class="dropdown-item" to="/admin/profile">
                            Profile
                        </router-link></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#" @click="performLogout()" >Sign out</a></li>
                  </ul>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li v-for="(item, index) in links" :key="index"  class="nav-item active">
                <router-link class="dropdown-item" :to="item.to">
                    {{ item.name }}
                </router-link>
                </li>
              </ul>
              <div class="d-none d-lg-block form-inline mr-20 my-lg-0">
                  <div class="dropdown dropleft">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                  </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                      <li>
                          <router-link class="dropdown-item" to="/admin/profile">
                              Profile
                          </router-link></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#" @click="performLogout()" >Sign out</a></li>
                    </ul>
                  </div>
              </div>
            </div>
            </nav>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    name:'dashboard', to:'/admin'
                },
                {
                    name:'profile', to:'/admin/profile'
                }
            ]
        }
    },
    methods: {
     performLogout(){
        this.$store.dispatch('performLogoutAction')
        .then(res=>{
        this.$router.push('/',res)
        })
        .catch(err=>{
          console.log(err)
        })
      }
  }
}
</script>

<style>

</style>