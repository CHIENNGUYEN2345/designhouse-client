<template>
  <section class="post-details mt-4 pb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="row">
            <!-- LEFT -->
            <div class="col-md-8">
              <!-- Single Image -->
              <div class="post-detail">
                <div class="single-img">
                  <img :src="design.images.large"
                  alt="image" />
                </div>
              </div>
              <!-- End Single Image -->
              <!-- Design Detail Text -->
              <div class="desing-text font-16 fw-400 pb-3 pt-2">
                <p>
                  {{design.description}}
                </p>
              </div>
              <!-- End Design Detail Text -->
              <!-- Design Comments -->
              <div class="design-comments mt-3">
                <h1 class="font-16 fw-300 mb-4">
                  <strong class="fw-500">0 comments</strong>
                </h1>
                <ul class="comment-list">
                  <!-- <DesignComment
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                    @deleted="handleDelete"
                  ></DesignComment> -->
                </ul>
              </div>

              <template>
                <form>
                  <textarea
                    
                    name="body"
                    
                    placeholder="Enter a comment"
                  ></textarea>

                  <div class="mt-2 text-right">
                    <!-- <base-button :loading="form.busy" size="sm">
                      Post comment
                    </base-button> -->
                  </div>
                </form>
              </template>

              <!--/ END COMMENTS-->
            </div>

            <!-- RIGHT -->
            <div class="col-md-4">
              <div class="post-detail-sidebar">
                <!-- Designer info -->
                <div class="modal-user-meta white-bg-color">
                  <a class="float-left" href="#" title="Neba">
                    <img src="https://i.pinimg.com/736x/d3/f6/21/d3f6217a1d92ca3fbaea07c2385e1588.jpg" alt="Neba" />
                  </a>
                  <div class="modal-user-detail">
                    <h1 class="font-13 fw-500">
                      <a href="#">
                        My name
                      </a>
                    </h1>
                    <p class="font-12 fw-300 mt-1">
                      <span class="shot-by">My tagline</span>
                    </p>
                    <p class="font-12 fw-300  mt-1">
                      {{design.created_at_dates.created_at_human}}
                    </p>
                  </div>
                </div>
                <!-- End Designer info -->
                <!-- Designer Design Info -->
                <ul class="details-side-meta font-14 fw-400">
                  <!-- <DesignLike :design="design"></DesignLike> -->
                    <DesignLike :design="design"></DesignLike>
                  <li class="d-table w-100">
                    <div class="stats-txt d-table-cell w-100">
                      <a href="#"> More from My name </a>
                    </div>
                  </li>
                </ul>
                <!-- End Designer Design Info -->
                <!-- Designer More Designs -->
                <div class="more-designs-outer pb-3">
                  <ul class="more-designs row">
                    <li class="col-md-6">
                      <a href="#">
                        <img
                          class="w-100"
                          src="~assets/images/among_trees_night_dribbble.png"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li class="col-md-6">
                      <a href="#">
                        <img
                          class="w-100"
                          src="~assets/images/among_trees_night_dribbble.png"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li class="col-md-6">
                      <a href="#">
                        <img
                          class="w-100"
                          src="~assets/images/among_trees_night_dribbble.png"
                          alt="Image"
                        />
                      </a>
                    </li>
                    <li class="col-md-6">
                      <a href="#">
                        <img
                          class="w-100"
                          src="~assets/images/among_trees_night_dribbble.png"
                          alt="Image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- End Designer More Designs -->
                <!-- Designs Tags -->
                <div class="designs-tag-outer mt-3">
                  <h2 class="font-16 fw-500 mb-2">
                    Tags
                  </h2>
                  <div
                    class="designs-tag font-14 fw-300"
                    
                  >
                    <a
                      href="#"
                    >
                      
                    </a>
                  </div>
                </div>
                <!-- End Designs Tags -->
              </div>
            </div>
            <!--/ END RIGHT-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DesignLike from '@/components/DesignLike';
export default {
    components: {
        DesignLike
    },
    data(){
        return {

        }
    },
    async asyncData({$axios, params}){
        try{
            const response = await $axios.$get(`http://designhouse.test/api/designs/slug/${params.slug}`);
            return {design: response.data, comments: response.data.comments};
        }catch(e){
            console.log(err);
        }
    }
}
</script>

<style>

</style>