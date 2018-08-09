<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <h1 class="text-xs-center" style="margin-top: 10vh">STIKI APP</h1>
        <h3 class="text-xs-center">###</h3>
        <p>STIKI APP (SIAP) merupakan aplikasi web tidak resmi untuk mahasiswa STIKI INDONESIA <br> yang menampung semua website STIKI INDONESIA dengan basis Progressive Web App, <br>dimana website ini dapat diinstall (dipasang) seperti aplikasi native android maupun ios</p>
        <p>Support android >4.0 dengan <br> browser chrome versi >67, dapat diinstal ketika muncul pop-up add to home screen seperti pada gambar berikut</p>
        <img src="@/assets/android.png" alt="">
        <br>
        <br>
        <p>Support ios >11 dengan browser safari, dapat diinstal dengan memilih tombol "Share" saat <br> membuka halaman ini kemudian memilih menu add to home screen</p>
        <img src="@/assets/ios.png" alt="">
        <br>
        <br>
        <p class="text-xs-center">Beberapa website stiki dibuka diluar stiki app dikarenakan belum menggunakan ssl (https)</p>
        <p class="blue--text">Ikut berkontribusi untuk pengembangan web ini. <br> Join <a href="https://github.com/detautama/stiki-siap">Github</a></p>
        <ul class="text-xs-left">
          <h3>Ongoing</h3>
          <li>UKM page</li>
          <li>User Account</li>
          <li>News Feed</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
  img{
    width:100%;
    max-width:600px;
  }
</style>

