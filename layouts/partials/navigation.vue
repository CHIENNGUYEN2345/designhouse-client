<template>
  <header class="fixed-topx">
    <nav class="navbar navbar-expand-lg navbar-dark align-items-center">
      <nuxt-link :to="{name: 'index'}" class="navbar-brand text-uppercase fw-500">DesignHouse</nuxt-link>
      <button
        class="navbar-toggler mr-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav font-14 fw-300">
          <li class="nav-item">
            <nuxt-link :to="{name: 'search'}" class="nav-link">Designs</nuxt-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" title="Designers">Designers</a>
          </li>
        </ul>
        <div class="header-search">
          <form action method>
            <div class="form-group">
              <input
                type="text"
                autocomplete="OFF"
                name="search"
                class="form-control text-white font-14 fw-300"
                placeholder="Search and hit enter..."
              />
              <div class="search-icon text-white">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </form>
        </div>
        <div class="upload-shot white-path font-14 fw-500 text-uppercase mr-auto">
          <a href="/upload" class="primary-bg-color text-white">
            <i class="fas fa-cloud-upload-alt"></i> Upload
          </a>
        </div>
      </div>

      <!-- Before Login -->
      <template v-if="!this.$auth.loggedIn">
        <ul class="before-login font-14 fw-300 text-uppercase">
          <li>
            <nuxt-link :to="{name: 'register'}">Sign Up</nuxt-link>
            
          </li>
          <li>
            <nuxt-link :to="{name: 'login'}">Login</nuxt-link>
          </li>
        </ul>
      </template>
      <!-- End Before Login -->
        
      <!-- After Login -->
      <template v-else>
        <ul class="author-page white-path">
          <!-- Profile Dropdown -->
          <li>
            <a
              href="#"
              class="text-white"
              id="userDropdown"
              role="button"
            data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              
            >
              <img class="user-thumb" src="~assets/images/profile.png" />
              <div class="usr-info">
                <span class="user-name font-14 fw-500">
                  {{
                  $auth.user.name
                  }}
                </span>
                <span class="user-deg font-10 fw-300">
                  {{
                  $auth.user.tagline
                  }}
                </span>
                <span class="down-chevron">
                  <i class="fa fa-angle-down"></i>
                </span>
              </div>
            </a>
            <div class="font-14 fw-500" aria-labelledby="userDropdown">
              <div class="font-12 fw-500">
                <span class="dropdown-title text-uppercase">Your Account</span>
              </div>
              <a href="/settings/dashboard" class="mt-28">
                <i class="fas fa-tachometer-alt"></i>
                Dashboard
              </a>
              <a href="#" title="Profile">
                <i class="fa fa-user"></i>
                Profile
              </a>
              <a href="#" title="Setting">
                <i class="fa fa-cogs"></i>
                Setting
              </a>
              <div></div>
              <a href="#" @click.prevent="logout">
                <i class="fa fa-lock"></i>
                Sign Out
              </a>
            </div>
          </li>
          <!-- End Profile Dropdown -->
        </ul>
      </template>
      
      
      <!-- End After Login -->
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style></style>