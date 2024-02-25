<template>
  <Navbar />

  <header
    className="grid lg:grid-cols-2 md:gap-10 items-center xl:px-20 md:px-10 px-5 lg:h-[800px] h-[700px] relative"
  >
    <div>
      <h2 className="md:text-5xl text-3xl font-bold mb-5 dark:text-gray-100">
        SUBSCRIPTION
        <span className="text-[#5ae6b2]">.</span>
      </h2>
      <p className="md:text-sm text-[12px] text-gray-800 dark:text-gray-300">
        Berlangganan sekarang untuk mendapatkan konten eksklusif dan tetap
        terinformasi dengan berita dan penawaran terbaru
      </p>
      <div className="relative mt-10 flex">
        <input
          type="text"
          className="border px-5 py-2 dark:bg-gray-700 dark:border-gray-700 bg-gray-100 dark:text-gray-200 text-gray-800 rounded-l  md:max-w-[350px] max-w-[200px]"
          placeholder="Email..."
        />
        <button
          className="bg-[#5ae6b2]  px-5 py-2 text-white border border-[#5ae6b2] hover:bg-[#5ae6b2]/80 hover:border-[#5ae6b2]/80 rounded-r md:text-base text-sm"
        >
          Subscribe
        </button>
      </div>
      <div className="mt-10">
        <h3
          className="font-semibold mb-3 md:text-base text-sm md:text-left text-center"
        >
          Subscribe lewat :
        </h3>
        <div className="flex md:justify-start justify-center gap-10">
          <div className="flex flex-col md:items-start items-center">
            <img
              src="../assets/images/icon/gmail.png"
              alt="gmailIcon"
              className="w-[30px]"
            />
            <p className="mt-2 dark:text-gray-300 text-sm">Gmail</p>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <img
              src="../assets/images/icon/instagram.png"
              alt="instagramIcon"
              className="w-[30px]"
            />
            <p className="mt-2 dark:text-gray-300 text-sm">Instagram</p>
          </div>
          <div className="flex flex-col md:items-start items-center">
            <img
              src="../assets/images/icon/facebook.png"
              alt="facebookIcon"
              className="w-[30px]"
            />
            <p className="mt-2 dark:text-gray-300 text-sm">Facebook</p>
          </div>
        </div>
      </div>
      <hr className="my-5 dark:border-gray-800" />
      <p
        className="flex gap-3 items-center mt-5 text-gray-700 dark:text-gray-300 md:text-sm text-[12px] md:text-left text-center"
      >
        <SolidBellAlertIcon myClass="w-6" /> Mendapatkan notifikasi ketika ada
        berita baru.
      </p>
    </div>
    <div className="h-[450px] lg:flex hidden lg:justify-start gap-5">
      <div className="h-full w-[40%] -translate-y-10">
        <img
          src="https://images.unsplash.com/photo-1523952578875-e6bb18b26645?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZSUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
          data-aos="fade-up"
          data-aos-once="true"
        />
      </div>
      <div className="h-full w-[40%] translate-y-10">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover"
          data-aos="fade-down"
          data-aos-once="true"
        />
      </div>
    </div>
  </header>
  <main className="grid lg:grid-cols-3 gap-10 lg:px-20 md:px-10 px-5 mb-20">
    <div>
      <h2 className="text-3xl font-bold mb-5 dark:text-gray-100">
        Frequently <br />
        Asked Question
        <span className="text-[#5ae6b2]">.</span>
      </h2>
      <p className="text-sm text-gray-800 dark:text-gray-300 mb-10">
        Jika ada pertanyaan lainnya, silahkan hubungi <br />
        tim kami di support@alope.com
      </p>
      <button
        className="text-sm border-2 z-10 after:transition-all text-gray-50  px-5 py-3 border-[#5ae6b2] after:content-[''] after:absolute relative after:inset-0 after:bg-[#5ae6b2] after:-translate-x-1 after:-translate-y-1 after:-z-10 hover:after:translate-x-0 hover:after:translate-y-0"
      >
        Lihat semua FAQ
      </button>
    </div>
    <div className="lg:col-span-2">
      <button class="accordion rounded-t" @click="toggleAccordion()">
        Apa Keuntungan dari Berlangganan?
      </button>
      <div class="panel border rounded p-4 text-sm">
        <p>
          Berlangganan bukan hanya soal akses eksklusif ke konten keren, tapi
          juga tentang keuntungan eksklusif. Kamu bisa dapetin info terkini
          duluan sebelum yang lain, nikmatin acara eksklusif, dan bahkan lepas
          dari gangguan iklan. Ada juga diskon, promosi, dan hadiah spesial buat
          yang langganan setia. Jadi, dengan berlangganan, bukan cuma akses ke
          konten premium, tapi juga gaya hidup kekinian dan manfaat ekstra
          lainnya!
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion()">
        Apakah Subcription Berbayar?
      </button>
      <div class="panel border rounded p-4 text-sm">
        <p>
          Tidak, Tentu saja ini gratis. Tetapi jika anda ingin support kami
          silahkan noaktifkan adsblock anda. Terimakasih!
        </p>
      </div>

      <button class="accordion" @click="toggleAccordion()">
        Saya Ingin Berhenti Berlangganan
      </button>
      <div class="panel border rounded p-4 text-sm">
        <p>
          Berlangganan bukan hanya soal akses eksklusif ke konten keren, tapi
          juga tentang keuntungan eksklusif. Kamu bisa dapetin info terkini
          duluan sebelum yang lain, nikmatin acara eksklusif, dan bahkan lepas
          dari gangguan iklan. Ada juga diskon, promosi, dan hadiah spesial buat
          yang langganan setia. Jadi, dengan berlangganan, bukan cuma akses ke
          konten premium, tapi juga gaya hidup kekinian dan manfaat ekstra
          lainnya!
        </p>
      </div>

      <button class="accordion rounded-b" @click="toggleAccordion()">
        Bagaimana Cara Mengganti Email Subcription
      </button>
      <div class="panel border rounded p-4 text-sm">
        <p>
          Berlangganan bukan hanya soal akses eksklusif ke konten keren, tapi
          juga tentang keuntungan eksklusif. Kamu bisa dapetin info terkini
          duluan sebelum yang lain, nikmatin acara eksklusif, dan bahkan lepas
          dari gangguan iklan. Ada juga diskon, promosi, dan hadiah spesial buat
          yang langganan setia. Jadi, dengan berlangganan, bukan cuma akses ke
          konten premium, tapi juga gaya hidup kekinian dan manfaat ekstra
          lainnya!
        </p>
      </div>
    </div>
  </main>

  <TopFooter />
  <Footer />
</template>

<script>
// components
import Navbar from "./../components/GreenNavbar.vue";
import Footer from "./../components/Footer.vue";
import TopFooter from "./../components/TopFooter.vue";
// icons
import SolidBellAlertIcon from "@/components/icons/solidBellAlert.vue";
//
export default {
  components: {
    Navbar,
    TopFooter,
    Footer,
    //
    SolidBellAlertIcon,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    toggleAccordion() {
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>