<template>
  <section class="text-white">
    <div class="flex justify-between">
      <h1 class="font-bold text-2xl mb-7">Kota Populer di Jawa Barat</h1>
      <div>
        <router-link
          to="/activity"
          class="text-[#34e0a1] font-semibold px-5 py-2 text-sm rounded mx-auto flex items-center gap-3"
        >
          Lihat Semua
          <span class="lg:inline hidden lg:-ml-2">Aktifitas Seru</span>
          <chevronRightIcon myClass="w-6" />
        </router-link>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Bandung</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Bogor</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Lembang</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Lembang</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
    </div>
    <!-- <div
      class="mt-16 ml-64 bg-[#34e0a1] h-[175px] w-[850px] rounded-md flex justify-start items-center"
    >
      <img
        src="./../assets/images/activities/skate.jpg"
        alt=""
        class="h-[150px] rounded-lg ml-3"
      />
      <div class="ml-7">
        <h1 class="font-bold text-xl">Hotel Terbaik dari Travellers</h1>
        <br />
        <p>1% teratas kami, yang didukung ulasan sungguhan.</p>
        <button
          class="bg-[#34e0a1]/20 px-5 py-1 rounded-full font-semibold border-2 hover:border-[#8734e0] border-[#34e0a1]/20 xl:block hidden"
        >
          Olahraga
        </button>
      </div>
    </div> -->

    <div class="grid grid-cols-4 mt-16 gap-10">
      <div class="col-span-2">
        <div
          class="bg-[#34e0a1] h-[175px] w-[670px] rounded-md flex justify-start items-center colspan-2"
        >
          <img
            src="./../assets/images/activities/skate.jpg"
            alt=""
            class="h-[150px] rounded-lg ml-3"
          />
          <div class="ml-7">
            <h1 class="font-bold text-xl">Hotel Terbaik dari Travellers</h1>
            <br />
            <p>1% teratas kami, yang didukung ulasan sungguhan.</p>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div
          class="bg-[#34e0a1] h-[175px] w-[660px] rounded-md flex justify-start items-center colspan-2"
        >
          <img
            src="./../assets/images/activities/skate.jpg"
            alt=""
            class="h-[150px] rounded-lg ml-3"
          />
          <div class="ml-7">
            <h1 class="font-bold text-xl">Hotel Terbaik dari Travellers</h1>
            <br />
            <p>1% teratas kami, yang didukung ulasan sungguhan.</p>
          </div>
        </div>
      </div>
    </div>

    <h1 class="font-bold text-2xl mb-7 mt-16">Makanan Populer di Jawa Barat</h1>
    <div class="grid grid-cols-4 gap-4">
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Karedok</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Kupat Tahu</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Batagor</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
      <div class="relative">
        <img
          src="./../assets/images/activities/sunset.jpg"
          alt=""
          class="rounded-lg"
        />
        <div
          class="absolute flex items-center justify-center top-[10px] left-[285px] bg-white h-[35px] w-[35px] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div class="ml-2">
          <p class="text-lg mb-2 mt-2">Lembang</p>
          <p class="text-sm">Jawa, Indonesia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chevronRightIcon from "./icons/chevronRight.vue";
export default {
  components: { chevronRightIcon },
};
</script>
