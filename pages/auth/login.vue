<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error :form="form" v-if="form.errors.has('verification')">
          {{ form.errors.get('verification') }}
          <nuxt-link :to="{name: 'resend'}">Resend Verification Email.</nuxt-link>
        </alert-error>
        <div class="form-group">
          <input
            type="text"
            name="email"
            v-model="form.email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is-invalid' : form.errors.has('email')}"
            placeholder="Email"
          >
        </div>
        <has-error :form="form" field="email"></has-error>
        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model="form.password"
            class="form-control form-control-lg font-14 fw-300"
            :class="{'is-invalid' : form.errors.has('password')}"
            placeholder="Password"
          >
        </div>
        <has-error :form="form" field="password"></has-error>
        <div class="mt-4 mb-4 clearfix">
          <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400" 
          >
            Forgot password?
          </nuxt-link>
        </div>
        <div class="text-center">
          <button type="submit" 
          :disabled="form.busy"
          class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <nuxt-link
            :to="{name: 'register'}"
           class="color-blue">
            Create an account
          </nuxt-link>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { Form } from 'vform'
export default {
  middleware: ['guest'],
  data(){
    return {
      form: new Form({
        email: '',
        password: ''
      })
    }
  },

  methods:{
    submit(){
      this.$auth.loginWith('local', {
        data: this.form
      }).then(res => {
        console.log(res)
      }).catch(e => {
        this.form.errors.set(e.response)
      })
    }
  }
}
</script>

<style>

</style>