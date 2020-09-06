<template>
  <div>
    <div class="modal" :class="{active: open}">
      <div class="modal-frame">
        <div class="modal-header">Settings</div>
        <div class="modal-body">
          <div class="row">
            <div class="col mobile:4 tablet:3">Dark Theme</div>
            <div class="col col:auto">
              <div class="input-toggle">
                <input type="checkbox" :checked="darkTheme" @click="toggleTheme" />
                <span class="switch"></span>
                <span class="track"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="button button-primary" @click="closeModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      darkTheme: false,
    };
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    openModal() {
      this.open = true;
    },
    toggleTheme() {
      this.darkTheme = !this.darkTheme;

      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
    },
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  },
};
</script>

<style lang="scss">
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow: hidden;
  visibility: hidden;
  @media (min-width: 360px) and (max-width: 720px) {
    padding: 16px;
  }

  &.active {
    visibility: visible;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.25s;

    .modal-frame {
      animation: bounce linear 0.2s;
    }
  }

  &-frame {
    width: 100%;
    max-width: 720px;
    background: var(--color-white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: background 0.2s;
  }

  &-header {
    padding: 16px;
    width: 100%;
    text-align: center;
    font-weight: 700;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.05);
  }

  &-body {
    padding: 16px;
  }

  &-footer {
    padding: 8px;
    text-align: right;
  }
}
</style>