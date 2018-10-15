<template>
  <v-container fluid style="padding-top: 0; padding-left:0; padding-right:0">
    <div class="videoWrapper">
			<div class="holds-the-iframe">
        <iframe src="https://udemy-ninja-chat-3bfc3.firebaseapp.com" allowfullscreen></iframe>
			</div>
    </div>
  </v-container>
</template>

<style scoped>
.videoWrapper {
	position: relative;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 90vh;
}
</style>
