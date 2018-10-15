<template>
  <v-container>
    <h1>Kalender Akademik</h1>
    <p class="red--text">Jadwal bisa berubah, mohon untuk aktif melihat informasi pada laman resmi terkait</p>
    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      demoEvents: [
        {
          date: '2018/10/13',
          title: 'Libur Hari Raya Saraswati'
        },
        {
          date: '2018/10/17',
          title: 'Libur Hari Raya Pagerwesi'
        },
        {
          date: '2018/10/19',
          title: 'Wisuda XII'
        },
        {
          date: '2018/10/22',
          title: 'Pelaporan Akhir Kuliah',
          desc: '20172, pelaporan Awal Kuliah 20181. 22 - 27 Oct'
        },
        {
          date: '2018/11/3',
          title: 'Pengumpulan Berkas Seminar'
        },
        {
          date: '2018/11/5',
          title: 'UTS Semester Ganjil',
          desc: '5 - 10 Nov'
        },
        {
          date: '2018/11/16',
          title: 'Batas Pendaftaran Yudisium',
          desc: 'Gelombang I Periode 2018 Ganjil'
        },
        {
          date: '2018/11/20',
          title: 'Libur Maulid Nabi Muhammad SAW'
        },
        {
          date: '2018/11/30',
          title: 'Yudisium Gelombang I',
          desc: 'Periode 2018 Ganjil'
        },
        {
          date: '2018/12/15',
          title: 'Pengumpulan Akhir Berkas Seminar'
        },
        {
          date: '2018/12/24',
          title: 'Libur Hari Raya Galunga',
          desc: '24 - 27 Dec'
        },
        {
          date: '2018/12/25',
          title: 'Libur Hari Raya Natal'
        },
        {
          date: '2018/12/31',
          title: 'Libur Akhir Tahun'
        },
        {
          date: '2019/1/1',
          title: 'Libur Tahun Baru 2019'
        },
        {
          date: '2019/1/2',
          title: 'Pengumpulan Akhir Berkas TA'
        },
        {
          date: '2019/1/4',
          title: 'Libur Hari Raya Kuningan',
          desc: '4 - 5 Jan'
        },
        {
          date: '2019/1/5',
          title: 'Libur Hari Raya Siwaratri'
        },
        {
          date: '2019/1/7',
          title: 'Libur Tenang',
          desc: '7 - 12 Jan'
        },
        {
          date: '2019/1/12',
          title: 'Ujian KP dan Seminar Terakhir'
        },
        {
          date: '2019/1/14',
          title: 'UAS Semester Ganjil',
          desc: '14 - 19 Jan'
        },
        {
          date: '2019/1/21',
          title: 'Sosialisasi KP'
        },
        {
          date: '2019/1/22',
          title: 'Sosialisasi Seminar'
        },
        {
          date: '2019/1/23',
          title: 'Sosialisasi TA'
        },
        {
          date: '2019/2/1',
          title: 'Pembukaan Periode Syntesis'
        },
        {
          date: '2019/2/5',
          title: 'Libur Tahun Baru Imlek'
        },
        {
          date: '2019/2/7',
          title: 'Bimbingan PA',
          desc: '7 - 8 Feb'
        },
        {
          date: '2019/2/9',
          title: 'KRS Aslab'
        },
        {
          date: '2019/2/11',
          title: 'KRS Semester Genap',
          desc: '11 - 19 Feb'
        },
        {
          date: '2019/2/15',
          title: 'Batas Pendaftaran Yudisium',
          desc: 'Gelombang II Periode 2018 Ganjil'
        },
        {
          date: '2019/2/25',
          title: 'Kuliah Perdana KP'
        },
        {
          date: '2019/2/26',
          title: 'Kuliah Perdana Seminar'
        },
        {
          date: '2019/2/27',
          title: 'Kuliah Perdana TA'
        },
        {
          date: '2019/2/28',
          title: 'Yudisium Gelombang II',
          desc: 'Periode 2018 Ganjil'
        }
      ]
    }
  }
}
</script>

