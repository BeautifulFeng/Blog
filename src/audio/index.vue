<template>
  <div class="music-player">
    <div class="music-player-controls">
      <button @click="prevSong">Prev</button>
      <button @click="togglePlayback">
        {{ isPlaying ? "Pause" : "Play" }}
      </button>
      <button @click="nextSong">Next</button>
    </div>
    <div class="music-player-song-info">
      <h3>{{ currentSong.title }}</h3>
      <p>{{ currentSong.artist }}</p>
    </div>
    <audio
      ref="player"
      :src="currentSong.url"
      @ended="nextSong"
      autoplay
      controls
    ></audio>
  </div>
</template>

<script>
import { ref, computed, watchEffect } from "vue";

export default {
  setup() {
    const isPlaying = ref(false);
    const currentSongIndex = ref(0);

    const songs = [
      {
        title: "Song One",
        artist: "Artist One",
        url: "/public/mp3/いきものがかり - SAKURA.mp3",
      },
      {
        title: "Song Two",
        artist: "Artist Two",
        url: "/public/mp3/7copy,BT07 - 晚风.mp3",
      },
      {
        title: "Song Three",
        artist: "Artist Three",
        url: "/public/mp3/超爱喝奶盖 - 我好像在哪见过你（翻自 抖音）.mp3",
      },
    ];

    const currentSong = computed(() => {
      return songs[currentSongIndex.value];
    });

    const player = ref(null);

    const togglePlayback = () => {
      if (isPlaying.value) {
        player.value.pause();
      } else {
        player.value.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    const prevSong = () => {
      currentSongIndex.value =
        (currentSongIndex.value - 1 + songs.length) % songs.length;
      playCurrentSong();
    };

    const nextSong = () => {
      currentSongIndex.value = (currentSongIndex.value + 1) % songs.length;
      playCurrentSong();
    };

    const playCurrentSong = () => {
      isPlaying.value = true;
      player.value.src = currentSong.value.url;
      player.value.play();
    };

    // Watch for changes to currentSongIndex and play the current song
    watchEffect(() => {
      playCurrentSong();
    });

    return {
      isPlaying,
      currentSong,
      togglePlayback,
      prevSong,
      nextSong,
      player,
    };
  },
};
</script>

<style scoped>
.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.music-player-controls {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.music-player-controls button {
  margin: 0 0.5rem;
}

.music-player-song-info {
  text-align: center;
}

.music-player-song-info h3 {
  margin: 0;
}

.music-player-song-info p {
  margin: 0;
}
</style>
