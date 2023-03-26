<template>
  <div>
    <SiteNavigation></SiteNavigation>
    <div class="wrapper">
      <nuxt/>
    </div>
    <SiteFooter></SiteFooter>
    
  </div>
</template>

<script>
import SiteNavigation from './partials/navigation.vue'
import SiteFooter from './partials/footer.vue'
export default {
  components: {
    SiteNavigation, 
    SiteFooter
  }
}
</script>

<style>

</style>