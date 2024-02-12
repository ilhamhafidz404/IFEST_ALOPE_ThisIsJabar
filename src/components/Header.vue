<template>
  <header class="grid lg:grid-cols-2 h-screen relative items-center">
    <div
      class="lg:p-16 lg:pb-20 lg:mt-32 lg:static absolute lg:w-auto md:w-1/2 bg-white/40 md:p-10 md:pb-10 md:bottom-auto bottom-[100px] p-5 pb-20"
    >
      <h1 class="md:text-5xl text-4xl font-[500]">
        {{ header.title1 }} <br />
        {{ header.title2 }}
      </h1>
      <p class="text-sm mt-5">
        {{ header.subtitle }}
      </p>
      <a href="" class="text-[#34e0a1] mt-7 inline-block font-semibold">
        Lihat Lebih Lengkap
      </a>

      <!-- desktop -->
      <div
        class="gap-10 mt-16 bg-[#34e0a1] text-white py-5 px-10 relative lg:flex hidden"
      >
        <div class="w-2/3">
          <h4 class="text-xl font-semibold mb-3">Lokasi</h4>
          <p class="text-sm">
            {{ header.address }}
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
      header: {
        title1: "PANTAI PANGANDARAN, ",
        title2: "PANGANDARAN",
        subtitle:
          "Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan Bandung, Kecamatan Pangandaran, Kabupaten Pangandaran, Provinsi Jawa Barat.",
        address:
          "Jl. Pramuka No.67, Purwawinangun, Kec. Kuningan, Kabupaten Kuningan, Jawa Barat 45512",
        active: 1,
      },
    };
  },
  methods: {
    nextHeader() {
      const headerImage = document.getElementById("headerImage");

      if (this.header.active == 1) {
        headerImage.src = "/src/assets/images/header/2.jpg";
        this.header.title1 = "CURUG LEUWI HEJO, ";
        this.header.title2 = "BOGOR";
      } else if (this.header.active == 2) {
        headerImage.src = "/src/assets/images/header/3.jpg";
        this.header.title1 = "PANTAI UJUNG GENTENG, ";
        this.header.title2 = "SUKABUMI";
      }

      if (this.header.active <= 2) {
        this.header.active += 1;
      }
    },
    prevHeader() {
      const headerImage = document.getElementById("headerImage");

      if (this.header.active == 3) {
        headerImage.src = "/src/assets/images/header/2.jpg";
        this.header.title1 = "CURUG LEUWI HEJO, ";
        this.header.title2 = "BOGOR";
      } else if (this.header.active == 2) {
        headerImage.src = "/src/assets/images/header/1.jpg";
        this.header.title1 = "PANTAI PANGANDARAN, ";
        this.header.title2 = "PANGANDARAN";
      }

      if (this.header.active >= 2) {
        this.header.active -= 1;
      }
    },
  },
};
</script>

<style>
</style>