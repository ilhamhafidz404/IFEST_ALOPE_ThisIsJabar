<template>
  <Navbar />

  <section
    class="lg:px-20 md:px-10 px-3 md:pb-14 pb-10 pt-32 lg:flex lg:justify-between lg:items-center bg-[#34e0a1] dark:bg-slate-900 text-white relative overflow-hidden border-b-2 border-[#34e0a1]"
  >
    <div class="relative z-10 xl:w-1/2 md:w-2/3 w-full mx-auto">
      <div class="flex gap-3 items-center justify-center">
        <span>
          <SolidMapIcon myClass="w-14 md:block hidden" />
        </span>
        <h3
          class="font-waterbrush font-bold md:text-5xl text-3xl lg:text-left text-center"
        >
          Peta <span class="md:text-4xl text-2xl">Interaktif</span>
        </h3>
      </div>
      <section class="relative">
        <div class="flex mt-5 items-center gap-2">
          <input
            type="text"
            class="bg-white dark:bg-slate-700 dark:text-gray-200 px-3 py-3 rounded w-full text-gray-800 md:text-base text-xs"
            placeholder="Cari Destinasi..."
            v-model="filterSearch"
          />
          <button
            class="bg-white dark:bg-slate-800 hover:opacity-85 text-gray-800 dark:text-gray-200 py-3 rounded px-5 md:flex hidden gap-2 items-center"
          >
            <MagnifyingGlassIcon myClass="w-5" />
            Cari
          </button>
        </div>
        <div
          v-if="!filterSearch"
          class="mt-5 md:flex hidden justify-center gap-2"
        >
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'all'"
          >
            Semua
          </span>
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 pl-3 pr-4 py-1 rounded-full md:text-sm text-xs cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'pantai'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4"
            >
              <path
                fill-rule="evenodd"
                d="M19.449 8.448 16.388 11a4.52 4.52 0 0 1 0 2.002l3.061 2.55a8.275 8.275 0 0 0 0-7.103ZM15.552 19.45 13 16.388a4.52 4.52 0 0 1-2.002 0l-2.55 3.061a8.275 8.275 0 0 0 7.103 0ZM4.55 15.552 7.612 13a4.52 4.52 0 0 1 0-2.002L4.551 8.45a8.275 8.275 0 0 0 0 7.103ZM8.448 4.55 11 7.612a4.52 4.52 0 0 1 2.002 0l2.55-3.061a8.275 8.275 0 0 0-7.103 0Zm8.657-.86a9.776 9.776 0 0 1 1.79 1.415 9.776 9.776 0 0 1 1.414 1.788 9.764 9.764 0 0 1 0 10.211 9.777 9.777 0 0 1-1.415 1.79 9.777 9.777 0 0 1-1.788 1.414 9.764 9.764 0 0 1-10.212 0 9.776 9.776 0 0 1-1.788-1.415 9.776 9.776 0 0 1-1.415-1.788 9.764 9.764 0 0 1 0-10.212 9.774 9.774 0 0 1 1.415-1.788A9.774 9.774 0 0 1 6.894 3.69a9.764 9.764 0 0 1 10.211 0ZM14.121 9.88a2.985 2.985 0 0 0-1.11-.704 3.015 3.015 0 0 0-2.022 0 2.985 2.985 0 0 0-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 0 0 0 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 0 0 1.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 0 0 0-2.022 2.985 2.985 0 0 0-.704-1.11Z"
                clip-rule="evenodd"
              />
            </svg>
            Pantai
          </span>
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 pl-3 pr-4 py-1 rounded-full md:text-sm text-xs cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'alam'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clip-rule="evenodd"
              />
            </svg>
            Alam
          </span>
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 pl-3 pr-4 py-1 rounded-full md:text-sm text-xs cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'kuliner'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4"
            >
              <path
                d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z"
              />
            </svg>
            Kuliner
          </span>
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 pl-3 pr-4 py-1 rounded-full md:text-sm text-xs cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'budaya'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clip-rule="evenodd"
              />
            </svg>
            Budaya
          </span>
          <span
            class="bg-white dark:bg-slate-700 text-black dark:text-gray-200 pl-3 pr-4 py-1 rounded-full md:text-sm text-xs cursor-pointer inline-flex gap-1 items-center"
            @click="this.filterCategory = 'taman'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                clip-rule="evenodd"
              />
            </svg>
            Taman
          </span>
        </div>
        <div
          v-if="filterSearch"
          class="bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 md:mt-5 mt-3 rounded shadow max-h-[250px] overflow-hidden"
        >
          <span
            class="inline-block md:my-4 md:ml-7 my-3 ml-4 md:text-sm text-xs"
            >Hasil Pencarian :</span
          >
          <div class="max-h-[250px] overflow-y-auto pb-20">
            <a
              href="#interactive"
              v-for="marker in filteredDestination"
              :key="marker.name"
              class="hover:bg-[#5ae6b3]/20 md:py-5 md:px-7 px-4 py-3 cursor-pointer inline-block w-full"
              @click="setFocus(marker.position)"
            >
              <h6 class="md:text-xl text-base font-semibold">
                {{ marker.name }}
              </h6>
              <p class="md:text-sm text-xs text-gray-600 dark:text-gray-300">
                {{ marker.location }}
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </section>

  <section id="interactive" class="scroll-mt-20">
    <GoogleMap
      api-key="AIzaSyBKDtW47ZKzT5JPduQvi3gUFNHNZmXk-FU"
      style="width: 100%; height: calc(100vh - 100px)"
      :center="mapOptions.center"
      :zoom="mapOptions.zoom"
      :restriction="mapOptions.restriction"
      :minZoom="mapOptions.minZoom"
      :maxZoom="mapOptions.maxZoom"
      :zoomControl="false"
      :mapTypeControl="false"
      :streetViewControl="false"
      :disableDefaultUI="true"
      :styles="mapStyles"
    >
      <Marker
        v-for="marker in filteredDestinationByCategory"
        :key="marker.name"
        :options="{ position: marker.position }"
      >
        <InfoWindow>
          <div id="content">
            <h1 class="text-xl font-bold">{{ marker.name }}</h1>
            <div class="mt-3">
              <p class="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorem inventore eum, recusandae beatae culpa quisquam amet
                laborum accusantium, obcaecati maiores sit et expedita,
                molestiae adipisci ducimus. Repellat exercitationem quos nobis.
              </p>
              <a
                href="#detail"
                class="bg-[#5ae6b2] hover:bg-[#5ae6b2]/80 px-5 py-2 rounded text-sm text-white"
                @click="showDetail(marker)"
              >
                Lihat Detail
              </a>
            </div>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  </section>

  <section id="detail" class="scroll-mt-16">
    <div
      v-if="detail.title"
      class="grid xl:grid-cols-8 rounded mt-20 gap-8 border border-[#5ae6b2] md:mx-20 mx-5 mb-20 dark:bg-slate-800"
    >
      <div class="xl:col-span-3">
        <img
          src="https://img.antaranews.com/cache/1200x800/2023/06/29/IMG_20230629_160713.jpg.webp"
          class="rounded-l border shadow"
        />
      </div>
      <div class="xl:col-span-5 flex items-center">
        <div class="xl:px-0 xl:pb-0 md:px-10 px-5 pb-5">
          <h5 class="text-2xl font-bold mb-4 mt-3 dark:text-gray-100">
            Waduk Darma
          </h5>
          <div>
            <p
              class="md:text-sm text-xs mb-2 flex items-center gap-2 dark:text-gray-200"
            >
              <SolidMapPinIcon myClass="w-4 md:inline-block hidden" />
              Desa Megamendung, Kecamatan Megamendung, Kabupaten Bogor
            </p>
            <p
              class="md:text-sm text-xs mb-2 flex items-center gap-2 dark:text-gray-100"
            >
              <SolidBankNotesIcon myClass="w-4 md:inline-block hidden" />
              Rp 10.000 / Orang
            </p>
          </div>
          <p class="mb-10 mt-7 md:text-base text-sm dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            inventore eum, recusandae beatae culpa quisquam amet laborum
            accusantium, obcaecati maiores sit et expedita, molestiae adipisci
            ducimus. Repellat exercitationem quos nobis.
          </p>
          <a
            href="#interactive"
            class="border border-[#5ae6b2] hover:bg-[#5ae6b2] px-5 py-2 rounded text-sm text-[#5ae6b2] hover:text-white mr-3"
            @click="hiddenDetail()"
          >
            Batal
          </a>
          <router-link
            to="/detail"
            class="bg-[#5ae6b2] hover:bg-[#5ae6b2]/80 px-5 py-2 rounded text-sm text-white"
          >
            Lihat Artikel
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/MapNavbar.vue";
import TopFooter from "./../components/TopFooter.vue";
import Footer from "./../components/Footer.vue";

