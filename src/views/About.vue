<template>
  <Navbar />

  <header class="relative">
    <img
      src="./../assets/images/header/1.jpg"
      class="w-full h-[700px] object-cover"
    />
    <span class="bg-slate-900/40 absolute inset-0 dark:block hidden"></span>
    <section
      class="absolute bottom-0 pl-20 bg-[#34e0a1] py-20 h-[450px] w-[1519px] flex items-center text-white"
    >
      <div class="mb-52">
        <h1 class="text-7xl font-waterbrush mb-8">
          Telusuri pengalaman populer
        </h1>
        <p>
          Lihat apa yang wisatawan lain lakukan, <br />
          Berdasarkan penilaian dan jumlah pemesanan.
        </p>
      </div>
    </section>
  </header>

  <main class="lg:px-20 md:px-10 px-5 pt-20 mb-20">
    <ListDestinasi />
    <TrendActivities />
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";
import Footer from "./../components/Footer.vue";
import TopFooter from "./../components/TopFooter.vue";
import TrendActivities from "./../components/TrendActivities.vue";
import ListDestinasi from "./../components/ListDestinasi.vue"

export default {
  components: {
    Navbar,
    TopFooter,
    Footer,
    TrendActivities,
    ListDestinasi,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
