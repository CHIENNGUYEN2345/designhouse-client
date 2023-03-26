<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">Register</h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form">
          We have send you email to activated your account.
        </alert-success>
        
        <div class="form-group">
          <input
            
            type="text"
            v-model.trim="form.name"
            name="name"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is_invalid': form.errors.has('name')}"
            placeholder="fullname"
          >
          <has-error :form="form" field="name"></has-error>
        </div>
        <div class="form-group">
          <input
            
            type="text"
            v-model.trim="form.username"
            name="username"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is_invalid': form.errors.has('username')}"
            placeholder="name"
          >
        </div>
        <has-error :form="form" field="username"></has-error>

        <div class="form-group">
          <input
            
            type="email"
            v-model.trim="form.email"
            name="email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is_invalid': form.errors.has('email')}"
            placeholder="Email"
          >
        </div>
        <has-error :form="form" field="email"></has-error>

        <div class="form-group">
          <input
            
            type="password"
            name="password"
            v-model.trim="form.password"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is_invalid': form.errors.has('password')}"
            placeholder="Password"
          >
        </div>
        <has-error :form="form" field="password"></has-error>

        <div class="form-group">
          <input
            
            type="password"
            v-model.trim="form.password_confirmation"
            name="password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            
            placeholder="Confirm Password"
          >
        </div>

        <div class="text-center">
          <button type="submit" 
          :disabled="form.busy"
          class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            
            Register
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <nuxt-link :to="{name: 'login'}" class="color-blue">Login</nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import Form from 'vform'
export default {
  middleware: ['guest'],
   data:() => ({
    
      form: new Form({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    
  }),

  methods: {
    submit(){
      this.form.post(`http://designhouse.test/api/register`)
                .then(res => {
                  this.form.reset()
                  console.log(res);
                }).catch(error => {
                  console.log(error);
                });
    }
  }
}
</script>

<style>

</style>