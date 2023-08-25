<template>
  <li class="font-semibold text-sm list-none block">
    <div class="flex items-center cursor-pointer gap-2" @click="toggleShow">
      <div v-if="icon === 'fa'">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 630 360"
          class="w-4"
        >
          <path fill="#da0000" d="M0 0h630v360H0z" />
          <path fill="#fff" d="M0 0h630v240H0z" />
          <path fill="#239f40" d="M0 0h630v120H0z" />
          <g transform="translate(8.4 100.4)">
            <g id="e">
              <g id="c" fill="none" stroke="#fff" stroke-width="2">
                <path
                  id="b"
                  d="M0 1h26M1 10V5h8v4h8V5h-5M4 9h2m20 0h-5V5h8m0-5v9h8V0m-4 0v9"
                  transform="scale(1.4)"
                />
                <path id="a" d="M0 7h9m1 0h9" transform="scale(2.8)" />
                <use xlink:href="#a" y="120" />
                <use xlink:href="#b" y="145.2" />
              </g>
              <g id="d">
                <use xlink:href="#c" x="56" />
                <use xlink:href="#c" x="112" />
                <use xlink:href="#c" x="168" />
              </g>
            </g>
            <use xlink:href="#d" x="168" />
            <use xlink:href="#e" x="392" />
          </g>
          <g fill="#da0000" transform="matrix(45 0 0 45 315 180)">
            <g id="f">
              <path d="M-.548.836A.912.912 0 00.329-.722 1 1 0 01-.548.836" />
              <path
                d="M.618.661A.764.764 0 00.422-.74 1 1 0 01.618.661M0 1l-.05-1L0-.787a.31.31 0 00.118.099V-.1l-.04.993zM-.02-.85L0-.831a.144.144 0 00.252-.137A.136.136 0 010-.925"
              />
            </g>
            <use xlink:href="#f" transform="scale(-1 1)" />
          </g>
        </svg>
      </div>
      <div v-if="icon === 'en'">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 55.2 38.4"
          style="enable-background: new 0 0 55.2 38.4"
          xml:space="preserve"
          class="w-4"
        >
          <style type="text/css">
            .st0 {
              fill: #fefefe;
            }
            .st1 {
              fill: #c8102e;
            }
            .st2 {
              fill: #012169;
            }
          </style>
          <g>
            <path
              class="st0"
              d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"
            />
            <polygon
              class="st1"
              points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"
            />
            <path
              class="st2"
              d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"
            />
            <path
              class="st2"
              d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"
            />
            <path
              class="st2"
              d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"
            />
            <path
              class="st2"
              d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"
            />
            <polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8" />
            <polygon
              class="st2"
              points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8"
            />
            <polygon
              class="st2"
              points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6"
            />
            <polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6" />
            <polygon
              class="st1"
              points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"
            />
            <polygon
              class="st1"
              points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"
            />
            <polygon
              class="st1"
              points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"
            />
            <polygon
              class="st1"
              points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"
            />
          </g>
        </svg>
      </div>
      <div class="flex items-center justify-between cursor-pointer w-full">
        <span v-html="title"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          :class="{ 'rotate-90': showMenu }"
          class="dropdown-menu dark:fill-white"
          viewBox="0 0 24 24"
          :style="$i18n.locale == 'fa' ? 'rotate: 180deg' : 'rotate: 0deg'"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </div>
    </div>
    <ul
      class="ml-4 overflow-hidden dropdown-menu font-normal flex flex-col justify-center gap-2"
      :class="this.class"
    >
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["title", "height", "icon"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleShow() {
      this.showMenu = !this.showMenu;
    },
  },

  computed: {
    class() {
      return this.showMenu ? this.height : "h-0";
    },
  },
};
</script>

<style lang="scss">
.dropdown-menu {
  transition: 300ms;
}
svg.rotate-90 {
  transform: rotate(-90deg);
}
</style>