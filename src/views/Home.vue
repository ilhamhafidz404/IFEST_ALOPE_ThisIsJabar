<template>
  <Navbar @changeLanguageRequest="changeLanguage" />

  <!--  -->

  <header
    class="grid xl:grid-cols-2 xl:h-screen lg:max-h-[800px] h-screen relative items-center overflow-hidden"
  >
    <div
      class="xl:p-16 xl:pb-20 xl:mt-32 xl:static absolute xl:w-auto md:w-2/3 xl:bg-transparent bg-white/40 dark:bg-[#0f172a]/40 md:p-10 md:pb-10 md:bottom-auto bottom-[100px] p-5 pb-20"
    >
      <h1
        v-if="lang == 'id'"
        class="xl:text-5xl md:text-4xl text-2xl font-[500] dark:text-gray-100"
      >
        {{ content.header.title1.id }} <br />
        {{ content.header.title2 }}
      </h1>
      <h1
        v-else
        class="xl:text-5xl md:text-4xl text-2xl font-[500] dark:text-gray-100"
      >
        {{ content.header.title1.en }} <br />
        {{ content.header.title2 }}
      </h1>

      <p
        v-if="lang == 'id'"
        class="md:text-sm text-xs md:mt-5 mt-2 dark:text-gray-200"
      >
        {{ content.header.subtitle.id }}
      </p>
      <p v-else class="md:text-sm text-xs md:mt-5 mt-2 dark:text-gray-200">
        {{ content.header.subtitle.en }}
      </p>
      <a
        href=""
        class="text-[#34e0a1] mt-7 inline-block font-semibold md:text-base text-sm"
      >
        <span v-if="lang == 'id'">Lihat Lebih Lengkap</span>
        <span v-else>See More</span>
      </a>

      <!-- desktop -->
      <div
        class="gap-10 mt-16 bg-[#34e0a1] text-white py-5 px-10 relative xl:flex hidden"
      >
        <div class="w-2/3">
          <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">Lokasi</h4>
          <h4 v-else class="text-xl font-semibold mb-3">Location</h4>
          <p class="text-sm">
            {{ content.header.address }}
          </p>
        </div>
        <div class="w-1/3">
          <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">Harga</h4>
          <h4 v-else class="text-xl font-semibold mb-3">Fee</h4>
          <p>FREE</p>
        </div>

        <!--  -->

        <div
          class="absolute -right-0 bg-[#34e0a1] w-1/2 py-5 pr-10 translate-x-full h-full top-0 z-10"
        >
          <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">
            Buka Pada
          </h4>
          <h4 v-else class="text-xl font-semibold mb-3">Open On</h4>
          <p>Setiap hari pada jam 8 Pagi - 6 Sore</p>
        </div>
      </div>
    </div>

    <!-- tablet -->
    <div
      class="xl:hidden grid md:grid-cols-4 gap-10 mt-32 bg-[#34e0a1] text-white md:py-5 md:px-10 p-5 absolute bottom-0 left-0 right-0 z-20"
    >
      <div class="md:col-span-2">
        <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">Lokasi</h4>
        <h4 v-else class="text-xl font-semibold mb-3">Location</h4>
        <p class="text-sm">
          {{ content.header.address }}
        </p>
      </div>
      <div class="md:block hidden">
        <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">Harga</h4>
        <h4 v-else class="text-xl font-semibold mb-3">Fee</h4>
        <p>FREE</p>
      </div>
      <div class="md:block hidden">
        <h4 v-if="lang == 'id'" class="text-xl font-semibold mb-3">
          Buka Pada
        </h4>
        <h4 v-else class="text-xl font-semibold mb-3">Open On</h4>
        <p>Setiap hari pada jam 8 Pagi - 6 Sore</p>
      </div>
    </div>

    <div class="relative">
      <img
        id="headerImage"
        :src="content.header.img"
        alt=""
        class="xl:h-screen lg:h-[800px] h-screen w-full object-cover"
      />
      <span class="bg-slate-900/40 absolute inset-0 dark:block hidden"></span>
    </div>

    <div
      class="absolute flex items-center justify-center lg:right-10 right-0 bottom-[150px] bg-white dark:bg-slate-900 dark:text-gray-200"
    >
      <button class="md:p-5 p-3 hover:bg-[#34e0a1]" @click="prevHeader()">
        <chevronLeftIcon myClass="w-6" />
      </button>
      <button class="md:p-5 p-3 hover:bg-[#34e0a1]" @click="nextHeader()">
        <chevronRightIcon myClass="w-6" />
      </button>
    </div>
  </header>

  <main class="xl:px-20 md:px-10 px-5 pt-20">
    <section
      class="grid xl:grid-cols-4 items-center xl:gap-20 gap-10 dark:text-gray-100"
    >
      <div class="lg:col-span-1">
        <h4 class="text-xl" v-if="lang == 'id'">Kategori</h4>
        <h4 class="text-xl" v-else>Category</h4>
        <h3 v-if="lang == 'id'" class="font-waterbrush text-5xl">
          Wisata Budaya
        </h3>
        <h3 v-else class="font-waterbrush text-5xl">Culture tour</h3>
        <p
          v-if="lang == 'id'"
          class="text-sm mt-5 text-gray-800 dark:text-gray-200"
        >
          {{ content.category.culture.subtitle.id }}
        </p>
        <p v-else class="text-sm mt-5 text-gray-800 dark:text-gray-200">
          {{ content.category.culture.subtitle.en }}
        </p>

        <button class="flex text-sm mt-5 items-center gap-2">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6" />
          </span>
          <span v-if="lang == 'id'">Lihat Lebih Lengkap</span>
          <span v-else>See More</span>
        </button>
      </div>
      <div class="lg:col-span-3">
        <div
          class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-5 gap-2"
        >
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
          >
            <img
              src="./../assets/images/wisataBudaya/gedungSate.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              v-if="lang == 'id'"
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item1.title.id }}
            </h5>
            <h5
              v-else
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item1.title.en }}
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 v-if="lang == 'id'" class="font-semibold text-base">
                {{ content.category.culture.item1.title.id }}
              </h5>
              <h5 v-else class="font-semibold text-base">
                {{ content.category.culture.item1.title.en }}
              </h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culture.item1.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culture.item1.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
          >
            <img
              src="./../assets/images/wisataBudaya/kampungNaga.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              v-if="lang == 'id'"
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item2.title.id }}
            </h5>
            <h5
              v-else
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item2.title.en }}
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 v-if="lang == 'id'" class="font-semibold text-base">
                {{ content.category.culture.item2.title.id }}
              </h5>
              <h5 v-else class="font-semibold text-base">
                {{ content.category.culture.item2.title.en }}
              </h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culture.item2.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culture.item2.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
          >
            <img
              src="./../assets/images/wisataBudaya/keratonKasepuhanCirebon.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              v-if="lang == 'id'"
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item3.title.id }}
            </h5>
            <h5
              v-else
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#33e0a1]"
            >
              {{ content.category.culture.item3.title.en }}
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 v-if="lang == 'id'" class="font-semibold text-base">
                {{ content.category.culture.item3.title.id }}
              </h5>
              <h5 v-else class="font-semibold text-base">
                {{ content.category.culture.item3.title.en }}
              </h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culture.item3.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culture.item3.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 lg:block hidden"
          >
            <img
              src="./../assets/images/wisataBudaya/saungUdjo.jpeg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              v-if="lang == 'id'"
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item4.title.id }}
            </h5>
            <h5
              v-else
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              {{ content.category.culture.item4.title.en }}
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 v-if="lang == 'id'" class="font-semibold text-base">
                {{ content.category.culture.item4.title.id }}
              </h5>
              <h5 v-else class="font-semibold text-base">
                {{ content.category.culture.item4.title.en }}
              </h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culture.item4.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culture.item4.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="grid xl:grid-cols-4 lg:grid-cols-3 items-center xl:gap-20 lg:gap-5 xl:mt-10 mt-20 dark:text-gray-100"
    >
      <div class="xl:col-span-1 lg:col-span-3">
        <h4 v-if="lang == 'id'" class="text-xl">Kategori</h4>
        <h4 v-else class="text-xl">Category</h4>
        <h3 v-if="lang == 'id'" class="font-waterbrush text-5xl">
          Kuliner Khas
        </h3>
        <h3 v-else class="font-waterbrush text-5xl">Typical Culinary</h3>
        <p
          v-if="lang == 'id'"
          class="text-sm mt-5 text-gray-800 dark:text-gray-200"
        >
          {{ content.category.culinary.subtitle.id }}
        </p>
        <p v-else class="text-sm mt-5 text-gray-800 dark:text-gray-200">
          {{ content.category.culinary.subtitle.en }}
        </p>

        <button class="flex text-sm mt-5 items-center gap-2">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6" />
          </span>
          <span v-if="lang == 'id'">Lihat Lebih Lengkap</span>
          <span v-else>See More</span>
        </button>
      </div>

      <div class="lg:col-span-3 lg:mt-0 mt-10">
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-5 gap-2">
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
          >
            <img
              src="./../assets/images/makananKhas/nasiTimbel.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              v-if="lang == 'id'"
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              Nasi Timbel
            </h5>
            <h5
              v-else
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              Timbel Rice
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 v-if="lang == 'id'" class="font-semibold text-base">
                Nasi Timbel
              </h5>
              <h5 v-else class="font-semibold text-base">Timbel Rice</h5>

              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culinary.item1.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culinary.item1.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
          >
            <img
              src="./../assets/images/makananKhas/surabi.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              Surabi
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 class="font-semibold text-base">Surabi</h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culinary.item2.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culinary.item2.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
          <div
            class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 lg:block hidden"
          >
            <img
              src="./../assets/images/makananKhas/batagor.jpg"
              alt=""
              class="w-full h-[300px] object-cover"
            />

            <h5
              class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
            >
              Batagor
            </h5>

            <div
              class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
            >
              <h5 class="font-semibold text-base">Batagor</h5>
              <p v-if="lang == 'id'" class="mt-2 mb-4">
                {{ content.category.culinary.item3.description.id }}
              </p>
              <p v-else class="mt-2 mb-4">
                {{ content.category.culinary.item3.description.en }}
              </p>

              <span class="flex items-center gap-3">
                <span v-if="lang == 'id'">Lihat</span>
                <span v-else>See</span>
                <arrowRightIcon myClass="w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <router-link
        to="/list"
        class="bg-[#34e0a1] hover:bg-[#34e0a1]/80 text-white font-semibold px-5 py-2 text-sm rounded mx-auto xl:col-span-4 lg:col-span-3 xl:mt-0 mt-10"
      >
        <span v-if="lang == 'id'">Lihat Kategori Lainnya</span>
        <span v-else>See More Category</span>
      </router-link>
    </section>
    <section class="mt-20">
      <div class="md:flex items-center gap-10 xl:mb-16 mb-0 dark:text-gray-100">
        <div>
          <h4 v-if="lang == 'id'" class="text-3xl">Aktivitas</h4>
          <h4 v-else class="text-3xl">Activity</h4>
          <h4 class="font-waterbrush text-5xl font-bold">Trending</h4>
        </div>
        <div>
          <p class="text-sm mt-5 text-gray-800 dark:text-gray-200">
            <span
              v-if="lang == 'id'"
              v-html="content.activities.header.id"
            ></span>
            <span v-else v-html="content.activities.header.en"></span>
          </p>
        </div>
      </div>

      <div class="flex justify-between items-end mt-10">
        <div class="md:flex hidden gap-3">
          <button
            class="bg-[#34e0a1] text-white px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
          >
            <span v-if="lang == 'id'">Semua</span>
            <span v-else>All</span>
          </button>
          <button
            class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
          >
            Weekend
          </button>
          <button
            class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20"
          >
            <span v-if="lang == 'id'">Live Musik</span>
            <span v-else>Live Music</span>
          </button>
          <button
            class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20 xl:block hidden"
          >
            <span v-if="lang == 'id'">Alam Liar</span>
            <span v-else>Wild Nature</span>
          </button>
          <button
            class="bg-[#34e0a1]/20 text-[#34e0a1] px-5 py-1 rounded-full font-semibold border-2 hover:border-[#34e0a1] border-[#34e0a1]/20 xl:block hidden"
          >
            <span v-if="lang == 'id'">Olahraga</span>
            <span v-else>Sport</span>
          </button>
        </div>
        <div>
          <router-link
            v-if="lang == 'id'"
            to="/activity"
            class="text-[#34e0a1] font-semibold px-5 py-2 text-sm rounded mx-auto lg:col-span-4 md:col-span-3 flex items-center gap-3"
          >
            Lihat Semua
            <span class="lg:inline hidden lg:-ml-2">Aktifitas Seru</span>
            <chevronRightIcon myClass="w-6" />
          </router-link>
          <router-link
            v-else
            to="/activity"
            class="text-[#34e0a1] font-semibold px-5 py-2 text-sm rounded mx-auto lg:col-span-4 md:col-span-3 flex items-center gap-3"
          >
            See All
            <span class="lg:inline hidden lg:-ml-2">Exciting Activities</span>
            <chevronRightIcon myClass="w-6" />
          </router-link>
        </div>
      </div>

      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
        <div
          class="rounded overflow-hidden relative shadow-md dark:bg-slate-800 pb-4"
        >
          <router-link to="/detail">
            <img
              :src="content.activities.item1.img"
              alt="content.activities"
              class="w-full h-[200px] object-cover"
            />
            <span
              class="text-white bg-[#34e0a1] text-sm absolute px-5 py-2 rounded-br top-0 left-0"
              >{{ content.activities.item1.location }}</span
            >
            <div class="px-5 py-3">
              <div class="flex gap-2 mb-2">
                <!-- <span
                  class="text-xs bg-gray-200 dark:bg-slate-600 dark:text-gray-300 px-5 py-1 rounded-full"
                  v-for="tag in activity.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span> -->
              </div>
              <h5
                v-if="lang == 'id'"
                class="font-semibold mb-2 dark:text-gray-100"
              >
                {{ content.activities.item1.title.id }}
              </h5>
              <h5 v-else class="font-semibold mb-2 dark:text-gray-100">
                {{ content.activities.item1.title.en }}
              </h5>

              <p v-if="lang == 'id'" class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item1.description.id }}
              </p>
              <p v-else class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item1.description.en }}
              </p>
            </div>
          </router-link>
        </div>
        <div
          class="rounded overflow-hidden relative shadow-md dark:bg-slate-800 pb-4"
        >
          <router-link to="/detail">
            <img
              :src="content.activities.item2.img"
              alt="content.activities"
              class="w-full h-[200px] object-cover"
            />
            <span
              class="text-white bg-[#34e0a1] text-sm absolute px-5 py-2 rounded-br top-0 left-0"
              >{{ content.activities.item2.location }}</span
            >
            <div class="px-5 py-3">
              <div class="flex gap-2 mb-2">
                <!-- <span
                  class="text-xs bg-gray-200 dark:bg-slate-600 dark:text-gray-300 px-5 py-1 rounded-full"
                  v-for="tag in activity.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span> -->
              </div>
              <h5
                v-if="lang == 'id'"
                class="font-semibold mb-2 dark:text-gray-100"
              >
                {{ content.activities.item2.title.id }}
              </h5>
              <h5 v-else class="font-semibold mb-2 dark:text-gray-100">
                {{ content.activities.item2.title.en }}
              </h5>

              <p v-if="lang == 'id'" class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item2.description.id }}
              </p>
              <p v-else class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item2.description.en }}
              </p>
            </div>
          </router-link>
        </div>
        <div
          class="rounded overflow-hidden relative shadow-md dark:bg-slate-800 pb-4"
        >
          <router-link to="/detail">
            <img
              :src="content.activities.item3.img"
              alt="content.activities"
              class="w-full h-[200px] object-cover"
            />
            <span
              class="text-white bg-[#34e0a1] text-sm absolute px-5 py-2 rounded-br top-0 left-0"
              >{{ content.activities.item3.location }}</span
            >
            <div class="px-5 py-3">
              <div class="flex gap-2 mb-2">
                <!-- <span
                  class="text-xs bg-gray-200 dark:bg-slate-600 dark:text-gray-300 px-5 py-1 rounded-full"
                  v-for="tag in activity.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span> -->
              </div>
              <h5
                v-if="lang == 'id'"
                class="font-semibold mb-2 dark:text-gray-100"
              >
                {{ content.activities.item3.title.id }}
              </h5>
              <h5 v-else class="font-semibold mb-2 dark:text-gray-100">
                {{ content.activities.item3.title.en }}
              </h5>

              <p v-if="lang == 'id'" class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item3.description.id }}
              </p>
              <p v-else class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item3.description.en }}
              </p>
            </div>
          </router-link>
        </div>
        <div
          class="rounded overflow-hidden relative shadow-md dark:bg-slate-800 pb-4"
        >
          <router-link to="/detail">
            <img
              :src="content.activities.item4.img"
              alt="content.activities"
              class="w-full h-[200px] object-cover"
            />
            <span
              class="text-white bg-[#34e0a1] text-sm absolute px-5 py-2 rounded-br top-0 left-0"
              >{{ content.activities.item4.location }}</span
            >
            <div class="px-5 py-3">
              <div class="flex gap-2 mb-2">
                <!-- <span
                  class="text-xs bg-gray-200 dark:bg-slate-600 dark:text-gray-300 px-5 py-1 rounded-full"
                  v-for="tag in activity.tags"
                  :key="tag"
                >
                  {{ tag }}
                </span> -->
              </div>
              <h5
                v-if="lang == 'id'"
                class="font-semibold mb-2 dark:text-gray-100"
              >
                {{ content.activities.item4.title.id }}
              </h5>
              <h5 v-else class="font-semibold mb-2 dark:text-gray-100">
                {{ content.activities.item4.title.en }}
              </h5>

              <p v-if="lang == 'id'" class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item4.description.id }}
              </p>
              <p v-else class="text-xs mt-4 dark:text-gray-200">
                {{ content.activities.item4.description.en }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>

  <!--  -->
  <section
    class="mt-20 text-center bg-[#34e0a1] sm:py-20 py-10 xl:px-20 md:px-10 px-5"
  >
    <h2
      class="font-waterbrush md:text-5xl text-4xl text-white"
      v-if="lang == 'id'"
    >
      Tentang Jabar
    </h2>
    <h2 class="font-waterbrush md:text-5xl text-4xl text-white" v-else>
      About Jabar
    </h2>
    <h3 class="md:text-5xl text-2xl text-white" v-if="lang == 'id'">
      KATA MEREKA
    </h3>
    <h3 class="md:text-5xl text-2xl text-white" v-else>THEY SAID</h3>

    <div class="grid lg:grid-cols-2 md:mt-20 mt-10 xl:gap-20 gap-10">
      <div
        class="bg-white dark:bg-slate-800 dark:text-gray-200 text-left p-10 rounded relative shadow"
      >
        <p class="text-sm">
          <span v-if="lang == 'id'">{{ content.testimony.item1.id }}</span>
          <span v-else>{{ content.testimony.item1.en }}</span>
        </p>
        <h6 class="text-xl font-semibold mt-5">Ilham Hafidz</h6>
        <span class="text-xs" v-if="lang == 'id'"
          >Pecinta Alam asal Kuningan</span
        >
        <span class="text-xs" v-else>Nature Lover from Kuningan</span>

        <img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-[100px] h-[100px] rounded-full object-cover absolute right-10 bottom-0 translate-y-1/3 border-[5px] border-white dark:border-slate-800"
        />
      </div>
      <div
        class="bg-white dark:bg-slate-800 dark:text-gray-200 text-left p-10 rounded relative shadow md:block hidden"
      >
        <p class="text-sm">
          <span v-if="lang == 'id'">{{ content.testimony.item2.id }}</span>
          <span v-else>{{ content.testimony.item2.en }}</span>
        </p>
        <h6 class="text-xl font-semibold mt-5">Eveline Chopper</h6>
        <span class="text-xs" v-if="lang == 'id'">Turis Asal Amerika</span>
        <span class="text-xs" v-else>American tourist</span>

        <img
          src="https://images.unsplash.com/photo-1699729589505-d1791e32d925?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-[100px] h-[100px] rounded-full object-cover absolute right-10 bottom-0 translate-y-1/3 border-[5px] border-white dark:border-slate-800"
        />
      </div>
    </div>
  </section>

  <!--  -->

  <section class="xl:px-20 px-10 mt-20">
    <h4 class="sm:text-3xl text-2xl text-center dark:text-gray-100">
      <span v-if="lang == 'id'">ALASAN</span>
      <span v-else>REASON</span>
    </h4>
    <h4
      class="font-waterbrush sm:text-5xl text-4xl font-bold text-center md:mb-0 mb-16 dark:text-gray-100"
    >
      <span v-if="lang == 'id'" class="font-waterbrush">Kenapa Jabar?</span>
      <span v-else class="font-waterbrush">Why Jabar?</span>
    </h4>

    <div class="grid md:grid-cols-11 grid-cols-12">
      <div class="md:col-span-5 col-span-11 md:py-10 md:order-1 order-2">
        <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
          <div class="xl:w-2/3 w-full md:text-right text-left md:pl-0 pl-4">
            <h5 class="text-xl font-semibold dark:text-gray-100">
              <span v-if="lang == 'id'">{{
                content.reason.item1.title.id
              }}</span>
              <span v-else>{{ content.reason.item1.title.en }}</span>
            </h5>
            <p class="text-sm mt-2 dark:text-gray-200">
              <span v-if="lang == 'id'">{{
                content.reason.item1.subtitle.id
              }}</span>
              <span v-else>{{ content.reason.item1.subtitle.en }}</span>
            </p>
          </div>
          <div class="w-1/3 xl:block hidden">
            <img
              src="./../assets/images/gallery/8.jpg"
              alt=""
              class="w-full h-[200px] object-cover rounded"
            />
          </div>
        </div>
        <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
          <div class="xl:w-2/3 w-full md:text-right text-left md:pl-0 pl-4">
            <h5 class="text-xl font-semibold dark:text-gray-100">
              <span v-if="lang == 'id'">{{
                content.reason.item2.title.id
              }}</span>
              <span v-else>{{ content.reason.item2.title.en }}</span>
            </h5>
            <p class="text-sm mt-2 dark:text-gray-200">
              <span v-if="lang == 'id'">{{
                content.reason.item2.subtitle.id
              }}</span>
              <span v-else>{{ content.reason.item2.subtitle.en }}</span>
            </p>
          </div>
          <div class="w-1/3 xl:block hidden">
            <img
              src="./../assets/images/wisataBudaya/gedungSate.jpg"
              alt=""
              class="w-full h-[200px] object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div class="col-span-1 text-center md:order-2 order-1">
        <span
          class="relative inline-block w-[2px] h-full bg-[#34e0a1] after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:bg-[#34e0a1] after:rounded-full after:-translate-x-1/2 after:top-1/4 after:-translate-y-1/2 before:content-[''] before:w-[20px] before:h-[20px] before:absolute before:bg-[#34e0a1] before:rounded-full before:-translate-x-1/2 before:top-3/4 before:-translate-y-1/2"
        ></span>
      </div>
      <div class="md:hidden block col-span-1 text-center order-3">
        <span
          class="relative inline-block w-[2px] h-full bg-[#34e0a1] after:content-[''] after:w-[20px] after:h-[20px] after:absolute after:bg-[#34e0a1] after:rounded-full after:-translate-x-1/2 after:top-1/4 after:-translate-y-1/2 before:content-[''] before:w-[20px] before:h-[20px] before:absolute before:bg-[#34e0a1] before:rounded-full before:-translate-x-1/2 before:top-3/4 before:-translate-y-1/2"
        ></span>
      </div>
      <div class="md:col-span-5 col-span-11 md:py-10 md:order-3 order-4">
        <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
          <div class="w-1/3 xl:block hidden">
            <img
              src="./../assets/images/makananKhas/nasiTimbel.jpg"
              alt=""
              class="w-full h-[200px] object-cover rounded"
            />
          </div>
          <div class="xl:w-2/3 w-full text-left md:pl-0 pl-4">
            <h5 class="text-xl font-semibold dark:text-gray-100">
              <span v-if="lang == 'id'">{{
                content.reason.item3.title.id
              }}</span>
              <span v-else>{{ content.reason.item3.title.en }}</span>
            </h5>
            <p class="text-sm mt-2 dark:text-gray-200">
              <span v-if="lang == 'id'">{{
                content.reason.item3.subtitle.id
              }}</span>
              <span v-else>{{ content.reason.item3.subtitle.en }}</span>
            </p>
          </div>
        </div>
        <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
          <div class="w-1/3 xl:block hidden">
            <img
              src="./../assets/images/activities/terjunPayung.jpg"
              alt=""
              class="w-full h-[200px] object-cover rounded"
            />
          </div>
          <div class="xl:w-2/3 w-full text-left md:pl-0 pl-4">
            <h5 class="text-xl font-semibold dark:text-gray-100">
              <span v-if="lang == 'id'">{{
                content.reason.item4.title.id
              }}</span>
              <span v-else>{{ content.reason.item4.title.en }}</span>
            </h5>
            <p class="text-sm mt-2 dark:text-gray-200">
              <span v-if="lang == 'id'">{{
                content.reason.item4.subtitle.id
              }}</span>
              <span v-else>{{ content.reason.item4.subtitle.en }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-2 relative mt-20"
  >
    <div class="row-span-2 md:order-1 md:block hidden">
      <img
        src="./../assets/images/gallery/1.jpg"
        alt="gallery11"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="md:order-2 md:block hidden">
      <img
        src="./../assets/images/gallery/2.jpg"
        alt="gallery1"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="md:order-3 md:block hidden">
      <img
        src="./../assets/images/gallery/3.jpg"
        alt="gallery2"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="md:order-4 order-1">
      <img
        src="./../assets/images/gallery/4.jpg"
        alt="gallery3"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="xl:order-5 md:order-7 order-2">
      <img
        src="./../assets/images/gallery/5.jpg"
        alt="gallery4"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- {/* */} -->

    <div class="xl:order-6 md:order-8 md:block hidden">
      <img
        src="./../assets/images/gallery/6.jpg"
        alt="gallery5"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="border-2 border-[#34e0a1] border-dashed p-5 flex flex-col justify-center xl:order-7 md:order-5 order-3 xl:col-span-1 md:col-span-2"
    >
      <h2 class="font-semibold text-xl text-[#34e0a1] uppercase">
        <span v-if="lang == 'id'">{{ content.gallery.title.id }}</span>
        <span v-else>{{ content.gallery.title.en }}</span>
      </h2>
      <p class="text-sm mt-3 text-[#195e45]">
        <span v-if="lang == 'id'">{{ content.gallery.subtitle.id }}</span>
        <span v-else>{{ content.gallery.subtitle.en }}</span>
      </p>
    </div>
    <div class="xl:order-8 order-5 xl:block md:hidden">
      <img
        src="./../assets/images/gallery/7.jpg"
        alt="gallery6"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="row-span-2 xl:order-9 md:order-6 order-4">
      <img
        src="./../assets/images/gallery/8.jpg"
        alt="gallery12"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- {/* */} -->

    <div class="xl:order-10 md:block hidden order-9">
      <img
        src="./../assets/images/gallery/9.jpg"
        alt="gallery7"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="xl:order-11 xl:block hidden">
      <img
        src="./../assets/images/gallery/10.jpg"
        alt="gallery8"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="xl:order-12 xl:block hidden">
      <img
        src="./../assets/images/gallery/11.jpg"
        alt="gallery9"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="xl:order-last xl:block hidden">
      <img
        src="./../assets/images/gallery/12.jpg"
        alt="gallery10"
        class="w-full h-full object-cover"
      />
    </div>
  </section>

  <Footer />
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";
import Header from "./../components/Header.vue";
import Category from "./../components/Category.vue";
import TrendActivities from "./../components/TrendActivities.vue";
import Footer from "./../components/Footer.vue";

// icons
import chevronRightIcon from "./../components/icons/chevronRight.vue";
import chevronLeftIcon from "./../components/icons/chevronLeft.vue";
import arrowRightIcon from "./../components/icons/arrowRight.vue";

export default {
  props: ["language"],
  components: {
    //
    Navbar,
    Header,
    Category,
    TrendActivities,
    Footer,

    //
    chevronRightIcon,
    chevronLeftIcon,
    arrowRightIcon,
  },
  data() {
    return {
      lang: "id",

      content: {
        header: {
          title1: {
            id: "PANTAI PANGANDARAN, ",
            en: "PANGANDARAN BEACH, ",
          },
          title2: "PANGANDARAN",
          subtitle: {
            id: "Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan Bandung, Kecamatan Pangandaran, Kabupaten Pangandaran, Provinsi Jawa Barat.",
            en: "Pangandaran Beach is a mainstay tourist attraction of Pangandaran Regency which is located in the southeast of West Java, precisely in Pangandaran and Pananjung Villages, about 222 km south of Bandung, Pangandaran District, Pangandaran Regency, West Java Province.",
          },
          address: "Kecamatan Pangandaran, Kabupaten Pangandaran",
          active: 1,
          img: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        category: {
          culture: {
            subtitle: {
              id: "Budaya Jawa Barat yang kaya dan terjaga dari nenek moyang hingga sekarang.",
              en: "West Java's culture is rich and preserved from its ancestors until now.",
            },
            item1: {
              title: {
                id: "Gedung Sate",
                en: "Satay Building",
              },
              description: {
                id: "Merupakan gedung kantor Gubernur Jawa Barat. Gedung ini memiliki ciri khas berupa ornamen tusuk sate pada menara sentralnya",
                en: "This is the office building of the Governor of West Java. This building is characterized by skewer ornaments on its central tower",
              },
            },
            item2: {
              title: {
                id: "Kampung Naga",
                en: "Dragon Village",
              },
              description: {
                id: "Merupakan sebuah kampung adat yang masih lestari. Masyarakatnya masih memegang adat tradisi nenek moyang mereka ",
                en: "It is a traditional village that is still sustainable. The people still adhere to the traditions of their ancestors",
              },
            },
            item3: {
              title: {
                id: "Keraton Kasepuhan",
                en: "Old Keraton",
              },
              description: {
                id: "Makna di setiap sudut arsitektur keraton ini pun terkenal paling bersejarah. Halaman depan keraton ini dikelilingi tembok bata merah dan terdapat pendopo di dalamnya. ",
                en: "The meaning of every corner of this palace's architecture is also known to be very historical. The front yard of the palace is surrounded by red brick walls and there is a pavilion inside.",
              },
            },
            item4: {
              title: {
                id: "Saung Angklung Udjo",
                en: "Udjo Home of Angklung",
              },
              description: {
                id: "Adalah tempat pertunjukan, pusat kerajinan tangan dari bambu, dan workshop instrumen musik dari bambu. ",
                en: "It is a performance venue, a center for bamboo handicrafts, and a bamboo musical instrument workshop.",
              },
            },
          },
          culinary: {
            subtitle: {
              id: "Kuliner yang menggoda dan menggiurkan untuk disantap. Makanan khas dengan resep turun termurun.",
              en: "Culinary that is tempting and tempting to eat. Typical food with recipes passed down from generation to generation.",
            },
            item1: {
              title: {
                id: "Nasi Timbel",
                en: "Timbel Rice",
              },
              description: {
                id: "Adalah nasi yang dibungkus dengan daun pisang kemudian dikukus, dapat dibakar setelah dikukus untuk menambah aroma",
                en: "It is rice wrapped in banana leaves and then steamed. It can be grilled after steaming to add smell",
              },
            },
            item2: {
              description: {
                id: "Adalah jajanan tradisional yang berasal dari Indonesia yang diperkirakan sudah dikenal sejak zaman Kerajaan Mataram ",
                en: "It is a traditional snack originating from Indonesia which is thought to have been known since the time of the Mataram Kingdom",
              },
            },
            item3: {
              description: {
                id: "Merupakan jajanan khas Bandung yang kini sudah dikenal hampir di seluruh wilayah Indonesia.",
                en: "This is a typical Bandung snack which is now known in almost all parts of Indonesia.",
              },
            },
          },
        },
        activities: {
          header: {
            id: "Apa yang banyak dilakukan oleh orang lain di Jawa Barat? <br/> apa yang sedang tren dan jadi perbincangan hangat? ",
            en: "What do many other people in West Java do? <br/> What's trending and becoming a hot topic of conversation? ",
          },
          item1: {
            title: {
              id: "Main Skateboard Beratraksi & Menonton",
              en: "Playing and Watching Skateboarding",
            },
            description: {
              id: "Kumpul, jajan dan nonton bareng anak-anak Skateboard sambil beratraksi dan membangun ekspresei kebebasan.",
              en: "Gather, have snacks and watch Skateboarding together while performing attractions and building expressions of freedom.",
            },
            tags: {
              id: ["Weekend", "Olahraga"],
              en: ["Weekend", "Olahraga"],
            },
            location: "Buqiet Skatepark",
            img: "https://images.unsplash.com/photo-1544364493-4ff9efeabce3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          item2: {
            title: {
              id: "Lihat Sunset Indah Bareng Para Anak Senja",
              en: "See the Beautiful Sunset with the Twilight Children",
            },
            description: {
              id: "Lihat keindahan alam di sore hari dengan cahaya matahari yang mulai redup.",
              en: "See the beauty of nature in the afternoon with the sunlight starting to fade.",
            },
            tags: ["Alam Liar"],
            location: "Bukit Moko",
            img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          item3: {
            title: {
              id: "Nyanyi Bareng Sama Penyanyi Dadakan",
              en: "Sing Together with an Impromptu Singer",
            },
            description: {
              id: "Bersenandung bersama, hilangkan penat di malam hari dengan lantunan lagu dan musik yang dinyanyikan para penyanyi dadakan.",
              en: "Hum together, relieve fatigue at night with songs and music sung by impromptu singers.",
            },
            tags: ["Live Musik"],
            location: "Alun-alun Bandung",
            img: "https://images.unsplash.com/photo-1509561419210-1f3fc1332258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldCUyMG11c2ljfGVufDB8fDB8fHww",
          },
          item4: {
            title: {
              id: "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
              en: "Enjoy the pleasure of a barbecue with friends or family",
            },
            description: {
              id: "Nikmati Nikmatnya Barbekyu-an Bareng Teman atau Keluarga",
              en: "Enjoy the pleasure of a barbecue with friends or family",
            },
            tags: ["Weekend"],
            location: "Pago Restaurant",
            img: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        },
        testimony: {
          item1: {
            id: "Jawa Barat memiliki lanskap alam yang memukau, mulai dari gunung yang menjulang tinggi hingga pantai yang indah. Gunung Gede Pangrango, Gunung Tangkuban Perahu, dan Gunung Papandayan adalah destinasi populer bagi para pendaki dan pecinta alam.",
            en: "West Java has stunning natural landscapes, from towering mountains to beautiful beaches. Mount Gede Pangrango, Mount Tangkuban Perahu, and Mount Papandayan are popular destinations for climbers and nature lovers",
          },
          item2: {
            id: "Saya turis asal Amerika, berkunjung ke Indonesia untuk liburan. Saya berkunjung ke Bandung yang merupakan ibu kota provinsi Jawa Barat dan saya sangat terkesima dengan budaya, dan juga keramahan orang-orang yang ada disana. Kulinernyapun saya nikmati dengan lahap. Saya tidak sabar menantikan berkunjung ke daerah Jawa Barat lainnya.",
            en: "I am a tourist from America, visiting Indonesia for a holiday. I visited Bandung which is the capital of West Java province and I was very impressed by the culture and friendliness of the people there. I also enjoyed the culinary delights. I can't wait to visit other areas of West Java.",
          },
        },
        reason: {
          item1: {
            title: {
              id: "Keindahan Alam yang Memikat",
              en: "Alluring Natural Beauty",
            },
            subtitle: {
              id: "Jawa Barat memiliki lanskap alam yang memukau, mulai dari gunung yang menjulang tinggi hingga pantai yang indah.",
              en: "West Java has stunning natural landscapes, from towering mountains to beautiful beaches.",
            },
          },
          item2: {
            title: {
              id: "Keanekaragaman Budaya",
              en: "Cultural Diversity",
            },
            subtitle: {
              id: "Kota Bandung yang kosmopolitan menawarkan pengalaman belanja dan kuliner yang tak tertandingi, sementara kota-kota bersejarah seperti Bogor dan Cirebon menyuguhkan warisan budaya berupa istana dan keraton yang megah.",
              en: "The cosmopolitan city of Bandung offers unrivaled shopping and culinary experiences, while historic cities such as Bogor and Cirebon boast cultural heritage in the form of magnificent palaces and palaces.",
            },
          },
          item3: {
            title: {
              id: " Kuliner yang Lezat",
              en: "Delicious Culinary",
            },
            subtitle: {
              id: "Sajian makanan khas seperti sate, soto, nasi liwet, dan makanan khas sunda lainnya dapat dinikmati di berbagai tempat. Jajanan tradisional seperti peuyeum dan surabi juga menjadi daya tarik tersendiri. ",
              en: "Typical food dishes such as satay, soto, nasi liwet, and other typical Sundanese foods can be enjoyed in various places. Traditional snacks such as peuyeum and surabi are also a special attraction.",
            },
          },
          item4: {
            title: {
              id: " Aktivitas Seru",
              en: "Fun Activities",
            },
            subtitle: {
              id: "Jawa Barat juga menawarkan berbagai aktivitas seru seperti arung jeram di Sungai Citarik, berkuda di Ranca Upas, atau bermain paralayang di Puncak.",
              en: "West Java also offers various exciting activities such as white water rafting on the Citarik River, horse riding at Ranca Upas, or paragliding at Puncak.",
            },
          },
        },
        gallery: {
          title: {
            id: "MARI BERKUNJUNG DAN LEBIH DEKAT DENGAN JABAR",
            en: "LET'S VISIT AND GET CLOSER TO JABAR",
          },
          subtitle: {
            id: "Keindahan dan kekayaan alam, budaya dan wisata Jawa Barat siap memesona anda!",
            en: "The beauty and wealth of nature, culture and tourism in West Java are ready to enchant you!",
          },
        },
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);

    this.lang = this.language;
  },
  methods: {
    changeLanguage() {
      if (this.lang == "id") {
        this.lang = "en";
      } else {
        this.lang = "id";
      }
      this.$emit("reqChangeLanguage");
    },
    //
    nextHeader() {
      if (this.content.header.active == 1) {
        this.content.header = {
          title1: {
            id: "CURUG LEUWI HEJO, ",
            en: "LEUWI HEJO WATERFALL, ",
          },
          title2: "BOGOR",
          subtitle: {
            id: "Leuwi Hejo memiliki beberapa curug dengan total jumlahnya ada lima. Mulai dari Curug Leuwi Hejo, Curug Leuwi Liek, Curug Leuwi Ciung, Curug Leuwi Cepet dan Curug Baliung.",
            en: "Leuwi Hejo has several waterfalls with a total of five. Starting from Waterfall Leuwi Hejo, Waterfall Leuwi Liek, Waterfall Leuwi Ciung, Waterfall Leuwi Cepet and Waterfall Baliung.",
          },
          address: "Jalan raya, Cibadak, Kec. Sukamakmur, Kabupaten Bogor",
          active: 2,
          img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        };
      } else if (this.content.header.active == 2) {
        this.content.header = {
          title1: {
            id: "PANTAI UJUNG GENTENG, ",
            en: "UJUNG GENTENG BEACH, ",
          },
          title2: "SUKABUMI",
          subtitle: {
            id: "Pantai berpasir putih yang dikelilingi terumbu karang yang terkenal dengan konservasi penyu & panorama sunset",
            en: "White sandy beach surrounded by coral reefs which is famous for turtle conservation & panoramic sunset views",
          },
          address: "Desa Gunung Batu, Kecamatan Ciracap, Kabupaten Sukabumi.",
          active: 3,
          img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        };
      }
    },
    prevHeader() {
      if (this.content.header.active == 3) {
        this.content.header = {
          title1: {
            id: "CURUG LEUWI HEJO, ",
            en: "LEUWI HEJO WATERFALL, ",
          },
          title2: "BOGOR",
          subtitle: {
            id: "Leuwi Hejo memiliki beberapa curug dengan total jumlahnya ada lima. Mulai dari Curug Leuwi Hejo, Curug Leuwi Liek, Curug Leuwi Ciung, Curug Leuwi Cepet dan Curug Baliung.",
            en: "Leuwi Hejo has several waterfalls with a total of five. Starting from Waterfall Leuwi Hejo, Waterfall Leuwi Liek, Waterfall Leuwi Ciung, Waterfall Leuwi Cepet and Waterfall Baliung.",
          },
          address: "Jalan raya, Cibadak, Kec. Sukamakmur, Kabupaten Bogor",
          active: 2,
          img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        };
      } else if (this.content.header.active == 2) {
        this.content.header = {
          title1: {
            id: "PANTAI PANGANDARAN, ",
            en: "PANGANDARAN BEACH, ",
          },
          title2: "PANGANDARAN",
          subtitle: {
            id: "Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan Bandung, Kecamatan Pangandaran, Kabupaten Pangandaran, Provinsi Jawa Barat.",
            en: "Pangandaran Beach is a mainstay tourist attraction of Pangandaran Regency which is located in the southeast of West Java, precisely in Pangandaran and Pananjung Villages, about 222 km south of Bandung, Pangandaran District, Pangandaran Regency, West Java Province.",
          },
          address: "Kecamatan Pangandaran, Kabupaten Pangandaran",
          active: 1,
          img: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        };
      }
    },
  },
};
</script>

<style>
</style>
