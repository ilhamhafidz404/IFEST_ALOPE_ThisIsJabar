<template>
  <Navbar />

  <!--  -->

  <Header />

  <main class="xl:px-20 md:px-10 px-5 pt-20">
    <Category />
    <TrendActivities />
  </main>

  <!--  -->
  <section
    class="mt-20 text-center bg-[#34e0a1] sm:py-20 py-10 xl:px-20 md:px-10 px-5"
  >
    <h2 class="font-waterbrush md:text-5xl text-4xl text-white">
      Tentang Jabar
    </h2>
    <h3 class="md:text-5xl text-2xl text-white">KATA MEREKA</h3>

    <div class="grid lg:grid-cols-2 md:mt-20 mt-10 xl:gap-20 gap-10">
      <div class="bg-white text-left p-10 rounded relative shadow">
        <p class="text-sm">
          Jawa Barat memiliki lanskap alam yang memukau, mulai dari gunung yang
          menjulang tinggi hingga pantai yang indah. Gunung Gede Pangrango,
          Gunung Tangkuban Perahu, dan Gunung Papandayan adalah destinasi
          populer bagi para pendaki dan pecinta alam
        </p>
        <h6 class="text-xl font-semibold mt-5">Ilham Hafidz</h6>
        <span class="text-xs">Pecinta Alam asal Kuningan</span>

        <img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-[100px] h-[100px] rounded-full object-cover absolute right-10 bottom-0 translate-y-1/3 border-[5px] border-white"
        />
      </div>
      <div
        class="bg-white text-left p-10 rounded relative shadow md:block hidden"
      >
        <p class="text-sm">
          Saya turis asal Amerika, berkunjung ke Indonesia untuk liburan. Saya
          berkunjung ke Bandung yang merupakan ibu kota provinsi Jawa Barat dan
          saya sangat terkesima dengan budaya, dan juga keramahan orang-orang
          yang ada disana. Kulinernyapun saya nikmati dengan lahap. Saya tidak
          sabar menantikan berkunjung ke daerah Jawa Barat lainnya.
        </p>
        <h6 class="text-xl font-semibold mt-5">Eveline Chopper</h6>
        <span class="text-xs">Turis asal Amerika</span>

        <img
          src="https://images.unsplash.com/photo-1699729589505-d1791e32d925?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          class="w-[100px] h-[100px] rounded-full object-cover absolute right-10 bottom-0 translate-y-1/3 border-[5px] border-white"
        />
      </div>
    </div>
  </section>

  <!--  -->

  <section class="xl:px-20 px-10 mt-20">
    <h4 class="sm:text-3xl text-2xl text-center">ALASAN</h4>
    <h4
      class="font-waterbrush sm:text-5xl text-4xl font-bold text-center md:mb-0 mb-16"
    >
      Kenapa Jabar?
    </h4>

    <div class="grid md:grid-cols-11 grid-cols-12">
      <div class="md:col-span-5 col-span-11 md:py-10 md:order-1 order-2">
        <div class="flex gap-5 justify-end items-center xl:mb-3 mb-7">
          <div class="xl:w-2/3 w-full md:text-right text-left md:pl-0 pl-4">
            <h5 class="text-xl font-semibold">Keindahan Alam yang Memikat</h5>
            <p class="text-sm mt-2">
              Jawa Barat memiliki lanskap alam yang memukau, mulai dari gunung
              yang menjulang tinggi hingga pantai yang indah.
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
            <h5 class="text-xl font-semibold">Keanekaragaman Budaya</h5>
            <p class="text-sm mt-2">
              Kota Bandung yang kosmopolitan menawarkan pengalaman belanja dan
              kuliner yang tak tertandingi, sementara kota-kota bersejarah
              seperti Bogor dan Cirebon menyuguhkan warisan budaya berupa istana
              dan keraton yang megah.
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
            <h5 class="text-xl font-semibold">Kuliner yang Lezat</h5>
            <p class="text-sm mt-2">
              Sajian makanan khas seperti sate, soto, nasi liwet, dan makanan
              khas sunda lainnya dapat dinikmati di berbagai tempat. Jajanan
              tradisional seperti peuyeum dan surabi juga menjadi daya tarik
              tersendiri.
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
            <h5 class="text-xl font-semibold">Aktivitas Seru</h5>
            <p class="text-sm mt-2">
              Jawa Barat juga menawarkan berbagai aktivitas seru seperti arung
              jeram di Sungai Citarik, berkuda di Ranca Upas, atau bermain
              paralayang di Puncak.
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
        MARI bERKUNJUNG DAN LEBIH DEKAT DENGAN JABAR
      </h2>
      <p class="text-sm mt-3 text-[#195e45]">
        Keindahan dan kekayaan alam, budaya dan wisata Jawa Barat siap memesona
        anda!
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

export default {
  components: {
    //
    Navbar,
    Header,
    Category,
    TrendActivities,
    Footer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
</style>
