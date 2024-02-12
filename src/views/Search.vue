<template>
  <Navbar />

  <main class="pt-28 grid grid-cols-4 px-20">
    <div class="bg-[#34e0a1] px-10 py-7 rounded">
      <div class="text-white">
        <h3 class="font-bold text-xl flex gap-3 mb-4">
          <solidTagIcon myClass="w-6" />
          Jenis Kategori
        </h3>
        <ul class="ml-10">
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Wisata</router-link
            >
          </li>
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Kuliner</router-link
            >
          </li>
        </ul>
      </div>

      <div class="text-white mt-10">
        <h3 class="font-bold text-xl flex gap-3 mb-4">
          <solidStarIcon myClass="w-6" />
          Rating
        </h3>
        <ul class="ml-10">
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Wisata</router-link
            >
          </li>
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Kuliner</router-link
            >
          </li>
        </ul>
      </div>

      <div class="text-white mt-10">
        <h3 class="font-bold text-xl flex gap-3 mb-4">
          <solidStarIcon myClass="w-6" />
          Cocok Untuk
        </h3>
        <ul class="ml-10">
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Wisata</router-link
            >
          </li>
          <li class="mb-1">
            <router-link to="/search" class="!text-white hover:font-semibold"
              >Kuliner</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-3">
      <div class="flex items-center">
        <a href="">
          <img src="./../assets/img/a1.jpg" alt="" />
        </a>
        <div class="text-box">
          <h3 class="text-xl font-semibold">Waduk Darma</h3>
          <div class="flex mb-4">
            <solidStarIcon myClass="w-4" />
            <solidStarIcon myClass="w-4" />
            <solidStarIcon myClass="w-4" />
            <solidStarIcon myClass="w-4" />
            <solidStarIcon myClass="w-4" />
          </div>
          <span class="text-xs bg-gray-200 px-5 py-1 rounded-full">
            Taman Air
          </span>
          <p class="flex mt-5 gap-2 text-xs items-center">
            <calendarDaysIcon myClass="w-5" /> Sekarang Buka
          </p>

          <div class="flex gap-3 mt-10">
            <button class="px-6 py-2 rounded bg-[#34e0a1]">Lihat Tiket</button>
            <button class="px-6 py-2 rounded bg-[#34e0a1]">Lihat Tiket</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";

// icons
import solidStarIcon from "@/components/icons/solidStar.vue";
import calendarDaysIcon from "@/components/icons/calendarDays.vue";
import solidTagIcon from "@/components/icons/solidTag.vue";

export default {
  components: {
    Navbar,

    //
    solidStarIcon,
    calendarDaysIcon,
    solidTagIcon,
  },
};
</script>

<style scoped>
/* body {
  font-family: "sen", sans-serif;
} */
.menu {
  margin-left: 100px;
  float: left;
}
a {
  text-decoration: none;
  color: black;
  line-height: 30px;
}
.checked {
  color: green;
}
img {
  max-width: 300px;
  float: left;
  margin-right: 20px;
  margin-left: 40px;
  border-radius: 5px;
  cursor: pointer;
  transition: 400ms;
}
/* button {
  background-color: rgb(239, 215, 0);
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
} */
</style>
