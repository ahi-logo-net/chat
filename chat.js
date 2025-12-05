import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8y8fCcxN-Wvvp2udEC65Vh4rk1RCBMb8",
  authDomain: "logo-635ff.firebaseapp.com",
  projectId: "logo-635ff",
  storageBucket: "logo-635ff.firebasestorage.app",
  messagingSenderId: "522098711036",
  appId: "1:522098711036:web:7522718e90a629395f7a79",
  measurementId: "G-8F1JZHKC51"
};

    // 初期化
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const commentsRef = ref(db, "comments");

    // コメント送信
    document.getElementById("submitBtn").addEventListener("click", () => {
      const text = document.getElementById("commentInput").value.trim();
      if (text) {
        push(commentsRef, { text });
        document.getElementById("commentInput").value = "";
      }
    });

    // コメント表示
    onChildAdded(commentsRef, snapshot => {
      const li = document.createElement("li");
      li.textContent = snapshot.val().text;
      document.getElementById("commentList").appendChild(li);
    });
