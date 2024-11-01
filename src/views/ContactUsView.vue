<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>
<template>
  <MainLayout>
    <main class="flex overflow-hidden flex-col items-center bg-white">
      <section class="flex flex-col items-center mt-32 max-md:mt-10">
        <h1
          class="text-base font-black leading-none text-center text-gray-800 uppercase tracking-[3px]"
        >
          Contact us
        </h1>
        <h2
          class="mt-3 text-5xl font-bold tracking-tighter leading-none text-center text-gray-800 max-md:max-w-full max-md:text-4xl"
        >
          Let's Start a Conversation
        </h2>
        <p
          class="mt-6 text-base leading-7 text-center text-zinc-500 w-[768px] max-md:max-w-full"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </section>

      <section
        class="px-16 py-12 mt-16 max-w-full bg-amber-300 w-[768px] max-md:px-5 max-md:mt-10"
      >
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10"
            >
              <h3 class="text-sm leading-none opacity-60">Working hours</h3>
              <hr
                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
              />
              <p class="mt-4 font-bold">Monday To Friday</p>
              <p class="font-bold">9:00 AM to 8:00 PM</p>
              <p class="text-base leading-7 opacity-60">
                Our Support Team is available 24/7
              </p>
            </div>
          </article>

          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start text-neutral-600 max-md:mt-10"
            >
              <h3 class="text-sm leading-none opacity-60">Contact Us</h3>
              <hr
                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600"
              />
              <a
                href="tel:02079932905"
                class="mt-4 text-xl font-bold leading-relaxed hover:text-neutral-800"
                >020 7993 2905</a
              >
              <a
                href="mailto:hello@finsweet.com"
                class="text-base leading-7 opacity-60 hover:opacity-100"
                >hello@finsweet.com</a
              >
            </div>
          </article>
        </div>
      </section>

      <form
        class="flex flex-col w-[768px] max-w-full mt-8 gap-4 mb-24"
        @submit.prevent="handleSubmit"
      >
        <label for="fullName" class="sr-only">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          required
          class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
        />

        <label for="email" class="sr-only">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          class="gap-2.5 self-stretch p-6 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5"
        />

        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex-1 min-w-[240px]">
            <label for="province" class="sr-only">Province</label>
            <select
              id="province"
              name="province"
              required
              class="w-full p-6 text-base leading-7 text-gray-800 border border-solid border-zinc-500 border-opacity-50 appearance-none bg-white"
            >
              <option value="">Province</option>
            </select>
          </div>

          <div class="flex-1 min-w-[240px]">
            <label for="city" class="sr-only">City</label>
            <select
              id="city"
              name="city"
              required
              class="w-full p-6 text-base leading-7 text-gray-800 border border-solid border-zinc-500 border-opacity-50 appearance-none bg-white"
            >
              <option value="">City</option>
            </select>
          </div>
        </div>

        <label for="message" class="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          class="gap-2.5 px-6 pt-6 pb-24 text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5"
        ></textarea>

        <button
          type="submit"
          class="px-16 py-4 text-2xl font-bold leading-none text-gray-800 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 max-md:px-5"
        >
          Send Message
        </button>
      </form>
    </main>
  </MainLayout>
</template>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1em;
}
</style>
