<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Resend Verification Email
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error v-if="form.errors.has('message')" :form="form">
          {{ form.errors.get('message') }}
        </alert-error>
        <alert-success :form="form">
          We have resent the verification email
        </alert-success>
        <div class="form-group">
          <input
            type="text"
            class="form-control form-control-lg font-14 fw-300"
            name="email"
            v-model="form.email"
            :class="{'is-invalid': form.errors.has('email')}"
            placeholder="Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>

        <div class="text-right">
          <button 
            type="submit"
            :disabled="form.busy"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
            >
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Resend
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { Form } from 'vform'
export default {
    data(){
        return {
            form: new Form({
                email : ''
            })
        };
    },
    methods: {
        submit() {
            this.form.post('http://designhouse.test/api/verification/resend')
                    .then(res => this.form.resent())
                    .catch(e=> console.log(e))
        }
    }
}
</script>

<style>

</style>