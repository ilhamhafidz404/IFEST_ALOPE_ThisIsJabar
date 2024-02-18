<template>
  <section class="mt-20">
    <div class="flex items-center gap-10 mb-16">
      <div>
        <h4 class="text-3xl">Aktivitas</h4>
        <h4 class="font-waterbrush text-5xl font-bold">Trending</h4>
      </div>
      <div>
        <p class="text-sm mt-5 text-gray-800">
          Apa yang banyak dilakukan oleh orang lain di Jawa Barat? <br />
          apa yang sedang tren dan jadi perbincangan hangat?
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center mt-7">
      <div class="flex gap-3">
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
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
        >
          Alam Liar
        </button>
        <button
          class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
        >
          Olahraga
        </button>
      </div>
      <div>
        <router-link
          to="/activity"
          class="text-[#34e0a1] font-semibold px-5 py-2 text-sm rounded mx-auto lg:col-span-4 md:col-span-3 lg:mt-0 mt-20 flex items-center gap-3"
        >
          Lihat Semua Aktifitas Seru
          <chevronRightIcon myClass="w-6" />
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-5 mt-5">
      <div
        class="rounded overflow-hidden relative shadow-md"
        v-for="activity in activities"
        :key="activity.title"
      >
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
              class="text-xs bg-gray-200 px-5 py-1 rounded-full"
              v-for="tag in activity.tags"
              :key="tag"
            >
              {{ tag }}
            </span>
          </div>
          <h5 class="font-semibold mb-2">
            {{ activity.title }}
          </h5>

          <p class="text-xs mt-4">
            {{ activity.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import chevronRightIcon from "./icons/chevronRight.vue";
export default {
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
          img: "./src/assets/images/activities/skate.jpg",
        },
        {
          title: "Lihat Sunset Indah Bareng Para Anak Senja",
          description:
            "Lihat keindahan alam di sore hari dengan cahaya matahari yang mulai redup.",
          tags: ["Alam Liar"],
          location: "Bukit Moko",
          img: "./src/assets/images/activities/sunset.jpg",
        },
        {
          title: "Nyanyi Bareng Sama Penyanyi Dadakan",
          description:
            "Bersenandung bersama, hilangkan penat di malam hari dengan lantunan lagu dan musik yang dinyanyikan para penyanyi dadakan.",
          tags: ["Live Musik"],
          location: "Alun-alun Bandung",
          img: "./src/assets/images/activities/liveMusik.jpg",
        },
        {
          title: "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
          description:
            "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
          tags: ["Weekend"],
          location: "Pago Restaurant",
          img: "./src/assets/images/activities/bbq.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>