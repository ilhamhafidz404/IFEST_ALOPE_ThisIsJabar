<script setup>
import { useRoute, useRouter } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";

const location = useRoute();
const router = useRouter();
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <nav
    class="fixed flex left-0 right-0 justify-between py-7 duration-300 xl:px-20 md:px-10 px-5 z-20 bg-[#34e0a1]"
  >
    <router-link to="/" class="flex items-center gap-5">
      <span
        class="bg-white w-[40px] h-[40px] md:flex hidden items-center justify-center rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[50px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </span>
      <h1 class="font-bold text-white">INI JABAR</h1>
    </router-link>
    <div class="flex md:gap-10 gap-5">
      <button
        @click="toggleDark()"
        class="bg-white hover:bg-white/90 md:p-2 p-1 rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="bg-white hover:bg-white/90 md:p-2 p-1 rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center"
        @click="toggleSearch()"
      >
        <magnifyingGlassIcon myClass="md:w-7 w-4" />
      </button>
      <button
        class="bg-white hover:bg-white/90 md:p-2 p-1 md:w-auto md:h-auto w-[30px] h-[30px] flex items-center justify-center"
        @click="toggleSidebar()"
      >
        <bars3Icon myClass="md:w-7 w-4" />
      </button>
    </div>
  </nav>

  <aside
    class="fixed xl:w-1/3 md:w-2/3 w-screen dark:bg-slate-900 bg-white h-screen -right-[1000px] top-0 z-20 shadow transition-all duration-300 dark:text-gray-100"
  >
    <button
      class="bg-[#34e0a1] hover:bg-[#34e0a1]/90 md:p-2 p-1 md:w-auto md:h-auto w-[30px] h-[30px] flex items-center justify-center absolute right-0 xl:mr-20 md:mr-10 mr-5 mt-5"
      @click="toggleSidebar()"
    >
      <bars3BottomRightIcon myClass="w-7" />
    </button>

    <ul
      class="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2"
    >
      <li class="mb-5">
        <router-link
          to="/"
          class="text-2xl hover:text-3xl duration-300 hover:text-[#34e0a1]"
          >Beranda</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/search"
          class="text-2xl hover:text-3xl duration-300 hover:text-[#34e0a1]"
          >Search</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/news"
          class="text-2xl hover:text-3xl duration-300 hover:text-[#34e0a1] whitespace-nowrap"
          >Informasi Destinasi</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/map"
          class="text-2xl hover:text-3xl duration-300 hover:text-[#34e0a1]"
          >Peta Interaktif</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/subscription"
          class="text-2xl hover:text-3xl duration-300 hover:text-[#34e0a1]"
          >Subscription</router-link
        >
      </li>
    </ul>
  </aside>

  <section
    id="searchModal"
    class="fixed inset-0 z-20 hidden items-center justify-center bg-green-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100"
  >
    <div class="bg-white rounded p-5 shadow md:w-2/3 w-full md:mx-0 mx-5 z-50">
      <div class="flex items-center gap-5">
        <magnifyingGlassIcon myClass="w-6" />
        <input
          type="text"
          placeholder="Cari sesuatu..."
          class="py-2 focus:outline-none w-full"
          @keypress.enter="redirectToSearch()"
        />
        <button @click="toggleSearch()">
          <xMarkIcon myClass="w-6" />
        </button>
      </div>
      <hr class="my-5" />
      <div class="flex items-center flex-wrap gap-5">
        <h4 class="font-bold mr-5 flex items-center gap-2">
          <solidTagIcon myClass="w-5 text-[#34e0a1]" /> Tag :
        </h4>
        <span
          @click="redirectToSearch()"
          class="text-sm font-semibold bg-[#34e0a1]/40 hover:bg-[#34e0a1] cursor-pointer px-5 py-2 rounded-full"
        >
          <span class="md:inline hidden">Destinasi</span>
          Favorit
        </span>
        <span
          @click="redirectToSearch()"
          class="text-sm font-semibold bg-[#34e0a1]/40 hover:bg-[#34e0a1] cursor-pointer px-5 py-2 rounded-full"
        >
          Kuliner <span class="md:inline hidden">Terbaik</span>
        </span>
        <span
          @click="redirectToSearch()"
          class="text-sm font-semibold bg-[#34e0a1]/40 hover:bg-[#34e0a1] cursor-pointer px-5 py-2 rounded-full"
        >
          <span class="md:inline hidden">Kekayaan</span> Tradisi
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";

// icons
import bars3Icon from "./icons/bars3.vue";
import bars3BottomRightIcon from "./icons/bars3BottomRight.vue";
import magnifyingGlassIcon from "./icons/magnifyingGlass.vue";
import xMarkIcon from "./icons/xMark.vue";
import solidTagIcon from "@/components/icons/solidTag.vue";

export default {
  components: {
    bars3Icon,
    bars3BottomRightIcon,
    magnifyingGlassIcon,
    xMarkIcon,
    solidTagIcon,
  },
  methods: {
    toggleSidebar() {
      const aside = document.querySelector("aside");
      aside.classList.toggle("-right-[1000px]");
      aside.classList.toggle("right-0");
    },
    toggleSearch() {
      const searchModal = document.querySelector("#searchModal");
      searchModal.classList.toggle("hidden");
      searchModal.classList.toggle("flex");
    },
    redirectToSearch() {
      router.push({ path: "/search" });
    },
  },
};
</script>

<style>
</style>