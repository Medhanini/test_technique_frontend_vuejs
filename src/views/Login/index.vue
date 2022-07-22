<template>
  <div>
    <div class="container">
      <!---- Navbar -->
      <!-- Outer Row -->
      <div
        class="row justify-content-center"
        v-if="verificationStatus"
      >
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div
            class="alert alert-dismissible fade show mt-5"
            v-bind:class="verificationAlertClasses"
            role="alert"
          >
            <div>{{ verificationMessage }}</div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user" @submit.prevent="login">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="form.login"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="form.password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <a
                        href="#"
                        class="btn btn-primary btn-user btn-block"
                        @click="Submit()"
                      >
                        Login
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            form: {
                login:'',
                password:'',
            }
        }
    },
    methods: {
         performLogin(){
            this.$store.dispatch('performLoginAction',{
            email:this.form.login,
            password:this.form.password
            }).then(  res => {
            this.isLoding = res
            this.$router.push('/about')
            }).catch( err => {
                console.log(err.message)
                this.$notify({
                group: 'foo',
                title: err.message,
                message: 'le champ login est obligatoiry',
                type: 'error',
                duration: 2000,
              });
        
            })
        },
        Submit() {
            if(this.form.login && this.form.password)
            {
                this.performLogin()
            }
            if(!this.form.login){
            this.$notify({
                group: 'foo',
                title: 'le champ login est obligatoir',
                message: 'le champ login est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.password){
                this.$notify({
                group: 'foo',
                title: 'le champ password est obligatoir',
                message: 'le champ password est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
        },
    }
}
</script>

<style>

</style>