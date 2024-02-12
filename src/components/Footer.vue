<template>
  <footer class="px-20 grid grid-cols-7 mt-20 gap-10">
    <div class="col-span-3">
      <h4 class="text-4xl font-bold font-waterbrush">Jabar Tour</h4>
      <p class="text-sm mt-5">
        Mari kita eksplorasi keindahan alam, kekayaan budaya dan ragam kultur
        yang ada di Jawa Barat. Rasakan aneka ragam makanan khas nya yang sudah
        terkenal di se-antero Indonesia.
      </p>
    </div>
    <div>
      <h5 class="text-xl font-semibold">Support</h5>
      <ul class="mt-2">
        <li>FAQ</li>
        <li>Kontak Kami</li>
        <li>Bantuan Liburan</li>
      </ul>
    </div>
    <div>
      <h5 class="text-xl font-semibold">Links</h5>
      <ul class="mt-2">
        <li>Kategoru</li>
        <li>Aktifitas</li>
        <li>Ulasan</li>
        <li>Alasan</li>
      </ul>
    </div>
    <div class="col-span-2">
      <h5 class="text-xl font-semibold mb-5">Kontak Kami</h5>
      <p class="flex gap-4 mb-3">
        <solidPhoneIcon myClass="w-5 text-[#34e0a1]" />
        083871352030
      </p>
      <p class="flex gap-4 mb-3">
        <solidEnvelopeIcon myClass="w-5 text-[#34e0a1]" />
        ilhamhafidz@gmail.com
      </p>
    </div>

    <div class="col-span-7 text-center border-t-2 py-5 border-[#34e0a1]">
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