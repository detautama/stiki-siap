<template>
  <v-app>
    <v-navigation-drawer
      persistent
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="route(tile.link)" v-for="(tile, index) in listTile" :key="index">
          <v-list-tile-action>
            <v-icon>{{tile.icon}}</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <p>{{tile.title}}</p>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://akademik.stiki-indonesia.ac.id/?view=login" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Akademik</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://missbaak.stiki-indonesia.ac.id/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Miss BAAK</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://mimpi.stiki-indonesia.ac.id/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>MIMPIKU</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://presensi.stiki-indonesia.ac.id/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Presensi</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="https://sitasi.stiki-indonesia.ac.id" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>SITASI</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://ktm.stiki-indonesia.ac.id/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>KTM</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://tracerstudy.stiki-indonesia.ac.id/index.php/form_pengguna" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Tracer Study</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://simala.stiki-indonesia.ac.id/login" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Simala</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://sirups.stiki-indonesia.ac.id/user/login" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>Sirups</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>list_alt</v-icon>
          </v-list-tile-action>
          <a href="http://stiki-indonesia.ac.id/profil-stiki/" target="_blank">
            <v-list-tile-content>
              <v-list-tile-title>
                <p>About Stiki</p>
              </v-list-tile-title>
            </v-list-tile-content>
          </a>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a class="red--text" style="text-decoration:underline" tag="span" href="https://www.facebook.com/putudeta11">👨‍💻 by Putu Deta</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
      class="blue-grey darken-4 white--text"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- hello -->
      <v-menu bottom left>
        <v-btn
          slot="activator"
          dark
          icon
        >
          <v-icon>more_vert</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, i) in items"
            :key="i"
            @click.stop="dialog = true"
          >
            <v-list-tile-title>{{ item.title }} <v-icon>{{ item.icon }}</v-icon></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Feedback</v-card-title>
        <v-card-text>
        <v-textarea
          name="input-7-1"
          label="SIAP akan lebih baik apabila ..."
          v-model="feedback"
        ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Tutup
          </v-btn>

          <v-btn
            :loading="loading"
            :disabled="loading"
            color="green darken-1"
            flat="flat"
            @click="sendFb"
          >
            Kirim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialog2"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Terimakasih</v-card-title>
        <v-card-text>
          Terimakasih atas feedbacknya
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      drawer: true,
      feedback: '',
      dialog: false,
      dialog2: false,
      listTile: [
        {icon: 'home', link: '/', title: 'Home'},
        {icon: 'account_circle', link: '/siperi', title: 'Siperi'},
        {icon: 'contacts', link: '/telp-dosen', title: 'Telp. Dosen'},
        {icon: 'view_list', link: '/syntesis', title: 'Syntesis'},
        {icon: 'assignment', link: '/dikti', title: 'Dikti'},
        {icon: 'library_books', link: '/e-journal', title: 'E-Journal'},
        {icon: 'group', link: '/ukm', title: 'UKM'},
        {icon: 'chat', link: '/chat', title: 'Chat'}
      ],
      title: 'SIAP',
      items: [
        { title: 'Feedback', icon: 'feedback'}
      ]
    }
  },
  methods: {
    sendFb () {
      this.loading = true
      db.collection("feedback").add({
        name: this.feedback,
        timestamp: Date.now()
      }).then(res => {
        this.dialog2 = true
        this.dialog = false
        this.loading = false
      })
    },
    route (link) {
      this.$router.push(link)
    }
  }
}
</script>
