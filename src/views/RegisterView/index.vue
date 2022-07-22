<template>
  <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <div class="mb-4 float-right" >
                  <a
                    class="btn btn-primary"
                    :class="{disabled : currentStep == 0}"
                    @click="prevStep()"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" style="height:25px" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                  <a
                    class="btn btn-primary"
                    :class="{disabled : currentStep == 1}"
                    @click="nextSept()"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" style="height:25px" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                <form class="user">
                  <div v-if="currentStep == 0" >
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleInputlogin"
                        placeholder="login"
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
                  </div>
                  <div v-if="currentStep == 1" >
                     <div class="form-group">
                      <input
                        type="email"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                        v-model="form.email"
                      />
                     </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="First Name"
                            v-model="form.name"
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="Last Name"
                            v-model="form.lastName"
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstAdress"
                            placeholder="Adress"
                            v-model="form.adress"
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="examplephoneNumber"
                            placeholder="phone Number"
                            v-model="form.phoneNumber"
                          />
                        </div>
                      </div>
                      <a
                        href="#"
                        class="btn btn-primary btn-user btn-block"
                        @click="performRegister()"
                      >
                        Register
                      </a>
                  </div>
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/"
                    >Already have an account? Login!</router-link
                  >
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
  name: 'RegisterView',
  data() {
      return {
          currentStep: 0,
          form: {
              login:'',
              password:'',
              name: '',
              lastName: '',
              email: '',
              adress: '',
              phoneNumber: '',
          }
      }
  },
  methods: {
        nextSept() {
            if(this.form.login && this.form.password)
            {this.currentStep++}
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
        prevStep() {
            this.currentStep--
        },
        performRegister(){
            if(this.form.name && this.form.lastName && this.form.email && this.form.adress && this.form.phoneNumber)
            {
                
                this.$store.dispatch('performRegisterAction',
                this.form
                ).then( res => {
                this.$router.push('/',res)
                }).catch( err => {
                    console.log(err.message)
                    this.error = "There was error during Regestration process"
                })

            }
            if(!this.form.name){
            this.$notify({
                group: 'foo',
                title: 'le champ Nom est obligatoir',
                message: 'le champ Nom est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.lastName){
            this.$notify({
                group: 'foo',
                title: 'le champ Prénom est obligatoir',
                message: 'le champ Prénom est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.email){
                this.$notify({
                group: 'foo',
                title: 'le champ email est obligatoir',
                message: 'le champ email est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.adress){
            this.$notify({
                group: 'foo',
                title: 'le champ Adresse est obligatoir',
                message: 'le champ Adresse est obligatoiry',
                type: 'error',
                duration: 2000,
              });
            }
            if(!this.form.phoneNumber){
                this.$notify({
                group: 'foo',
                title: 'le champ Téléphone est obligatoir',
                message: 'le champ Téléphone est obligatoir',
                type: 'error',
                duration: 2000,
              });
            }
        }
    }
    
}
</script>

<style>

</style>