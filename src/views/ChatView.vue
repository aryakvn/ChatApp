<template>
  <app-bar title="hello"></app-bar>
  <div class="container">
    <span>hello friend!</span>
    <div
      class="message"
      v-for="(message, i) in messages"
      :key="`msg-${i}`"
      :class="{ me: message.me }"
    >
      {{ message.text }}
    </div>
  </div>
  <form class="message-box" @submit.prevent="sendMessage">
    <button>:</button>
    <input type="text" v-model="message" />
    <button id="submit">></button>
  </form>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
  data: () => ({
    message: "",
    messages: [
      {
        text: "Hello, friend!",
        me: false,
      },
      {
        text: "Hello, friend!",
        me: true,
      },
    ],
  }),
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.message,
        me: true,
      });
      this.message = "";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.app-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.container {
  width: 100%;
  height: 100vh;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.container .message {
  max-width: 50%;
  margin: 8px 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 0 16px 16px 0;
  align-self: flex-start;
}

.container .message:last-of-type {
  animation: newMessage;
  animation-duration: 500ms;
  animation-timing-function: ease-out;
}

.container .message.me {
  align-self: flex-end;
  border-radius: 16px 0 0 16px;
  background-color: #2196f3;
  color: white;
}

@keyframes newMessage {
  0% {
    margin-bottom: -80px;
    min-width: 100%;
  }

  100% {
    margin-bottom: 8px;
    min-width: 0;
  }
}

/* Message Box */

.message-box {
  padding: 16px 8px;
  display: grid;
  grid-template-columns: 48px auto 48px;
  grid-template-rows: 48px;
  gap: 8px;
  justify-content: stretch;
  align-items: stretch;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(32px);
  border-radius: 16px 16px 0 0;
}

.message-box > * {
  border: none;
}

.message-box > *:focus {
  outline: none;
}

.message-box button {
  background-color: #2196f3;
  border-radius: 50%;
  aspect-ratio: 1/1;
  color: white;
  cursor: pointer;
}

.message-box input[type="text"] {
  background-color: #f5f5f5;
  border-radius: 32px;
  padding: 0 16px;
}
</style>