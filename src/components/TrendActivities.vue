<template>
  <section class="mt-20">
    <div class="md:flex items-center gap-10 xl:mb-16 mb-0 dark:text-gray-100">
      <div>
        <h4 class="text-3xl">Aktivitas</h4>
        <h4 class="font-waterbrush text-5xl font-bold">Trending</h4>
      </div>
      <div>
        <p class="text-sm mt-5 text-gray-800 dark:text-gray-200">
          Apa yang banyak dilakukan oleh orang lain di Jawa Barat? <br />
          apa yang sedang tren dan jadi perbincangan hangat?
        </p>
      </div>
    </div>

    <div class="flex justify-between items-end mt-10">
      <div class="md:flex hidden gap-3">
        <button
          class="bg-[#34e0a1] text-white px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
        >
          All
        </button>
        <button
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
        >
          Weekend
        </button>
        <button
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
        >
          Live Musik
        </button>
        <button
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20 xl:block hidden"
        >
          Alam Liar
        </button>
        <button
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20 xl:block hidden"
        >
          Olahraga
        </button>
      </div>
      <div>
        <router-link
          to="/activity"
          class="text-[#34e0a1] font-semibold px-5 py-2 text-sm rounded mx-auto lg:col-span-4 md:col-span-3 flex items-center gap-3"
        >
          Lihat Semua
          <span class="lg:inline hidden lg:-ml-2">Aktifitas Seru</span>
          <chevronRightIcon myClass="w-6" />
        </router-link>
      </div>
    </div>

    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
      <div
        class="rounded overflow-hidden relative shadow-md dark:bg-slate-800 pb-4"
        v-for="activity in activities"
        :key="activity.title"
      >
        <router-link to="/detail">
          <img
            :src="activity.img"
            alt="activities"
            class="w-full h-[200px] object-cover"
          />
          <span
            class="text-white bg-[#34e0a1] text-sm absolute px-5 py-2 rounded-br top-0 left-0"
            >{{ activity.location }}</span
          >
          <div class="px-5 py-3">
            <div class="flex gap-2 mb-2">
              <span
                class="text-xs bg-gray-200 dark:bg-slate-600 dark:text-gray-300 px-5 py-1 rounded-full"
                v-for="tag in activity.tags"
                :key="tag"
              >
                {{ tag }}
              </span>
            </div>
            <h5 class="font-semibold mb-2 dark:text-gray-100">
              {{ activity.title }}
            </h5>

            <p class="text-xs mt-4 dark:text-gray-200">
              {{ activity.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import chevronRightIcon from "./icons/chevronRight.vue";
export default {
  props: ["lang"],
  components: {
    chevronRightIcon,
  },
  data() {
    return {
      activities: [
        {
          title: "Main Skateboard Beratraksi & Menonton",
          description:
            "Kumpul, jajan dan nonton bareng anak-anak Skateboard sambil beratraksi dan membangun ekspresei kebebasan.",
          tags: ["Weekend", "Olahraga"],
          location: "Buqiet Skatepark",
          img: "https://images.unsplash.com/photo-1544364493-4ff9efeabce3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Lihat Sunset Indah Bareng Para Anak Senja",
          description:
            "Lihat keindahan alam di sore hari dengan cahaya matahari yang mulai redup.",
          tags: ["Alam Liar"],
          location: "Bukit Moko",
          img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Nyanyi Bareng Sama Penyanyi Dadakan",
          description:
            "Bersenandung bersama, hilangkan penat di malam hari dengan lantunan lagu dan musik yang dinyanyikan para penyanyi dadakan.",
          tags: ["Live Musik"],
          location: "Alun-alun Bandung",
          img: "./src/assets/images/activities/liveMusik.jpg",
          img: "https://images.unsplash.com/photo-1509561419210-1f3fc1332258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldCUyMG11c2ljfGVufDB8fDB8fHww",
        },
        {
          title: "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
          description:
            "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
          tags: ["Weekend"],
          location: "Pago Restaurant",
          img: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    };
  },
};
</script>

<style>
</style>