// icons
import SolidMapIcon from "@/components/icons/solidMap.vue";
import SolidMapPinIcon from "@/components/icons/solidMapPin.vue";
import SolidBankNotesIcon from "@/components/icons/solidBankNotes.vue";
import MagnifyingGlassIcon from "@/components/icons/magnifyingGlass.vue";

// gmap
import { defineComponent } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default defineComponent({
  components: {
    GoogleMap,
    Marker,
    InfoWindow,
    // components
    Navbar,
    TopFooter,
    Footer,
    //icons
    SolidMapIcon,
    MagnifyingGlassIcon,
    SolidMapPinIcon,
    SolidBankNotesIcon,
  },
  data() {
    return {
      filterSearch: "",
      filterCategory: "all",
      detail: {
        title: "",
        body: "",
      },

      mapStyles: [],

      markers: [
        {
          name: "Curug Panjang",
          keyword: "curug",
          location: "Desa Megamendung, Kecamatan Megamendung, Kabupaten Bogor",
          position: {
            lat: -6.6462737,
            lng: 106.9452167,
          },
          InfoWindow: {
            content: "",
          },
        },
        {
          name: "Waduk Darma",
          keyword: "waduk",
          location: "Desa Jagara, Kecamatan Darma, Kabupaten Kuningan",
          position: {
            lat: -7.0175595,
            lng: 108.4060311,
          },
        },
        {
          name: "Waduk Jatiluhur",
          keyword: "waduk",
          location: "Desa Citarum, Kecamatan Jatiluhur, Kabupaten Purwakarta",
          position: {
            lat: -6.5236008,
            lng: 107.3883286,
          },
        },
        {
          name: "Waduk Jatigede",
          keyword: "waduk",
          location: "Desa Cijeunjing, Kecamatan Jatigede, Sumedang",
          position: {
            lat: -6.861977,
            lng: 108.095184,
          },
        },
        {
          name: "Taman Safari",
          keyword: "taman",
          location: "Cibeureum, Kec. Cisarua, Kabupaten Bogor",
          position: {
            lat: -6.7206149,
            lng: 106.9507167,
          },
        },
        {
          name: "Pantai Ujung Genteng",
          keyword: "pantai",
          location:
            "Jl. Cipaku 5 No.4, Ujung Genteng, Kec. Ciracap, Kabupaten Sukabumi",
          position: {
            lat: -7.3606383,
            lng: 106.398406,
          },
        },
        {
          name: "Pantai Pangandaran",
          keyword: "pantai",
          location: "Desa Pangandaran dan Pananjung",
          position: {
            lat: -7.6875308,
            lng: 108.6386711,
          },
        },
        //
        {
          name: "Curug Putri",
          keyword: "alam",
          location:
            "Jl. Palutungan, Cisantana, Kec. Cigugur, Kabupaten Kuningan",
          position: {
            lat: -6.9472503,
            lng: 108.4314316,
          },
        },
        {
          name: "Kebun Raya Kuningan",
          keyword: "alam",
          location: "Desa Padabeunghar, Pasawahan, Kuningan.",
          position: {
            lat: -6.8134092,
            lng: 108.4001782,
          },
        },
        {
          name: "Curug Bangkong",
          keyword: "alam",
          location:
            "Kertawirama, Kec. Nusaherang, Kabupaten Kuningan, Jawa Barat 45563",
          position: {
            lat: -7.0070558,
            lng: 108.4234702,
          },
        },
        {
          name: "Sanggar Tri Tunggal Budaya",
          keyword: "budaya",
          location: "Tegalwangi, Kec. Weru, Kabupaten Cirebon",
          position: {
            lat: -6.7070876,
            lng: 108.4857529,
          },
        },
        {
          name: "Paseban Tri Panca Tunggal",
          keyword: "budaya",
          location: "Jalan, Sukamulya, Cigugur, Kuningan",
          position: {
            lat: -6.9694539,
            lng: 108.4541347,
          },
        },
        {
          name: "Sanggar Seni Putra Budaya",
          keyword: "budaya",
          location:
            "Muara Karang Anyar, Mertasinga, Kec. Gunungjati, Kabupaten Cirebon",
          position: {
            lat: -6.6517489,
            lng: 108.5366788,
          },
        },
        {
          name: "Rujak Kangkung Dan Tutut",
          keyword: "kuliner",
          location:
            "Jl. RE. Martadinata No.111, Ciporang, Kec. Kuningan, Kabupaten Kuningan",
          position: {
            lat: -6.9697439,
            lng: 108.4852507,
          },
        },
        {
          name: "Nasi Jamblang Ibu Nur",
          keyword: "kuliner",
          location:
            "Jl. Cangkring 2 No.34, Kejaksan, Kec. Kejaksan, Kota Cirebon",
          position: {
            lat: -6.7144909,
            lng: 108.5369415,
          },
        },
        {
          name: "Batagor Bandung",
          keyword: "kuliner",
          location:
            "Jl. Ir. H. Juanda No.91, Dago, Kec. Cimenyan, Kota Bandung",
          position: {
            lat: -6.8978494,
            lng: 107.6010729,
          },
        },
        {
          name: "Taman Kota Kuningan",
          keyword: "taman",
          location:
            "Jl. Veteran No.36, Kuningan, Kec. Kuningan, Kabupaten Kuningan",
          position: {
            lat: -6.982588,
            lng: 108.4746496,
          },
        },
        {
          name: "Taman Cisantana",
          keyword: "taman",
          location:
            "Cisantana, Kec. Cigugur, Kabupaten Kuningan, Jawa Barat 45552",
          position: {
            lat: -6.9464258,
            lng: 108.4424489,
          },
        },
        {
          name: "Pantai Jayanti",
          keyword: "pantai",
          location:
            "Jl. Pantai Jayanti, Cidamar, Kec. Cidaun, Kabupaten Cianjur",
          position: {
            lat: -7.4445871,
            lng: 107.0491292,
          },
        },
      ],
      mapOptions: {
        zoom: 10,
        minZoom: 9,
        maxZoom: 11,
        center: { lat: -6.875833, lng: 107.611111 },
        restriction: {
          latLngBounds: {
            north: -5.8, // Ujung Kulon
            south: -8.61667, // Cilacap
            west: 106.2, // Batas Kabupaten Sukabumi
            east: 108.75, // Cirebon
          },
        },
      },
    };
  },
  methods: {
    setFocus(position) {
      this.mapOptions.minZoom = 7;
      this.mapOptions.maxZoom = 15;
      this.mapOptions.zoom = 7;

      setTimeout(() => {
        this.mapOptions.zoom = 15;
        this.mapOptions.minZoom = 9;
        this.mapOptions.center = position;
      }, 1500);

      this.filterSearch = "";
    },
    showDetail(marker) {
      this.detail.title = marker.name;
    },
    hiddenDetail() {
      this.detail.title = "";
    },
  },
  mounted() {
    window.scrollTo(0, 0);

    // L
    const gmapdark = localStorage.getItem("vueuse-color-scheme");

    if (gmapdark != "light") {
      this.mapStyles = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#242f3e" }],
        },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ];
    }
  },
  computed: {
    filteredDestination() {
      return this.markers.filter((marker) => {
        if (this.filterSearch === "" || this.filterSearch.length <= 4) {
          return this.markers;
        } else {
          return (
            marker.keyword.toLowerCase() === this.filterSearch.toLowerCase() ||
            marker.name.toLowerCase() === this.filterSearch.toLowerCase()
          );
        }
      });
    },
    filteredDestinationByCategory() {
      return this.markers.filter((marker) => {
        if (this.filterCategory === "" || this.filterCategory === "all") {
          return this.markers;
        } else {
          return (
            marker.keyword.toLowerCase() ===
              this.filterCategory.toLowerCase() ||
            marker.name.toLowerCase() === this.filterCategory.toLowerCase()
          );
        }
      });
    },
  },
  // setup() {
  //   const center = { lat: -6.875833, lng: 107.611111 };

  //   const markerOptions = {
  //     position: center,
  //     label: "Waduk Darma",
  //     title: "LADY LIBERTY",
  //     icon: "./../assets/images/header/1.jpg",
  //   };

  //   return { center, markerOptions };
  // },
});
</script>
