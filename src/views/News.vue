<template>
  <Navbar @changeLanguageRequest="changeLanguage" />

  <br /><br /><br />

  <header
    class="mx-auto grid xl:grid-cols-4 gap-10 pt-20 xl:px-20 md:px-5 px-3"
  >
    <!-- <span
      class="w-[1000px] h-[1000px] rounded-full absolute -left-[500px] -top-[500px] -rotate-[60deg]"
      style="
        background-image: radial-gradient(
          169.4% 89.55% at 94.76% 6.29%,
          #34e0a1 0%,
          rgba(239, 68, 68, 0) 100%
        );
      "
    ></span> -->

    <div
      class="xl:col-span-3 xl:h-[600px] md:h-[400px] h-[300px] bg-cover relative z-10 flex items-end md:p-10 p-4 after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:-z-10 bg-bottom rounded overflow-hidden"
      style="
        background-image: url('https://images.unsplash.com/photo-1567320032761-8d7fb7a5aa4e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
      "
    >
      <div class="w-[80%]">
        <h6
          class="text-[#34e0a1] md:mb-3 mb-1 font-semibold md:text-base text-sm"
        >
          ALAM
        </h6>
        <router-link to="/detail">
          <h2 class="xl:text-3xl md:text-2xl font-bold text-white">
            Gunung Ciremai Menjadi Daya Tarik Pendaki Gunung Indonesia
          </h2>
        </router-link>
        <p class="text-gray-200 mt-3 text-sm xl:block hidden">
          Gunung Ceremai adalah gunung berapi kerucut yang secara administratif
          termasuk dalam wilayah dua kabupaten, yakni Kabupaten Kuningan dan
          Kabupaten Majalengka, Provinsi Jawa Barat.
        </p>
      </div>
    </div>
    <div class="md:grid hidden xl:grid-cols-1 grid-cols-2 xl:gap-0 gap-10">
      <div>
        <div
          class="xl:h-[250px] h-[230px] after:rounded relative after:ontent-[''] after:bg-black/40 after:absolute after:inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1683471619890-fb7e51c3201c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="w-full xl:h-[250px] h-[230px] rounded object-cover"
          />
        </div>
      </div>

      <div>
        <div class="xl:my-5 my-3">
          <small class="text-[#34e0a1]">BUDAYA</small>
          <router-link to="/detail">
            <h5
              class="font-semibold xl:text-2xl text-base text-gray-800 dark:text-gray-200"
            >
              Gedung Sate Kantor Gubernur
            </h5>
          </router-link>
        </div>
        <div class="xl:my-5 my-3">
          <small class="text-[#34e0a1]">FUN EVENT</small>
          <router-link to="/detail">
            <h5
              class="font-semibold xl:text-2xl tex-base text-gray-800 dark:text-gray-200"
            >
              2.000 Pelari Meriahkan "Bandung Fun Run"
            </h5>
          </router-link>
        </div>
        <div class="xl:my-5 my-3">
          <small class="text-[#34e0a1] uppercase"> MAKANAN </small>
          <router-link to="/detail">
            <h5
              class="font-semibold xl:text-2xl tex-base text-gray-800 dark:text-gray-200"
            >
              Rasakan Nikmatnya Batagor, Makanan Khas Bandung
            </h5>
          </router-link>
        </div>
      </div>
    </div>
  </header>

  <main class="mx-auto mt-20 xl:px-20 md:px-10 px-3">
    <section>
      <div class="grid xl:grid-cols-4 md:gap-10">
        <div class="xl:col-span-3">
          <div class="flex justify-between items-center mb-5">
            <span
              class="flex gap-2 items-center text-red-500 text-xl font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2>TRENDING</h2>
            </span>
            <span
              class="flex items-center gap-2 text-sm hover:underline dark:text-gray-200"
            >
              <a href="#">View More</a>
            </span>
          </div>
          <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="subheader1"
                class="w-full h-[200px] object-cover rounded"
              />
              <router-link to="/detail">
                <h3 class="font-bold mt-2 dark:text-gray-200">
                  Sawah Lope, Wisata Bagi Para Pasangan Agar Hubungan Makin
                  Harmonis
                </h3>
              </router-link>
            </div>
            <div class="md:block hidden">
              <img
                src="https://images.unsplash.com/photo-1664551577638-9a212d646b9b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="subheader2"
                class="w-full h-[200px] object-cover rounded"
              />
              <router-link to="/detail">
                <h3 class="font-bold mt-2 dark:text-gray-200">
                  Saung Abah Bogor Menjadi Tempat Favorit Anak Muda Saat Ini
                </h3>
              </router-link>
            </div>
            <div class="xl:block hidden">
              <img
                src="https://images.unsplash.com/photo-1523952578875-e6bb18b26645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="subheader3"
                class="w-full h-[200px] rounded object-cover"
              />
              <router-link to="/detail">
                <h3 class="font-bold mt-2 dark:text-gray-200">
                  Curug Landung, Punya 7 Curug yang Indah
                </h3>
              </router-link>
            </div>
          </div>
        </div>
        <div class="border p-7 relative dark:border-gray-800 md:block hidden">
          <div
            class="bg-[#34e0a1] w-[50px] h-[50px] text-white flex items-center justify-center absolute top-0 left-[20px] xl:-translate-y-1/2"
          >
            <SolidEnvelopeIcon myClass="w-6" />
          </div>
          <h3 class="mb-5 xl:mt-6 mt-12 dark:text-gray-300">
            Berlangganan untuk mendapatkan notifikasi saat ada berita baru!
          </h3>
          <input
            type="text"
            class="border w-full py-3 px-3 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-200"
            placeholder="Email Address"
          />
          <router-link to="/detail">
            <button
              class="bg-[#34e0a1] px-10 py-2 rounded-full text-white mt-5 text-sm"
            >
              Subscribe
            </button>
          </router-link>
        </div>
      </div>
    </section>
    <hr class="my-10 dark:border-gray-800" />
    <section class="grid xl:grid-cols-4 gap-20 mt-10">
      <div class="xl:col-span-3 md:w-auto w-[95%]">
        <div
          class="md:grid md:grid-cols-5 items-center xl:gap-10 md:gap-5 md:mb-5 mb-16"
        >
          <div class="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1542897643-8158da5b4607?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-full h-[250px] rounded object-cover"
            />
          </div>
          <div class="md:col-span-3 md:mt-0 mt-3">
            <small class="text-[#34e0a1] font-semibold"> BUDAYA </small>

            <router-link to="/detail">
              <h3 class="text-xl font-bold mb-3 dark:text-gray-200">
                Upacara Seren Taun Akan Diadakan Tanggal 20 Maret Mendatang!
              </h3>
            </router-link>
            <p
              class="text-gray-700 dark:text-gray-300 xl:text-base md:text-sm text-[12px]"
            >
              Seren Taun adalah upacara adat panen padi masyarakat Sunda yang
              dilakukan setiap tahun. Upacara ini berlangsung khidmat dan
              semarak di berbagai desa adat Sunda.
            </p>

            <div class="mt-5 lg:flex gap-10">
              <p
                class="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <SolidMapIcon myClass="w-5" />
                <span>Cigugur, Kuningan</span>
              </p>
              <p
                class="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <CalendarDaysIcon myClass="w-5" />
                <span>1 Maret 2024</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="md:grid md:grid-cols-5 items-center xl:gap-10 md:gap-5 md:mb-5 mb-16"
        >
          <div class="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1517842810619-e7163c0010bd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-full h-[250px] rounded object-cover"
            />
          </div>
          <div class="md:col-span-3 md:mt-0 mt-3">
            <small class="text-[#34e0a1] font-semibold uppercase">
              ATRAKSI
            </small>
            <router-link to="/detail">
              <h3 class="text-xl font-bold mb-3 dark:text-gray-200">
                Selancar di Pinggir Pantai Pangandatan
              </h3>
            </router-link>
            <p
              class="text-gray-700 dark:text-gray-300 xl:text-base md:text-sm text-[12px]"
            >
              Pantai Pangandaran merupakan sebuah objek wisata andalan Kabupaten
              Pangandaran yang terletak di sebelah tenggara Jawa Barat, tepatnya
              di Desa Pangandaran dan Pananjung, sekitar 222 km dari selatan
              Bandung.
            </p>

            <div class="mt-5 lg:flex gap-10">
              <p
                class="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <SolidMapIcon myClass="w-5" />
                <span>Pangandaran, Pangandaran</span>
              </p>
              <p
                class="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <CalendarDaysIcon myClass="w-5" />
                <span>22 Februari 2024</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="md:grid md:grid-cols-5 items-center xl:gap-10 md:gap-5 md:mb-5 mb-16"
        >
          <div class="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1509861336350-714f2cf2af44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-full h-[250px] rounded object-cover"
            />
          </div>
          <div class="md:col-span-3 md:mt-0 mt-3">
            <small class="text-[#34e0a1] font-semibold">ALAM</small>
            <router-link to="/detail">
              <h3 class="text-xl font-bold mb-3 dark:text-gray-200">
                Curug Leuwi Hejo, Curug dengan Nuansa Alam Memukau
              </h3>
            </router-link>
            <p
              class="text-gray-700 dark:text-gray-300 xl:text-base md:text-sm text-[12px]"
            >
              Dikenal juga sebagai Curug Bengkok, Curug Leuwi Hejo dikenal
              karena keindahan pemandangan alamnya yang memesona karena aliran
              kecil dengan kolam cukup luas.
            </p>

            <div class="mt-5 lg:flex gap-10">
              <p
                class="flex md:mb-0 mb-2 md:text-base text-[12px] gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <SolidMapIcon myClass="w-5" />
                <span>Sukamakmur, Bogor</span>
              </p>
              <p
                class="flex gap-2 text-sm text-gray-600 dark:text-gray-400 items-center"
              >
                <CalendarDaysIcon myClass="w-5" />
                <span>24 Februari 2024</span>
              </p>
            </div>
          </div>
        </div>

        <Pagination />
      </div>
      <div class="xl:block hidden">
        <img
          src="./../assets/images/banner.png"
          alt="iniJabarBanner"
          class="rounded"
        />
      </div>
    </section>
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/GreenNavbar.vue";
import TopFooter from "./../components/TopFooter.vue";
import Footer from "./../components/Footer.vue";
import Pagination from "./../components/Pagination.vue";

// icons
import SolidMapIcon from "@/components/icons/solidMap.vue";
import CalendarDaysIcon from "@/components/icons/calendarDays.vue";
import SolidEnvelopeIcon from "@/components/icons/solidEnvelope.vue";

export default {
  props: ["language"],
  components: {
    Navbar,
    TopFooter,
    Footer,
    Pagination,

    //
    SolidMapIcon,
    CalendarDaysIcon,
    SolidEnvelopeIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      lang: "id",
    };
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
  },
};
</script>

<style>
</style>