import { createStore } from "vuex";
import { auth } from "../firebase";
import router from "vue-router";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async register({ commit }, details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/showdata");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/");
    },
  },
});
