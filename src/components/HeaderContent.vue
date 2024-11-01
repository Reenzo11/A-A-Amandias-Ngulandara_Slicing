<script setup lang="ts"></script>

<template>
  <nav
    class="px-12 pe-24 w-full h-[80px] bg-x-black flex items-center justify-between"
  >
    <img src="@/assets/images/logo/sistem.png" alt="Join Sistem Logo" />
    <ul class="flex gap-6">
      <li>
        <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
      </li>
      <li>
        <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
      </li>
      <li>
        <a href="/aboutus" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
      </li>
      <li>
        <a href="/contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
      </li>
    </ul>
    <a href="/contact" class="bg-x-blue px-4 py-2 rounded-[63px] text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</a>
  </nav>
</template>
