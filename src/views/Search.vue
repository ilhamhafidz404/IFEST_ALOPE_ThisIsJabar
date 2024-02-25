<template>
  <Navbar />

  <header class="w-full h-[400px] relative">
    <span class="absolute inset-0 bg-black/30"></span>
    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="header"
      class="w-full h-full object-cover object-center"
    />
    <section
      class="absolute bottom-16 xl:w-1/2 md:w-3/4 w-full left-1/2 -translate-x-1/2 md:p-0 p-5"
    >
      <h2
        class="md:text-4xl text-2xl text-center font-semibold mb-5 text-white"
      >
        Cari Destinasi Pilihan
      </h2>
      <div
        class="bg-white dark:bg-slate-800 flex items-center gap-5 xl:py-3 xl:px-5 py-2 md:px-3 px-2 rounded shadow"
      >
        <magnifyingGlassIcon myClass="w-6" />
        <input
          type="text"
          placeholder="Cari berdasarkan kota..."
          class="py-2 focus:outline-none w-full md:text-base text-xs dark:bg-slate-800 dark:text-gray-200"
          @keypress.enter="redirectToSearch()"
        />
        <button
          class="bg-[#48e3aa] px-5 py-3 rounded text-white hover:bg-[#48e3aa]/90 md:text-base text-xs"
        >
          Cari
        </button>
      </div>
    </section>
  </header>

  <main class="mt-10 grid xl:grid-cols-4 gap-10 xl:px-20 md:px-10 px-5 mb-20">
    <div class="relative xl:order-1 order-2">
      <div
        class="border-2 border-[#34e0a1] bg-[#34e0a1]/20 pl-5 pr-10 py-7 rounded sticky top-20 dark:text-gray-200"
      >
        <div>
          <h3 class="font-bold text-xl flex gap-3 mb-4 dark:text-gray-100">
            <span
              class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#48e3aa] text-white"
            >
              <solidTagIcon myClass="w-6" />
            </span>
            Jenis Kategori
          </h3>
          <ul class="ml-10">
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Budaya</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Kuliner</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Alam</router-link
              >
            </li>
          </ul>
        </div>

        <div class="mt-10">
          <h3 class="font-bold text-xl flex gap-3 mb-4 dark:text-gray-100">
            <span
              class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#48e3aa] text-white"
            >
              <solidMapIcon myClass="w-6" />
            </span>
            Lokasi
          </h3>
          <ul class="ml-10">
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Perkotan</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Pedesaan</router-link
              >
            </li>
          </ul>
        </div>

        <div class="mt-10">
          <h3 class="font-bold text-xl flex gap-3 mb-4 dark:text-gray-100">
            <span
              class="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#48e3aa] text-white"
            >
              <solidUserGroupIcon myClass="w-6" />
            </span>
            Cocok Untuk
          </h3>
          <ul class="ml-10">
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Libur Keluarga</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Couple</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Kumpul Teman</router-link
              >
            </li>
            <li class="mb-1">
              <router-link to="/search" class="hover:font-semibold"
                >Refreshing</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="xl:col-span-3 xl:order-2 order-1">
      <div class="mt-3 gap-3 md:flex items-center dark:text-gray-200">
        <p class="mr-5 text-sm">
          <span class="font-semibold text-xl">542</span> Destinasi terpilih
        </p>
        <div class="flex md:gap-5 gap-3 md:mt-0 mt-2">
          <span
            class="bg-gray-300 dark:bg-slate-700 dark:text-gray-200 md:px-5 px-3 py-2 rounded-full text-black md:text-sm text-xs inline-flex md:gap-3 gap-1 items-center"
            >Budaya
            <xMarkIcon myClass="w-4 cursor-pointer hover:text-red-500" />
          </span>
          <span
            class="bg-gray-300 dark:bg-slate-700 dark:text-gray-200 md:px-5 px-3 py-2 rounded-full text-black md:text-sm text-xs inline-flex md:gap-3 gap-1 items-center"
            >Pedesaan
            <xMarkIcon myClass="w-4 cursor-pointer hover:text-red-500" />
          </span>
          <span
            class="bg-gray-300 dark:bg-slate-700 dark:text-gray-200 md:px-5 px-3 py-2 rounded-full text-black md:text-sm text-xs inline-flex md:gap-3 gap-1 items-center"
            >Keluarga
            <xMarkIcon myClass="w-4 cursor-pointer hover:text-red-500" />
          </span>
        </div>
      </div>

      <div
        class="flex md:flex-row flex-col items-center gap-5 mt-10 dark:text-gray-100"
      >
        <div>
          <a href="">
            <img
              src="./../assets/img/a1.jpg"
              class="md:w-[350px] w-full rounded"
            />
          </a>
        </div>
        <div class="text-box">
          <h3 class="text-xl font-semibold">Waduk Darma</h3>
          <div class="flex mb-4">
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
          </div>
          <span
            class="text-xs bg-gray-200 dark:bg-slate-700 px-5 py-1 rounded-full"
          >
            Taman Air
          </span>
          <p class="flex mt-5 gap-2 text-xs items-center">
            <calendarDaysIcon myClass="w-5" /> Sekarang Buka
          </p>
          <p class="flex mt-2 gap-2 text-xs items-center">
            <solidMapPinIcon myClass="w-5" /> Desa Jagara, Kecamatan Darma,
            Kabupaten Kuningan
          </p>

          <div class="flex gap-3 md:mt-10 mt-5">
            <button
              class="xl:px-10 px-5 py-2 rounded bg-[#34e0a1] border border-[#34e0a1] hover:bg-[#34e0a1]/80 text-white xl:text-sm text-xs"
            >
              Lihat Detail
            </button>
            <button
              class="xl:px-10 px-5 py-2 rounded border border-[#34e0a1] text-[#34e0a1] hover:bg-[#34e0a1] hover:text-white xl:text-sm text-xs"
            >
              Lihat Lokasi Map
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex md:flex-row flex-col items-center gap-5 mt-10 dark:text-gray-100"
      >
        <div>
          <a href="">
            <img
              src="./../assets/img/a1.jpg"
              class="md:w-[350px] w-full rounded"
            />
          </a>
        </div>
        <div class="text-box">
          <h3 class="text-xl font-semibold">Waduk Darma</h3>
          <div class="flex mb-4">
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
          </div>
          <span
            class="text-xs bg-gray-200 dark:bg-slate-700 px-5 py-1 rounded-full"
          >
            Taman Air
          </span>
          <p class="flex mt-5 gap-2 text-xs items-center">
            <calendarDaysIcon myClass="w-5" /> Sekarang Buka
          </p>
          <p class="flex mt-2 gap-2 text-xs items-center">
            <solidMapPinIcon myClass="w-5" /> Desa Jagara, Kecamatan Darma,
            Kabupaten Kuningan
          </p>

          <div class="flex gap-3 md:mt-10 mt-5">
            <button
              class="xl:px-10 px-5 py-2 rounded bg-[#34e0a1] border border-[#34e0a1] hover:bg-[#34e0a1]/80 text-white xl:text-sm text-xs"
            >
              Lihat Detail
            </button>
            <button
              class="xl:px-10 px-5 py-2 rounded border border-[#34e0a1] text-[#34e0a1] hover:bg-[#34e0a1] hover:text-white xl:text-sm text-xs"
            >
              Lihat Lokasi Map
            </button>
          </div>
        </div>
      </div>
      <div
        class="flex md:flex-row flex-col items-center gap-5 mt-10 dark:text-gray-100"
      >
        <div>
          <a href="">
            <img
              src="./../assets/img/a1.jpg"
              class="md:w-[350px] w-full rounded"
            />
          </a>
        </div>
        <div class="text-box">
          <h3 class="text-xl font-semibold">Waduk Darma</h3>
          <div class="flex mb-4">
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
            <solidStarIcon myClass="w-4 text-yellow-500" />
          </div>
          <span
            class="text-xs bg-gray-200 dark:bg-slate-700 px-5 py-1 rounded-full"
          >
            Taman Air
          </span>
          <p class="flex mt-5 gap-2 text-xs items-center">
            <calendarDaysIcon myClass="w-5" /> Sekarang Buka
          </p>
          <p class="flex mt-2 gap-2 text-xs items-center">
            <solidMapPinIcon myClass="w-5" /> Desa Jagara, Kecamatan Darma,
            Kabupaten Kuningan
          </p>

          <div class="flex gap-3 md:mt-10 mt-5">
            <button
              class="xl:px-10 px-5 py-2 rounded bg-[#34e0a1] border border-[#34e0a1] hover:bg-[#34e0a1]/80 text-white xl:text-sm text-xs"
            >
              Lihat Detail
            </button>
            <button
              class="xl:px-10 px-5 py-2 rounded border border-[#34e0a1] text-[#34e0a1] hover:bg-[#34e0a1] hover:text-white xl:text-sm text-xs"
            >
              Lihat Lokasi Map
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";
import TopFooter from "./../components/TopFooter.vue";
import Footer from "./../components/Footer.vue";

// icons
import solidStarIcon from "@/components/icons/solidStar.vue";
import calendarDaysIcon from "@/components/icons/calendarDays.vue";
import solidTagIcon from "@/components/icons/solidTag.vue";
import solidMapPinIcon from "@/components/icons/solidMapPin.vue";
import solidMapIcon from "@/components/icons/solidMap.vue";
import solidUserGroupIcon from "@/components/icons/solidUserGroup.vue";
import xMarkIcon from "@/components/icons/xMark.vue";

export default {
  components: {
    Navbar,
    TopFooter,
    Footer,

    //
    solidStarIcon,
    calendarDaysIcon,
    solidTagIcon,
    solidMapPinIcon,
    solidMapIcon,
    solidUserGroupIcon,
    xMarkIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>