<template>
  <section class="grid xl:grid-cols-4 items-center xl:gap-20 gap-10">
    <div class="lg:col-span-1">
      <h4 class="text-xl">Kategori</h4>
      <h3 class="font-waterbrush text-5xl">Wisata Budaya</h3>
      <p class="text-sm mt-5 text-gray-800">
        Budaya Jawa Barat yang kaya dan terjaga dari nenek moyang hingga
        sekarang.
      </p>

      <button class="flex text-sm mt-5 items-center gap-2">
        <span
          class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
        >
          <arrowRightIcon myClass="w-6" />
        </span>
        Lihat Lebih Lengkap
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
            class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
          >
            Gedung Sate
          </h5>

          <div
            class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
          >
            <h5 class="font-semibold text-base">Gedung Sate</h5>
            <p class="mt-2 mb-4">
              Merupakan gedung kantor Gubernur Jawa Barat. Gedung ini memiliki
              ciri khas berupa ornamen tusuk sate pada menara sentralnya
            </p>

            <span class="flex items-center gap-3">
              Lihat
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
            class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
          >
            Kampung Naga
          </h5>

          <div
            class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
          >
            <h5 class="font-semibold text-base">KAMPUNG NAGA</h5>
            <p class="mt-2 mb-4">
              Merupakan sebuah kampung adat yang masih lestari. Masyarakatnya
              masih memegang adat tradisi nenek moyang mereka
            </p>

            <span class="flex items-center gap-3">
              Lihat
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
            class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
          >
            Keraton Kasepuhan
          </h5>

          <div
            class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
          >
            <h5 class="font-semibold text-base">Keraton Kasepuhan</h5>
            <p class="mt-2 mb-4">
              Makna di setiap sudut arsitektur keraton ini pun terkenal paling
              bersejarah. Halaman depan keraton ini dikelilingi tembok bata
              merah dan terdapat pendopo di dalamnya.
            </p>

            <span class="flex items-center gap-3">
              Lihat
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
            class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
          >
            Saung Angklung Udjo
          </h5>

          <div
            class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
          >
            <h5 class="font-semibold text-base">Saung Angklung Udjo</h5>
            <p class="mt-2 mb-4">
              Adalah tempat pertunjukan, pusat kerajinan tangan dari bambu, dan
              workshop instrumen musik dari bambu.
            </p>

            <span class="flex items-center gap-3">
              Lihat
              <arrowRightIcon myClass="w-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="grid xl:grid-cols-4 lg:grid-cols-3 items-center xl:gap-20 lg:gap-5 xl:mt-10 mt-20"
  >
    <div class="xl:col-span-1 lg:col-span-3">
      <h4 class="text-xl">Kategori</h4>
      <h3 class="font-waterbrush text-5xl">Kuliner Khas</h3>
      <p class="text-sm mt-5 text-gray-800">
        Kuliner yang menggoda dan menggiurkan untuk disantap. Makanan khas
        dengan resep turun termurun.
      </p>

      <button class="flex text-sm mt-5 items-center gap-2">
        <span
          class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
        >
          <arrowRightIcon myClass="w-6" />
        </span>
        Lihat Lebih Lengkap
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
            class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
          >
            Nasi Timbel
          </h5>

          <div
            class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
          >
            <h5 class="font-semibold text-base">Nasi Timbel</h5>
            <p class="mt-2 mb-4">
              Adalah nasi yang dibungkus dengan daun pisang kemudian dikukus,
              dapat dibakar setelah dikukus untuk menambah aroma
            </p>

            <span class="flex items-center gap-3">
              Lihat
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
            <p class="mt-2 mb-4">
              Adalah jajanan tradisional yang berasal dari Indonesia yang
              diperkirakan sudah dikenal sejak zaman Kerajaan Mataram
            </p>

            <span class="flex items-center gap-3">
              Lihat
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
            <p class="mt-2 mb-4">
              Merupakan jajanan khas Bandung yang kini sudah dikenal hampir di
              seluruh wilayah Indonesia.
            </p>

            <span class="flex items-center gap-3">
              Lihat
              <arrowRightIcon myClass="w-5" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <button
      class="bg-[#34e0a1] hover:bg-[#34e0a1]/80 text-white font-semibold px-5 py-2 text-sm rounded mx-auto xl:col-span-4 lg:col-span-3 xl:mt-0 mt-10"
    >
      Lihat Kategori Lainnya
    </button>
  </section>
</template>

<script>
import arrowRightIcon from "./../components/icons/arrowRight.vue";
export default {
  components: {
    arrowRightIcon,
  },
};
</script>

<style>
</style>