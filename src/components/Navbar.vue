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
    class="fixed flex left-0 right-0 justify-between py-7 duration-300 xl:px-20 md:px-10 px-5 z-40 dark:text-white"
  >
    <router-link to="/" class="flex items-center gap-5">
      <img
        src="../assets/images/icon/logo.png"
        alt="logo"
        class="w-[30px] -mt-3"
      />
      <h1 class="font-bold">INI JABAR</h1>
    </router-link>
    <div class="flex md:gap-5 gap-3">
      <button
        @click="changeLanguage()"
        class="border-2 border-[#34e0a1] rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center"
      >
        <img
          v-if="lang == 'id'"
          src="./../assets/images/icon/indonesia.png"
          alt=""
        />
        <img v-else src="./../assets/images/icon/united-kingdom.png" alt="" />
      </button>
      <button
        @click="toggleDark()"
        class="bg-[#34e0a1] hover:bg-[#34e0a1]/90 md:p-2 p-1 rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center dark:hidden"
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
        @click="toggleDark()"
        class="bg-[#34e0a1] hover:bg-[#34e0a1]/90 md:p-2 p-1 rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] dark:flex hidden items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
          />
        </svg>
      </button>
      <button
        class="bg-[#34e0a1] hover:bg-[#34e0a1]/90 md:p-2 p-1 rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] flex items-center justify-center md:mr-10 mr-3"
        @click="toggleSearch()"
      >
        <magnifyingGlassIcon myClass="md:w-7 w-4" />
      </button>
      <button
        class="bg-[#34e0a1] hover:bg-[#34e0a1]/90 md:p-2 p-1 md:w-auto md:h-auto w-[30px] h-[30px] flex items-center justify-center"
        @click="toggleSidebar()"
      >
        <bars3Icon myClass="md:w-7 w-4" />
      </button>
    </div>
  </nav>

  <aside
    class="fixed xl:w-1/3 md:w-2/3 w-screen bg-white dark:bg-slate-900 dark:text-gray-100 h-screen -right-[1000px] top-0 z-50 shadow transition-all duration-300"
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
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Beranda</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/search"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Search</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/activity"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Aktivitas</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/list"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Destinasi Wisata</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/news"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1] whitespace-nowrap"
          >Informasi Destinasi</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/map"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Peta Interaktif</router-link
        >
      </li>
      <li class="mb-5">
        <router-link
          to="/subscription"
          class="text-xl hover:text-2xl duration-300 hover:text-[#34e0a1]"
          >Subscription</router-link
        >
      </li>
    </ul>
  </aside>

  <section
    id="searchModal"
    class="fixed inset-0 z-20 hidden items-center justify-center bg-green-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 dark:border-slate-900"
  >
    <div
      class="bg-white dark:bg-slate-900 dark:text-gray-100 rounded p-5 shadow md:w-2/3 w-full md:mx-0 mx-5 z-50"
    >
      <div class="flex items-center gap-5">
        <magnifyingGlassIcon myClass="w-6" />
        <input
          type="text"
          placeholder="Cari sesuatu..."
          class="py-2 focus:outline-none w-full dark:bg-slate-900 dark:text-gray-100"
          @keypress.enter="redirectToSearch()"
        />
        <button @click="toggleSearch()">
          <xMarkIcon myClass="w-6" />
        </button>
      </div>
      <hr class="my-5 dark:border-slate-700" />
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
  data() {
    return {
      lang: "id",
    };
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
    changeLanguage() {
      if (this.lang == "id") {
        this.lang = "en";
      } else {
        this.lang = "id";
      }

      this.$emit("changeLanguageRequest");
    },
  },
};
</script>

<style></style>
