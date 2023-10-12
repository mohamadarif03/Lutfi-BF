<template>
  <div>
    <nav
      class="py-3 px-7 bg-[#79AC78] text-[#D0E7D2] font-semibold tracking-wide flex items-center justify-between"
    >
      <div>
        <img src="/img/nuxt.png" alt="Discover Nuxt 3" width="60" class="rounded-full" />
      </div>
      <div>
        <nuxt-link
          to="/"
          class="mx-2 hover:text-white"
          :class="$route.path === '/' ? 'text-white' : ''"
          >Home</nuxt-link
        >
        <nuxt-link
          to="/about"
          class="mx-2 hover:text-white"
          :class="$route.path === '/about' ? 'text-white' : ''"
          >About</nuxt-link
        >
        <nuxt-link
          to="/gallery"
          class="mx-2 hover:text-white"
          :class="$route.path === '/gallery' ? 'text-white' : ''"
          >Gallery</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="mx-2 hover:text-white"
          :class="$route.path === '/contact' ? 'text-white' : ''"
          >Contact Us</nuxt-link
        >
      </div>
      <div>
        <nuxt-link class="hover:text-white cursor-pointer">Login</nuxt-link>
        <nuxt-link class="mx-1.5 hover:text-white cursor-pointer">|</nuxt-link>
        <nuxt-link class="hover:text-white cursor-pointer">Register</nuxt-link>
      </div>
    </nav>
  </div>
</template>