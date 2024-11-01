<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import JoinContent from '@/components/JoinContent.vue';
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden">
      <!-- Hero -->
      <section class="h-[720px] bg-[url('@/assets/images/misc/cover.png')] bg-cover">
        <div class="w-full h-full flex flex-col gap-5 px-[80px] pt-[128px] bg-x-black bg-opacity-40">
          <h5 class="text-white text-start font-semibold tracking-[3px]">POSTED ON <span class="font-black">STARTUP</span></h5>
          <h1 class="w-[80%] text-white text-[56px] font-bold tracking-[-2px] leading-[64px]">Step-by-step guide to choosing great font pairs</h1>
          <p class="text-white leading-[28px]">By <span class="text-x-blue">James West</span> &nbsp;|&nbsp; May 23, 2022</p>
          <p class="w-[52%] text-white leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="blog/post" class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
            Read More >
          </a>
        </div>
      </section>

      <!-- Featured Post -->
      <section class="bg-white px-[80px] pt-[128px] pb-[40px] flex justify-between gap-8">
        <div class="h-[804px] flex flex-col gap-4">
          <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">Featured Post</h2>
          <div class="w-full flex-grow border p-8">
            <img class="w-full object-cover mb-8" src="@/assets/images/misc/white-building.png" alt="White Building">
            <div class="w-full flex flex-col gap-4">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; May 23, 2022</label>
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p class="text-x-mediumgrey w-[551px] leading-[28px] mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <a href="#" class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
                Read More >
              </a>
            </div>
          </div>
        </div>
        <div class="h-[804px] flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
            <a href="#" class="text-x-yellow leading-[28px]">View All</a>
          </div>
          <div>
            <a href="/blog" class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="/blog" class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="/blog" class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
            <a href="/blog" class="w-[517px] h-[181px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <label class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;&nbsp; Aug 23, 2021</label>
              <h4 class="text-x-black text-2xl font-bold leading-[32px] w-[369px]">8 Figma design systems that you can download for free today.</h4>
            </a>
          </div>
        </div>
      </section>

      <!-- About us & Our mission -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="w-full flex items-center">
          <span class="bg-white w-[15%] h-[23px]"></span>
          <span class="bg-x-yellow w-[60%] h-[23px]"></span>
          <span class="bg-x-blue w-[25%] h-[23px]"></span>
        </div>
        <div class="bg-x-lightgrey p-[80px] flex justify-between gap-[80px]">
          <div class="w-[50%] flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">ABOUT US</h5>
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">We are a community of content writers who share their learnings</h2>
            <p class="text-x-mediumgrey leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="text-x-yellow text-[18px] font-bold leading-[32px] hover:text-x-black transition duration-200 ease-in-out">Read More ></a>
          </div>
          <div class="w-[50%] flex flex-col gap-4">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">OUR MISSION</h5>
            <h3 class="text-x-black text-3xl font-bold tracking-[-1px] leading-[40px]">Creating valuable content for creatives all around the world</h3>
            <p class="text-x-mediumgrey leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      <!-- Category -->
      <section class="flex flex-col gap-8 bg-white px-[80px] py-[40px]">
        <h2 class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]">Choose A Category</h2>
        <div class="flex items-center justify-between gap-6">
          <a href="/category" class="w-[296px] h-[228px] flex flex-col gap-4 border border-x-mediumgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
            <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
              <img src="@/assets/images/logo/business.png" alt="Business">
            </div>
            <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">Business</h3>
            <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </a>
          <a href="/category" class="w-[296px] h-[228px] flex flex-col gap-4 border border-x-mediumgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
            <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
              <img src="@/assets/images/logo/startup.png" alt="Business">
            </div>
            <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]  group-hover:text-white transition duration-200 ease-in-out">Startup</h3>
            <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </a>
          <a href="/category" class="w-[296px] h-[228px] flex flex-col gap-4 border border-x-mediumgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
            <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
              <img src="@/assets/images/logo/economy.png" alt="Economy">
            </div>
            <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">Economy</h3>
            <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </a>
          <a href="/category" class="w-[296px] h-[228px] flex flex-col gap-4 border border-x-mediumgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
            <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
              <img src="@/assets/images/logo/technology.png" alt="Technology">
            </div>
            <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">Technology</h3>
            <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </a>
        </div>
      </section>

      <!-- Special Post -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="flex items-center relative">
          <img src="@/assets/images/misc/people.png" alt="People">
          <div class="w-[706px] bg-white p-[80px] flex flex-col gap-4 absolute right-0 bottom-0">
            <h5 class="text-x-black text-start font-semibold tracking-[3px] leading-[20px]">WHY WE STARTED</h5>
            <h1 class="text-x-black text-5xl font-bold leading-[64px] tracking-[-2px]">It started out as a simple idea and evolved into our passion</h1>
            <p class="text-x-mediumgrey leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#" class="w-[269px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
              Discover our story >
            </a>
          </div>
        </div>
      </section>

      <!-- List Author -->
      <section class="flex flex-col gap-8 bg-white px-[80px] py-[40px]">
        <h2 class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]">List of Authors</h2>
        <div class="flex items-center justify-between gap-6">
          <a href="/author" class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author-1.png" alt="Author 1" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Floyd Miles</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <ul class="flex items-center gap-6">
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/facebook.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/twitter.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/instagram.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/linkedin.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
            </ul>
          </a>
          <a href="/author" class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author-2.png" alt="Author 2" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Dianne Russell</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <ul class="flex items-center gap-6">
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/facebook.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/twitter.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/instagram.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/linkedin.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
            </ul>
          </a>
          <a href="/author" class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author-3.png" alt="Author 3" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Jenny Wilson</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <ul class="flex items-center gap-6">
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/facebook.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/twitter.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/instagram.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/linkedin.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
            </ul>
          </a>
          <a href="/author" class="w-[296px] bg-x-lightgrey flex flex-col items-center justify-center gap-4 p-6 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author-4.png" alt="Author 4" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Lesly Alexander</h3>
              <p class="text-x-mediumgrey leading-[28px]">Content Writer @Company</p>
            </div>
            <ul class="flex items-center gap-6">
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/facebook.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/twitter.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/instagram.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="@/assets/images/logo/linkedin.png" alt="" class="hover:opacity-75 transition duration-150 ease-in-out">
                </a>
              </li>
            </ul>
          </a>
        </div>
      </section>

      <!-- Logo Component -->
      <section class="bg-white px-[94px] py-[40px]">
        <div class="flex items-center justify-between gap-8">
          <div class="flex flex-col justify-center">
            <p class="text-x-mediumgrey text-opacity-60 text-sm leading-[20px]">We are</p>
            <h4 class="text-x-mediumgrey text-xl font-bold leading-[32px]">Featured in</h4>
          </div>
          <img src="@/assets/images/logo/logoipsum-1.png" alt="Logoipsum 1">
          <img src="@/assets/images/logo/logoipsum-2.png" alt="Logoipsum 2">
          <img src="@/assets/images/logo/logoipsum-3.png" alt="Logoipsum 3">
          <img src="@/assets/images/logo/logoipsum-4.png" alt="Logoipsum 4">
          <img src="@/assets/images/logo/logoipsum-5.png" alt="Logoipsum 5">
        </div>
      </section>

      <!-- Testimoni -->
      <section class="bg-white px-[80px] py-[40px]">
        <div class="bg-x-lightyellow flex justify-between gap-[40px] p-[112px]">
          <div class="w-[40%] flex flex-col gap-4">
            <h5 class="text-x-black font-semibold leading-[20px] tracking-[3px]">TESTIMONIALS</h5>
            <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">What people say about our blog</h2>
            <p class="text-x-black leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div class="w-[60%] flex flex-col justify-between gap-[112px] ps-[80px] border-s border-x-mediumgrey border-opacity-40">
            <h4 class="text-x-black text-xl font-bold leading-[32px] pe-[56px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <div class="flex justify-between items-center">
              <div class="flex items-center justify-center gap-4">
                <img src="@/assets/images/misc/man-with-glasses.png" alt="Man with glasses">
                <div>
                  <h4 class="text-x-black text-xl font-bold leading-[32px]">Jonathan Vallen</h4>
                  <p class="text-x-mediumgrey leading-[28px]">New york, USA</p>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <JoinContent />
    </main>
  </MainLayout>
</template>
