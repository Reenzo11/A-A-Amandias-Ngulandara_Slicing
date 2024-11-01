<script setup lang="ts">
import JoinContent from '@/components/JoinContent.vue'
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
  <main class="w-full h-full overflow-x-hidden">
    <div class="pt-80 px-32 relative text-black">
      <div class="text-base absolute flex text-black z-10 left-32 -translate-y-56 translate-x-28">
        <div class="about-us bg-slate-100 p-16 max-w-[624px]">
          <p class="text-base tracking-wider">ABOUT US</p>
          <h3 class="text-4xl mt-4 font-bold">
            We are a team of content writers who share their learnings
          </h3>
        </div>
        <div class="about-us">
          <p class="text-base p-16 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <section
          class="flex relative flex-col items-start px-20 pt-64 max-w-full min-h-[444px] w-[1280px] max-md:px-5 max-md:pt-24"
        >
          <img
            src="@/assets/images/misc/people.png"
            alt="Background image"
            class="object-cover absolute inset-0 size-full"
          />
          <div class="flex relative flex-col max-w-full w-[862px]">
            <div
              class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5"
            >
              <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p
                      class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl"
                    >
                      12+
                    </p>
                    <p class="text-base leading-7">Blogs Published</p>
                  </div>
                </div>
                <div
                  class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p
                      class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl"
                    >
                      18K+
                    </p>
                    <p class="text-base leading-7">Views on Finsweet</p>
                  </div>
                </div>
                <div
                  class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"
                >
                  <div class="flex flex-col grow text-white max-md:mt-10">
                    <p
                      class="text-6xl font-bold tracking-tighter leading-none max-md:mr-2.5 max-md:text-4xl"
                    >
                      30K+
                    </p>
                    <p class="text-base leading-7">Total active Users</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap gap-px"></div>
          </div>
        </section>
        <div class="pt-32 px-[108px] pb-16 flex gap-x-8 bg-[#F4F0F8]">
          <div class="mission">
            <p class="text-base tracking-wider font-bold">OUR MISSION</p>
            <h3 class="mt-6 font-bold text-[28px]">
              Creating valuable content for creatives all around the world
            </h3>
            <p class="mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div class="mission">
            <p class="text-base tracking-wider font-bold">OUR MISSION</p>
            <h3 class="mt-6 font-bold text-[28px]">
              Creating valuable content for creatives all around the world
            </h3>
            <p class="mt-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
        <section
          class="mt-32 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full"
        >
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
              >
                <h2
                  class="self-start text-4xl tracking-tighter leading-none text-gray-800"
                >
                  Our team of creatives
                </h2>
                <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p class="mt-4 text-base leading-7 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat.
                </p>
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="@/assets/images/misc/tangan.jpg"
                alt="Our team of creatives"
                class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </section>
        <section
          class="mt-32 w-full max-w-[1207px] max-md:mt-10 max-md:max-w-full"
        >
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="@/assets/images/misc/tiga-orang.jpg"
                alt="Why we started this blog"
                class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:max-w-full"
              >
                <h2
                  class="self-start text-4xl tracking-tighter leading-none text-gray-800"
                >
                  Why we started this Blog
                </h2>
                <p
                  class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p class="mt-4 text-base leading-7 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- List Author -->
        <section class="flex flex-col gap-8 bg-white px-[6px] py-[40px]">
          <h2
            class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]"
          >
            List of Authors
          </h2>
          <div class="flex items-center justify-between gap-6">
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-1.png"
                  alt="Author 1"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Floyd Miles
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-2.png"
                  alt="Author 2"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Dianne Russell
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-3.png"
                  alt="Author 3"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Jenny Wilson
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-4.png"
                  alt="Author 4"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Lesly Alexander
                </h3>
                <p class="text-x-mediumgrey leading-[28px]">
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center justify-between gap-6">
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-5.jpg"
                  alt="Author 5"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Guy Hawkins
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-6.jpg"
                  alt="Author 6"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Eleanor Pena
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-7.png"
                  alt="Author 7"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Robert Fox
                </h3>
                <p
                  class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out"
                >
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
            <div
              class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out"
            >
              <a href="/author">
                <img
                  src="@/assets/images/misc/author-8.png"
                  alt="Author 8"
                  class="w-[128px] h-[128px]"
                />
              </a>
              <div class="flex flex-col items-center">
                <h3
                  class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]"
                >
                  Jacob Jones
                </h3>
                <p class="text-x-mediumgrey leading-[28px]">
                  Content Writer @Company
                </p>
              </div>
              <ul class="flex items-center gap-6">
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/facebook.png"
                      alt="Facebook"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/twitter.png"
                      alt="Twitter"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/instagram.png"
                      alt="Instagram"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
                <li>
                  <a href="#"
                    ><img
                      src="@/assets/images/logo/linkedin.png"
                      alt="LinkedIn"
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <JoinContent />
    </main>
</MainLayout>
</template>
