<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main
      class="flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full"
    >
      <section class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
        <div class="max-w-full w-[952px]">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="@/assets/images/misc/kacamata.jpg"
                alt="Author's portrait"
                class="object-contain grow w-full aspect-[0.85] max-md:mt-8"
              />
            </div>
            <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                <h1
                  class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]"
                >
                  Hey there, I'm Andrew Jonhson and welcome to my Blog
                </h1>
                <p
                  class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                <div class="flex gap-3 pt-5">
                  <a href="#">
                    <img
                      src="@/assets/images/logo/facebook.png"
                      alt=""
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="@/assets/images/logo/twitter.png"
                      alt=""
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="@/assets/images/logo/instagram.png"
                      alt=""
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="@/assets/images/logo/linkedin.png"
                      alt=""
                      class="hover:opacity-75 transition duration-150 ease-in-out"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/254da3e5775e4a90a2e491dc80c9ed63/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?apiKey=254da3e5775e4a90a2e491dc80c9ed63&"
          alt="Decorative image"
          class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full"
        />
      </section>
    </main>
    <main
      class="flex flex-col items-center px-20 bg-white pt-32 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full"
    >
      <section
        class="flex flex-col color-white self-center mb-32 w-full max-w-screen-lg max-md:max-w-full"
      >
        <h2
          class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl"
        >
          My Posts
        </h2>
        <div class="mt-16 max-md:mt-10 max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/254da3e5775e4a90a2e491dc80c9ed63/063e683dcfd2627e2e12e5b8e8f2938873e1fb36c6628e6b054c6bf1d7c4465c?apiKey=254da3e5775e4a90a2e491dc80c9ed63&"
                  alt="Blog post image 1"
                  class="object-contain w-full aspect-[1.29]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/254da3e5775e4a90a2e491dc80c9ed63/b86110c782542f99d213ae484a5155d5c646079dc9465d48342d41a1f2b7b1ba?apiKey=254da3e5775e4a90a2e491dc80c9ed63&"
                  alt="Blog post image 2"
                  class="object-contain mt-16 w-full aspect-[1.29] max-md:mt-10"
                />
              </div>
            </div>
            <div class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div
                class="flex flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full"
              >
                <span class="self-start uppercase tracking-[3px]"
                  >BUSINESS</span
                >
                <h3
                  class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
                >
                  Font sizes in UI design: The complete guide to follow
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <span
                  class="self-start mt-44 uppercase tracking-[3px] max-md:mt-10"
                  >ECONOMY</span
                >
                <h3
                  class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
                >
                  How to build rapport with your web design clients
                </h3>
                <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
