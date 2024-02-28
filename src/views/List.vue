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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          officiis perferendis, optio adipisci veritatis reiciendis natus, porro
          incidunt, facere recusandae expedita atque distinctio maiores hic
          reprehenderit odio architecto suscipit ab.
        </p>
        <button class="flex text-sm mt-5 items-center gap-2 dark:text-gray-300">
          <span
            class="bg-[#34e0a1] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
            <arrowRightIcon myClass="w-6 text-white" />
          </span>
          <span>Lihat Wisata Budaya Lainnya</span>
        </button>
      </div>
      <div
        class="hoverCard relative rounded overflow-hidden cursor-pointer after:content-[''] hover:after:absolute after:inset-0 after:bg-[#34e0a1]/90 xl:block hidden"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
          </p>

          <span class="flex items-center gap-3">
            Lihat
            <arrowRightIcon myClass="w-5" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          officiis perferendis, optio adipisci veritatis reiciendis natus, porro
          incidunt, facere recusandae expedita atque distinctio maiores hic
          reprehenderit odio architecto suscipit ab.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
          </p>

          <span class="flex items-center gap-3">
            Lihat
            <arrowRightIcon myClass="w-5" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          officiis perferendis, optio adipisci veritatis reiciendis natus, porro
          incidunt, facere recusandae expedita atque distinctio maiores hic
          reprehenderit odio architecto suscipit ab.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
          </p>

          <span class="flex items-center gap-3">
            Lihat
            <arrowRightIcon myClass="w-5" />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          officiis perferendis, optio adipisci veritatis reiciendis natus, porro
          incidunt, facere recusandae expedita atque distinctio maiores hic
          reprehenderit odio architecto suscipit ab.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, amet!
          </p>

          <span class="flex items-center gap-3">
            Lihat
            <arrowRightIcon myClass="w-5" />
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

<style>
</style>