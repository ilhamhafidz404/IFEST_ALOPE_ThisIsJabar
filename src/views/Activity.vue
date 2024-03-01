<template>
  <Navbar />

  <header class="w-full h-[600px] relative">
    <span class="absolute inset-0 bg-white/10"></span>
    <span class="bg-slate-900/40 absolute inset-0 dark:block hidden"></span>
    <img
      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="header"
      class="w-full h-full object-cover object-center"
    />
    <section
      class="absolute top-1/2 xl:w-1/2 md:w-3/4 w-full md:p-0 px-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="bg-white dark:bg-slate-800 dark:text-gray-200 flex items-center gap-5 md:py-3 md:px-5 px-3 py-2 rounded shadow"
      >
        <magnifyingGlassIcon myClass="w-6" />
        <input
          type="text"
          placeholder="Cari berdasarkan kota..."
          class="py-2 focus:outline-none w-full dark:bg-slate-800 dark:text-gray-200 md:text-sm text-xs"
          @keypress.enter="redirectToSearch()"
        />
        <button
          class="bg-[#48e3aa] px-5 py-3 rounded text-white hover:bg-[#48e3aa]/90 md:text-sm text-xs"
        >
          Cari
        </button>
      </div>
      <div class="mt-3 flex xl:justify-start justify-center gap-3">
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white"
          >Bandung</span
        >
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white"
          >Depok</span
        >
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white"
          >Cirebon</span
        >
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white md:inline-block hidden"
          >Kuningan</span
        >
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white md:inline-block hidden"
          >Tasikmalaya</span
        >
        <span
          class="bg-white dark:bg-slate-800 dark:text-gray-200 px-5 py-2 rounded-full text-xs border border-[#48e3aa] cursor-pointer hover:bg-[#48e3aa] dark:hover:hover:bg-[#48e3aa] hover:text-white xl:inline-block hidden"
          >Purwakarta</span
        >
      </div>
    </section>

    <section
      class="absolute xl:bottom-10 bottom-5 xl:left-20 md:left-10 left-5 text-white"
    >
      <div class="md:flex items-center gap-2">
        <p class="text-sm md:inline-block block">Lokasimu saat ini:</p>
        <span class="flex gap-2">
          <solidMapPinIcon myClass="w-6" />
          <p class="font-semibold">Darma, Kuningan</p>
        </span>
      </div>
      <div class="mt-5 xl:inline-block hidden">
        <router-link
          to="/"
          class="bg-[#48e3aa] py-2 pl-0 hover:pl-5 pr-5 rounded-full text-sm flex gap-4 justify-center items-center w-[250px] duration-300"
        >
          Lihat aktivitas terdekat
          <arrowRightIcon class="w-6" />
        </router-link>
      </div>
    </section>
  </header>

  <main class="xl:px-20 md:px-10 px-5 mt-10 dark:text-gray-200">
    <section class="md:flex gap-20 items-center">
      <div>
        <h1
          class="font-waterbrush md:text-5xl text-4xl md:text-left text-center"
        >
          Explorasi
        </h1>
        <h2 class="md:text-3xl text-2xl md:text-left text-center">
          Aktivitas Seru
        </h2>
      </div>
      <div>
        <p
          class="text-gray-600 dark:text-gray-300 md:text-base text-xs md:text-left text-center"
        >
          Apa yang banyak dilakukan oleh orang lain di Jawa Barat? <br />
          apa yang sedang tren dan jadi perbincangan hangat?
        </p>
      </div>
    </section>

    <section
      class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 md:gap-7 gap-3 mb-20"
    >
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1544364493-4ff9efeabce3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider"
        >
          Atraksi
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Main Anak
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Alam
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Live Musik
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1513279922550-250c2129b13a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider"
        >
          Couple
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1707343848655-a196bfe88861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Menyelam
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Ngopi
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1622123256821-845ffeff1f09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Sunmori
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider"
        >
          Pantai
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1562552052-4e9f2d8e8a4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Olahraga
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider"
        >
          Pantai
        </h5>
      </div>
      <div
        class="w-full h-[130px] rounded-md overflow-hidden relative after:content-[''] after:absolute after:inset-0 after:bg-[#48e3aa]/40 dark:after:bg-slate-800/60 cursor-pointer hover:scale-105 duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1562552052-4e9f2d8e8a4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="atraksi"
          class="w-full h-[130px] object-cover"
        />
        <h5
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white dark:text-gray-200 z-10 text-xl tracking-wider whitespace-nowrap"
        >
          Olahraga
        </h5>
      </div>
    </section>
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";
import Footer from "./../components/Footer.vue";
import TopFooter from "./../components/TopFooter.vue";

// icons
import magnifyingGlassIcon from "./../components/icons/magnifyingGlass.vue";
import xMarkIcon from "./../components/icons/xMark.vue";
import solidMapPinIcon from "./../components/icons/solidMapPin.vue";
import arrowRightIcon from "./../components/icons/arrowRight.vue";

export default {
  components: {
    Navbar,
    Footer,
    TopFooter,

    //
    magnifyingGlassIcon,
    xMarkIcon,
    solidMapPinIcon,
    arrowRightIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>