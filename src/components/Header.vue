<template>
  <header class="grid lg:grid-cols-2 h-screen relative items-center">
    <div
      class="lg:p-20 lg:pb-20 lg:mt-32 lg:static absolute lg:w-auto md:w-1/2 bg-white/40 md:p-10 md:pb-10 md:bottom-auto bottom-[100px] p-5 pb-20"
    >
      <h1 class="md:text-5xl text-4xl font-[500]">
        WADUK DARMA, <br />
        KUNINGAN
      </h1>
      <p class="text-sm mt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
        earum harum doloremque doloribus distinctio. In nesciunt inventore esse
        magnam reiciendis tempore minima cumque architecto nihil, sint tempora!
        Alias, placeat mollitia!
      </p>
      <a href="" class="text-[#34e0a1] mt-7 inline-block font-semibold">
        Lihat Lebih Lengkap
      </a>

      <!-- desktop -->
      <div
        class="gap-10 mt-32 bg-[#34e0a1] text-white py-5 px-10 relative lg:flex hidden"
      >
        <div class="w-2/3">
          <h4 class="text-xl font-semibold mb-3">Lokasi</h4>
          <p class="text-sm">
            Jl. Pramuka No.67, Purwawinangun, Kec. Kuningan, Kabupaten Kuningan,
            Jawa Barat 45512
          </p>
        </div>
        <div class="w-1/3">
          <h4 class="text-xl font-semibold mb-3">Harga</h4>
          <p>FREE</p>
        </div>

        <!--  -->

        <div
          class="absolute -right-0 bg-[#34e0a1] w-1/2 py-5 pr-10 translate-x-full h-full top-0"
        >
          <h4 class="text-xl font-semibold mb-3">Buka Pada</h4>
          <p>Setiap hari pada jam 8 Pagi - 6 Sore</p>
        </div>
      </div>
    </div>

    <!-- tablet -->
    <div
      class="lg:hidden grid md:grid-cols-4 gap-10 mt-32 bg-[#34e0a1] text-white md:py-5 md:px-10 p-5 absolute bottom-0 left-0 right-0"
    >
      <div class="md:col-span-2">
        <h4 class="text-xl font-semibold mb-3">Lokasi</h4>
        <p class="text-sm">
          Jl. Pramuka No.67, Purwawinangun, Kec. Kuningan, Kabupaten Kuningan,
          Jawa Barat 45512
        </p>
      </div>
      <div class="md:block hidden">
        <h4 class="text-xl font-semibold mb-3">Harga</h4>
        <p>FREE</p>
      </div>
      <div class="md:block hidden">
        <h4 class="text-xl font-semibold mb-3">Buka Pada</h4>
        <p>Setiap hari pada jam 8 Pagi - 6 Sore</p>
      </div>
    </div>

    <div>
      <img
        id="headerImage"
        src="./../assets/images/header/1.jpg"
        alt=""
        class="h-screen w-full object-cover"
      />
    </div>

    <div
      class="absolute flex items-center justify-center lg:right-10 right-0 bottom-[128px] bg-white"
    >
      <button class="p-5 hover:bg-[#34e0a1]" @click="prevHeader()">
        <chevronLeftIcon myClass="w-6" />
      </button>
      <button class="p-5 hover:bg-[#34e0a1]" @click="nextHeader()">
        <chevronRightIcon myClass="w-6" />
      </button>
    </div>
  </header>
</template>

<script>
import chevronRightIcon from "./icons/chevronRight.vue";
import chevronLeftIcon from "./icons/chevronLeft.vue";

export default {
  components: {
    chevronLeftIcon,
    chevronRightIcon,
  },
  data() {
    return {
      headerActive: 1,
    };
  },
  methods: {
    nextHeader() {
      const headerImage = document.getElementById("headerImage");

      if (this.headerActive == 1) {
        headerImage.src = "/src/assets/images/header/2.jpg";
      } else if (this.headerActive == 2) {
        headerImage.src = "/src/assets/images/header/3.jpg";
      }

      if (this.headerActive <= 2) {
        this.headerActive += 1;
      }
    },
    prevHeader() {
      const headerImage = document.getElementById("headerImage");

      if (this.headerActive == 3) {
        headerImage.src = "/src/assets/images/header/2.jpg";
      } else if (this.headerActive == 2) {
        headerImage.src = "/src/assets/images/header/1.jpg";
      }

      if (this.headerActive >= 2) {
        this.headerActive -= 1;
      }
    },
  },
};
</script>

<style>
</style>