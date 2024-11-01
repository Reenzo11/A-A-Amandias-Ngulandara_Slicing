<script setup lang="js">
import MainLayout from '@/layouts/MainLayout.vue'
</script>


<template>
  <!-- Membungkus konten di dalam MainLayout agar navbar dan footer muncul -->
  <MainLayout>
    <!-- Header Section -->
    <header class="flex flex-col text-center text-gray-800">
      <section
        class="flex flex-col justify-center items-center p-20 w-full bg-gray-100 max-md:px-5 max-md:w-full"
      >
        <article class="flex flex-col w-full max-w-[302px]">
          <h1
            class="text-5xl font-bold tracking-tighter leading-none max-md:text-4xl"
          >
            Privacy Policy
          </h1>
          <time
            datetime="2022-01-27"
            class="self-center mt-1 text-base leading-7 opacity-60"
          >
            Last Updated on 27th January 2022
          </time>
        </article>
      </section>
    </header>

    <!-- Main Article Section -->
    <article
      class="flex flex-col text-base font-bold leading-7 text-gray-800 rounded-none max-w-[765px] mt-10 mx-auto mb-24"
    >
      <h1
        class="self-start -mt-3 text-5xl tracking-tighter leading-none max-md:w-full max-md:text-4xl"
      >
        Lorem ipsum dolor sit amet
      </h1>
      <p class="mt-8 text-neutral-600 max-md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
        viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
        Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus
        mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
        Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi
        morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla
        aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
        lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce
        ut placerat orci nulla. Neque convallis a cras semper auctor neque vitae
        tempus quam.
      </p>
      <h2
        class="self-start mt-8 text-4xl tracking-tighter leading-10 max-md:w-full"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </h2>
      <p class="mt-6 text-neutral-600 max-md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non blandit massa
        enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
        adipiscing at in tellus. Sociis natoque penatibus et magnis dis
        parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
        egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
        quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem
        sed risus ultricies tristique nulla aliquet enim. Volutpat blandit
        aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
        suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
        convallis a cras semper auctor neque vitae tempus quam.<br /><br />Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
        Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
        at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
        Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
        egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet
        nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies
        tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit.
        Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida
        dictum fusce ut placerat orci nulla. Neque convallis a cras semper
        auctor neque vitae tempus quam.
      </p>
    </article>
  </MainLayout>
</template>

<style scoped>
/* Menambahkan pembatas untuk tampilan di builder */
.builder-component {
  max-width: none !important;
}
</style>
