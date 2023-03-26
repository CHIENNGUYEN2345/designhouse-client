<template>
  <div>
    <!-- Start Hero -->
    <section class="hero text-center bg-secondary mb-4 text-white">
      <div class="container">
        <h1 class="font-28 fw-600 text-uppercase">
          Update Design Information
        </h1>
      </div>
    </section>
    <!-- End Hero -->
    <!-- Upload Shot -->
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body p-1" >
              <img src="https://w0.peakpx.com/wallpaper/165/747/HD-wallpaper-beautiful-landscape-digital-art.jpg" class="w-100 mb-4" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form class="auth-form" @submit.prevent="submit">
                <alert-success :form="form">
                  Design successfully updated
                </alert-success>
                <div class="form-group">
                  <input 
                    :form="form"
                    field="title"
                    v-model="form.title"
                    placeholder="Enter a title"
                  />
                </div>
                <div class="form-group">
                  <input 
                    :form="form"
                    field="description"
                    v-model="form.description"
                    placeholder="Enter a description"
                  />
                </div>
                <div class="form-group">
                  tags
                  <!-- <client-only>
                    <better-input-tag
                      :tags="form.tags"
                      placeholder="Tags separated by commas"
                      on-paste-delimiter=","
                    ></better-input-tag>
                  </client-only> -->
                </div>
                <template>
                  <div class="form-group custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="assign_to_team"
                      
                    />
                    <label
                      class="custom-control-label"
                      value="true"
                      for="assign_to_team"
                    >
                      Assign to team
                    </label>
                  </div>
                  <div class="form-group">
                    <select
                      
                      class="custom-select"
                      v-model="form.team"
                    >
                      <option :value="null">Select a team</option>
                      <option
                        
                      >
                        1
                      </option>
                    </select>
                    <!-- <has-error :form="form" field="team"></has-error> -->
                  </div>
                </template>
                <div class="form-group custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="is_live"
                    
                  />
                  <label
                    class="custom-control-label"
                    value="true"
                    for="is_live"
                  >
                    Publish this design
                  </label>
                </div>

                <div class="text-right">
                  <!-- <nuxt-link :to="{ name: 'settings.designs' }"
                    >Cancel</nuxt-link
                  >
                  <base-button :loading="form.busy">
                    Update Design
                  </base-button> -->
                  <button type="submit" :loading="form.busy">
                    Upadate design
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Upload Shot -->
  </div>
</template>

<script>
import { Form } from 'vform'
export default {
  middleware: ['auth'],
  data(){
    return {
      form: new Form({
        title: '',
        description: '',
        is_live: false,
        tags: [],
        assign_to_team: false,
        team: null
      })
    }
  },

  async asyncData({$axios,params,error,redirect}){
    try{
      const design = await $axios.$get(`http://designhouse.test/api/designs/${params.id}`);
      //fetch the team for the user
      // const teams = await $axios.$get(`http://designhouse.test/api/users/teams/`);
      return {design: design.data};
      // console.log(design);
    }catch(err){
      // if(err.response===404){
      //   error({statusCode: 404, message: "Design not found!"})
      // }else{
      //   error({statusCode: 500, message: "Sorry, Server error."})
      // }
      console.log(err);
    }
  },
  methods: {
    submit(){
      
      this.form
            .put(`http://designhouse.test/api/designs/${this.$route.params.id}`, {
  
  headers: {
    "Authorization": "bearer " + localStorage.getItem('token'),
    "Accept": "application/json",
    "cache-control": "no-cache"
  }
})
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    }
  },
  mounted() {
    if(this.design){
      Object.keys(this.form).forEach(key => {
      if(this.design.hasOwnProperty(key)){
        this.form[key] = this.design[key];
      }
    });
    this.form.tags = this.design.tag_list.tags || [];
    if(this.design.team){
      this.form.team = this.design.team.id;
      this.form.assign_to_team = true;
    }else{
      this.form.assign_to_team = false;
    }
    }
    
  }
}
</script>

<style>

</style>