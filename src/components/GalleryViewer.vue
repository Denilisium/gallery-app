<template>
  <div class="container" v-if="currentSrc">
    <div class="image-container">
      <div class="arrow left" @click="previos">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="photo">
        <img :src="currentSrc" />
      </div>
      <div class="arrow right" @click="next">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="slider-dots">
      <div class="dot" v-for="(image,index) in images" :key="index" @click="moveTo(index)">
        <i class="fa-circle" :class="[currentIndex === index ? 'fas' : 'far']"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { instance } from "../services/images.service";

export default {
  name: "authorization",
  mounted: function() {
    instance.preloadImages(10).then(images => {
      this.images = images;
      this.moveTo(0);
    });
  },
  data: function() {
    return {
      images: [],
      currentIndex: 0,
      currentSrc: ""
    };
  },
  methods: {
    next: function() {
      this.currentIndex += 1;
      this.moveTo(this.currentIndex);
    },
    previos: function() {
      this.currentIndex -= 1;
      this.moveTo(this.currentIndex);
    },
    moveTo: function(index) {
      let safeIndex = index;
      if (index < 0) {
        safeIndex = this.images.length - 1;
      }

      if (index >= this.images.length) {
        safeIndex = 0;
      }

      this.currentSrc = this.images[safeIndex].src;
      this.currentIndex = safeIndex;
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #fff;
}

.container .image-container {
  width: 100%;
  flex: 1;
  display: flex;
  padding-bottom: 1rem;
}

.image-container .arrow {
  width: 6rem;
  font-size: 20pt;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container .arrow:hover {
  transition: 0.3s;
  background: rgba(255, 255, 255, 0.1);
}

.image-container .photo {
  flex: 1;
  align-self: stretch;
}

.image-container .photo img {
  object-fit: contain;
  height: 100%;
  /* width: auto; */
  max-width: 100vw;
  max-height: calc(100vh - 5rem);
}

.slider-dots {
  flex-basis: 2rem;
  display: flex;
}

.slider-dots .dot {
  cursor: pointer;
  width: 1.2rem;
}
</style>