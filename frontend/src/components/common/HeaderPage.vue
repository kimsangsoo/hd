<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/login">SignIn</b-nav-item>
          <b-nav-item href="/join">SignUp</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
