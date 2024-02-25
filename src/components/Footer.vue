<template>
  <footer
    class="lg:px-20 px-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 mt-20 gap-10 dark:text-gray-100"
  >
    <div class="md:col-span-3 col-span-2 md:text-left text-center">
      <h4 class="text-4xl font-bold font-waterbrush">Ini Jabar</h4>
      <p class="text-sm mt-5">
        Mari kita eksplorasi keindahan alam, kekayaan budaya dan ragam kultur
        yang ada di Jawa Barat. Rasakan aneka ragam makanan khas nya yang sudah
        terkenal di se-antero Indonesia.
      </p>
    </div>
    <div>
      <h5 class="text-xl font-semibold">Support</h5>
      <ul class="mt-2">
        <li class="text-sm mb-1">FAQ</li>
        <li class="text-sm mb-1">Kontak Kami</li>
        <li class="text-sm mb-1">Bantuan Liburan</li>
      </ul>
    </div>
    <div>
      <h5 class="text-xl font-semibold">Links</h5>
      <ul class="mt-2">
        <li class="text-sm mb-1">Kategori</li>
        <li class="text-sm mb-1">Aktifitas</li>
        <li class="text-sm mb-1">Ulasan</li>
        <li class="text-sm mb-1">Alasan</li>
      </ul>
    </div>
    <div
      class="lg:col-span-2 md:col-span-1 col-span-2 md:text-left text-center"
    >
      <h5 class="text-xl font-semibold mb-5">Kontak Kami</h5>
      <p class="flex gap-4 mb-3 md:justify-start justify-center">
        <solidPhoneIcon myClass="w-5 text-[#34e0a1]" />
        083871352030
      </p>
      <p class="flex gap-4 mb-3 md:justify-start justify-center">
        <solidEnvelopeIcon myClass="w-5 text-[#34e0a1]" />
        ilhamhafidz@gmail.com
      </p>
    </div>

    <div
      class="lg:col-span-7 md:col-span-3 col-span-2 text-center border-t-2 py-5 border-[#34e0a1]"
    >
      <p class="text-sm">Copyright by ALOPE Team 2023</p>
    </div>
  </footer>
</template>

<script>
// icons
import solidPhoneIcon from "./../components/icons/solidPhone.vue";
import solidEnvelopeIcon from "./../components/icons/solidEnvelope.vue";

export default {
  components: {
    solidPhoneIcon,
    solidEnvelopeIcon,
  },
};
</script>

<style>
</style>