<template>
  <Navbar />

  <header class="pt-20 bg-[#34e0a1] pb-20 text-white">
    <div
      class="xl:px-20 md:px-10 px-5 xl:flex xl:justify-between mt-20 items-center text-center"
    >
      <h1 class="text-3xl font-semibold">
        <span class="font-waterbrush text-5xl">Destinasi</span>
        Wisata di Jawa Barat
      </h1>
      <div>
        <router-link
          to="/map"
          class="inline-flex gap-2 bg-white text-gray-800 px-5 py-2 rounded-full xl:mt-0 mt-3"
        >
          <solidMapPinIcon myClass="w-6" />
          Lihat di Peta
        </router-link>
      </div>
    </div>
  </header>

  <main class="mt-20">
    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 xl:px-20 md:px-10 px-5 xl:gap-10 gap-5 mb-20"
    >
      <div class="xl:col-span-4 md:col-span-3">
        <h4
          class="font-semibold text-2xl flex items-center gap-2 dark:text-gray-100"
        >
          <span
            class="w-[40px] h-[40px] bg-[#34e0a1] rounded-full text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
              />
            </svg>
          </span>
          WISATA BUDAYA
        </h4>
        <p
          class="mt-3 md:text-sm text-xs text-gray-700 dark:text-gray-300 lg:w-[700px] w-full"
        >
          Nikmati keindahan budaya Indonesia dengan mengunjungi tempat-tempat
          bersejarah yang memukau. Jelajahi warisan budaya yang kaya akan cerita
          dan kekayaan arsitektur. Temukan pengalaman yang mendalam dan
          inspiratif di setiap sudut destinasi wisata budaya.
        </p>
        <button class="flex text-sm mt-5 items-center gap-2 dark:text-gray-300">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>Lihat Wisata Budaya Lainnya</span>
        </button>
      </div>

      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
      >
        <img
          src="https://banhub.jabarprov.go.id/wp-content/uploads/2020/12/angklung-day-01.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Hari Angklung
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Hari Angklung</h5>
          <p class="mt-2 mb-4">
            Rayakan Hari Angklung di Anjungan Jawa Barat dan rasakan keajaiban
            musik bambu. Saksikan pertunjukan budaya yang memukau dan nikmati
            pengalaman penuh warna dari warisan budaya yang kaya.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://banhub.jabarprov.go.id/wp-content/uploads/2020/12/parade-musik-daerah-08.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Parade Musik Daerah
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Parade Musik Daerah</h5>
          <p class="mt-2 mb-4">
            Nikmati Parade Musik Daerah di Anjungan Jawa Barat yang memukau.
            Temukan kekayaan budaya dari berbagai genre musik tradisional yang
            menampilkan keindahan khas daerah.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://banhub.jabarprov.go.id/wp-content/uploads/2020/12/pameran-kuliner-02.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Pameran Kuliner
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Pameran Kuliner</h5>
          <p class="mt-2 mb-4">
            Jelajahi kelezatan kuliner Jawa Barat melalui Pameran Kuliner di
            Anjungan Jawa Barat. Nikmati beragam hidangan tradisional yang
            menggugah selera dan ciptakan pengalaman kuliner yang tak
            terlupakan.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://banhub.jabarprov.go.id/wp-content/uploads/2020/12/gelar-semarak-tahun-baru-010.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Gelar Semarak Tahun Baru
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Gelar Semarak Tahun Baru</h5>
          <p class="mt-2 mb-4">
            Sambut Tahun Baru dengan semarak di Anjungan Jawa Barat. Nikmati
            pertunjukan budaya, kuliner, dan kegiatan menarik lainnya.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
    </div>

    <!--  -->

    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 xl:px-20 md:px-10 px-5 xl:gap-10 gap-5 mb-20"
    >
      <div class="xl:col-span-4 md:col-span-3">
        <h4
          class="font-semibold text-2xl flex items-center gap-2 dark:text-gray-100"
        >
          <span
            class="w-[40px] h-[40px] bg-[#34e0a1] rounded-full text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"
              />
            </svg>
          </span>
          Pantai
        </h4>
        <p
          class="mt-3 md:text-sm text-xs text-gray-700 lg:w-[700px] w-full dark:text-gray-300 md:text-left text-start"
        >
          Jelajahi keindahan alam yang menakjubkan di tepi pantai yang memukau.
          Rasakan sensasi angin sepoi-sepoi yang menyegarkan dan nikmati
          panorama laut yang memukau. Temukan ketenangan dan keindahan yang tak
          terlupakan di destinasi pantai terbaik kami.
        </p>
        <button class="flex text-sm mt-5 items-center gap-2 dark:text-gray-300">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6 text-white" />
          </span>
          <span>Lihat Pantai Lainnya</span>
        </button>
      </div>

      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
      >
        <img
          src="https://asset.kompas.com/crops/jGIL7uNqglJUu4mhlZw2eN-FxQU=/27x0:1106x719/750x500/data/photo/2023/04/25/6447846b3dd27.png"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Pantai Batu Hiu
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Pantai Batu Hiu</h5>
          <p class="mt-2 mb-4">
            Rasakan keindahan alam di Pantai Batu Hiu. Nikmati ombak yang
            menghantam karang-karang menjulang dan eksplorasi kehidupan laut
            yang menakjubkan.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://live.staticflickr.com/5496/12713713454_a912416ed0_z.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Pantai Sayang Heulang
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Pantai Sayang Heulang</h5>
          <p class="mt-2 mb-4">
            Jelajahi keindahan alam di Pantai Sayang Heulang. Rasakan angin
            sepoi-sepoi yang menyegarkan dan panorama pantai yang memikat hati.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://assets.kompasiana.com/statics/crawl/556507710423bd364a8b4567.jpeg?t=o&v=770"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Pantai Santolo
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Pantai Santolo</h5>
          <p class="mt-2 mb-4">
            Sambut deburan ombak dan pesona alam yang menakjubkan di Pantai
            Santolo. Nikmati keindahan pasir putih, air biru yang jernih, dan
            suasana pantai yang menyejukkan.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/944/2023/12/12/FotoJet-2023-12-12T091157782-1633934275.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Pantai Madasari
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Pantai Madasari</h5>
          <p class="mt-2 mb-4">
            Temukan pesona eksotis di Pantai Madasari. Rasakan keindahan alam
            yang memikat dengan pasir putihnya, air laut yang jernih, dan
            pemandangan matahari terbenam yang menakjubkan.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
    </div>

    <!--  -->

    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 xl:px-20 md:px-10 px-5 xl:gap-10 gap-5 mb-20"
    >
      <div class="xl:col-span-4 md:col-span-3">
        <h4
          class="font-semibold text-2xl flex items-center gap-2 dark:text-gray-100"
        >
          <span
            class="w-[40px] h-[40px] bg-[#34e0a1] rounded-full text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
          </span>
          Taman Main Anak
        </h4>
        <p
          class="mt-3 md:text-sm text-xs text-gray-700 lg:w-[700px] w-full dark:text-gray-300 md:text-left text-start"
        >
          Nikmati petualangan seru di Taman Main Anak yang penuh dengan
          kegembiraan dan keceriaan! Rasakan sensasi kebebasan di antara riuhnya
          tawa dan canda di tempat ini. Temukan keindahan alam sambil bermain
          bersama keluarga dan teman-teman terdekat.
        </p>
        <button class="flex text-sm mt-5 items-center gap-2 dark:text-gray-300">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6 text-white" />
          </span>
          <span>Lihat Taman Main Lainnya</span>
        </button>
      </div>

      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
      >
        <img
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_869/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/vijuqpmzdwthfdykyuhl/TiketMasukTheJungleWaterparkAdventure.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          The Jungle Waterpark
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">The Jungle Waterpark</h5>
          <p class="mt-2 mb-4">
            Rasakan keseruan di The Jungle Waterpark. Nikmati wahana air yang
            mengasyikkan, kolam renang yang menyegarkan, dan beragam atraksi
            seru untuk semua umur.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2023/06/28/trans-snow-world-bekasi_169.jpeg?w=1200"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Trans Studio Bandung
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Trans Studio Bandung</h5>
          <p class="mt-2 mb-4">
            Nikmati petualangan seru di Trans Studio Bandung dengan wahana
            menarik dan pertunjukan menghibur.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://i.pinimg.com/originals/51/fa/32/51fa3256435afd2b817275af13acea24.png"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Orchid Forest Cikole
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Orchid Forest Cikole</h5>
          <p class="mt-2 mb-4">
            Temukan keindahan alam di Orchid Forest Cikole. Nikmati suasana
            hutan yang sejuk dan indah, sambil menikmati kecantikan ribuan
            anggrek yang bermekaran.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://i0.wp.com/traveldiva.id/wp-content/uploads/2021/06/Taman-Safari-Prigen.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Taman Safari Bandung
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Taman Safari Bandung</h5>
          <p class="mt-2 mb-4">
            Jelajahi kehidupan liar di Taman Safari Bandung. Nikmati petualangan
            seru melihat berbagai spesies hewan yang berkeliaran bebas dalam
            habitat alaminya.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
    </div>

    <!--  -->

    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 xl:px-20 md:px-10 px-5 xl:gap-10 gap-5 mb-20"
    >
      <div class="xl:col-span-4 md:col-span-3">
        <h4
          class="font-semibold text-2xl flex items-center gap-2 dark:text-gray-100"
        >
          <span
            class="w-[40px] h-[40px] bg-[#34e0a1] rounded-full text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
          </span>
          Kafe
        </h4>
        <p
          class="mt-3 md:text-sm text-xs text-gray-700 lg:w-[700px] w-full dark:text-gray-300 md:text-left text-start"
        >
          Nikmati suasana santai dan cita rasa istimewa di kafe-kafe terbaik
          kota. Dari kopi aromatik hingga kue-kue lezat, setiap sudut kafe ini
          menjanjikan pengalaman yang menggugah selera dan memanjakan indra.
          Temukan tempat favoritmu dan buat momen berharga bersama orang-orang
          terkasih!
        </p>
        <button class="flex text-sm mt-5 items-center gap-2 dark:text-gray-300">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6 text-white" />
          </span>
          <span>Lihat Kafe Lainnya</span>
        </button>
      </div>

      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
      >
        <img
          src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/119/2023/07/24/Screenshot-2023-07-24-111828-355040835.png"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Arunika Eatery
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Arunika Eatery</h5>
          <p class="mt-2 mb-4">
            Rasakan lezatnya hidangan di Arunika Eatery. Nikmati sajian makanan
            khas dengan citarasa yang autentik dan suasana yang menyenangkan.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://assets.pikiran-rakyat.com/crop/0x271:1024x1189/750x500/photo/2023/06/07/2305627910.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Teduh Coffe
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Teduh Coffee</h5>
          <p class="mt-2 mb-4">
            Temukan kedamaian dan kenikmatan di Teduh Coffee. Nikmati suasana
            yang tenang sambil menyeruput kopi berkualitas tinggi dan camilan
            lezat.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://radarcirebon.disway.id/upload/da912a42113e4159f171a8dfe4f88df0.jpg"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          Botanika
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">Botanika</h5>
          <p class="mt-2 mb-4">
            Rasakan sensasi yang unik di Botanika. Nikmati suasana yang
            menyegarkan dengan kopi berkualitas dan pilihan hidangan yang lezat.
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90"
      >
        <img
          src="https://assets-pergikuliner.com/RLmeJhFlWMhDcFYoRZ_Ge6YNU0g=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/2352362/picture-1636528335.JPG"
          alt=""
          class="w-full h-[300px] object-cover"
        />

        <h5
          class="titleHoverCard absolute bottom-5 pl-5 pr-3 rounded-r py-1 font-semibold text-white bg-[#34e0a1]"
        >
          BBQ Mountain Boys
        </h5>

        <div
          class="contentHoverCard hidden text-xs absolute bottom-0 lg:p-5 p-3 z-10 text-white"
        >
          <h5 class="font-semibold text-base">BBQ Mountain Boys</h5>
          <p class="mt-2 mb-4">
            Nikmati BBQ autentik di BBQ Mountain Boys. Aroma dan rasa yang
            menggugah selera menanti Anda!
          </p>
          <span class="flex items-center gap-3">
            Lihat <arrowRightIcon myClass="w-5" />
          </span>
        </div>
      </div>
    </div>
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
//
import Navbar from "@/components/GreenNavbar.vue";
import TopFooter from "@/components/TopFooter.vue";
import Footer from "@/components/Footer.vue";

//
import arrowRightIcon from "./../components/icons/arrowRight.vue";
import solidMapPinIcon from "./../components/icons/solidMapPin.vue";
export default {
  components: {
    Navbar,
    TopFooter,
    Footer,

    arrowRightIcon,
    solidMapPinIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style></style>
