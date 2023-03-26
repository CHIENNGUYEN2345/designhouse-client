<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
            {{ status }}
        </alert-success>
        <div class="form-group">
          <input
            type="text"
            name="email"
            
            class="form-control form-control-lg font-14 fw-300"
            
            placeholder="Email"
          >
        </div>
        <has-error :form="form" field="email"></has-error>

        <div class="text-center">
          <button type="submit" 
          
          class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            <span>
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            
            Send Password Reset Link
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link
            :to="{name: 'login'}"
           class="color-blue">
            Back To Login
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { Form } from 'vform'
export default {
  
  data(){
    return {
      status: '',
      form: new Form({
        email: '',
        
      })
    }
  },

  methods:{
    submit(){
     this.form.post('http://designhouse.test/api/password/email')
            .then(res=>{
              this.status = res.data.status
            }).catch(e=>{
              console.log()
            })
    }
  }
}
</script>

<style>

</style>