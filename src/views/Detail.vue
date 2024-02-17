<template>
  <navbar />

  <!--  -->

  <header />

  <main class="lg:px-20 md:px-10 px-5 pt-20"></main>

  <section class="ml-16 grid grid-cols-3 px-5 gap-20 mt-14 mb-20 relative">
    <div class="col-span-2">
      <h1 class="font-bold text-2xl mb-10 underline underline-offset-8">
        Danau Toba
      </h1>
      <p class="text-lg mb-10 leading-8">
        Upacara seren taun: ungkapan syukur masyarakat Sunda atas pertanian
        setahun. Dilaksanakan tiap 22 Bulan Rayagung dengan ritual, kesenian,
        dan hubungan manusia dengan Tuhan, sesama, dan alam.
      </p>
      <p class="text-lg mb-10 leading-8">
        Upacara Seren Taun: Ngajayak (Menjemput Padi) dimulai tanggal 18
        Rayagung, penumbukan padi, puncaknya tanggal 22 Rayagung. Ngajayak pada
        "dalapan welas" (18) mencerminkan welas asih Tuhan bagi kehidupan
        umat-Nya di seluruh dunia.
      </p>
      <p class="text-lg mb-10 leading-8">
        Puncak Seren Taun pada tanggal 22 Rayagung, diwakili oleh penumbukan 22
        kwintal padi, memiliki makna khusus. Angka 22 terdiri dari 20 kwintal
        padi yang ditumbuk dan dibagikan ke masyarakat, serta 2 kwintal sebagai
        benih. Angka 20 mencerminkan unsur anatomi tubuh manusia.
      </p>
      <p class="text-lg mb-10 leading-8">
        Baik laki-aki ataupun perempuan memiliki 20 sifat wujud manusia, adalah
        : 1. getih atau darah, 2. daging, 3. bulu, 4. kuku, 5. rambut, 6. kulit,
        7. urat, 8. polo atau otak, 9. bayah atau paru, 10. ari atau hati, 11.
        kalilipa atau limpa, 12. mamaras atau maras, 13. hamperu ataun empedu,
        14. tulang, 15. sumsum, 16. lamad atau lemak, 17. gegembung atau
        lambung. 18. peujit atau usus. 19. ginjal dan 20. jantung.
      </p>
      <p class="text-lg mb-10 leading-8">
        Ke 20 sifat diatas menyatukan organ dan sel tubuh dengan fungsi yang
        beraneka ragam, atau dengan kata lain tubuh atau jasmani dipandang
        sebagai suatu struktur hidup yang memiliki proses seperti hukum
        adikodrati. Hukum adikodrati ini kemudian menjelma menjadi jirim ( raga
        ), jisim ( nurani ) dan pengakuan ( aku ). Sedangkan bilangan 2 mengacu
        pada pengertian bahwa kehidupan siang dan malam, suka duka, baik buruk
        dan sebaginya.
      </p>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014273.440518988!2d106.96500000470881!3d-6.7691665948603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b4de87529ee5%3A0x74a5dde4ece84971!2sPangrango!5e0!3m2!1sen!2sid!4v1707986113966!5m2!1sen!2sid"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-[350px] h-[350px] mt-20 sticky"
      ></iframe>
    </div>
  </section>
  <footer />
</template>

<script>
// components
import Navbar from "./../components/Navbar.vue";
import Header from "./../components/Header.vue";
import Footer from "./../components/Footer.vue";
import TrendActivities from "@/components/TrendActivities.vue";

export default {
  components: {
    Navbar,
    Header,
    TrendActivities,
    Footer,
  },
};
</script>
