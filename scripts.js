
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBuf3k4mwjrZxVcDYS1WNt3F47mzzoxuGE",
authDomain: "socbot-a5807.firebaseapp.com",
projectId: "socbot-a5807",
storageBucket: "socbot-a5807.firebasestorage.app",
messagingSenderId: "316058275050",
appId: "1:316058275050:web:c86da93437f2d2cfc4db93",
measurementId: "G-4JRJDSCHSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


async function getDeeds() {
  const deedsCollection = collection(db, "deeds");
  const snapshot = await getDocs(deedsCollection);

  const deeds = [];
  snapshot.forEach(doc => {
    deeds.push(doc.data().text);
  });

  return deeds;
}
async function getQuotesByKeyword(keyword)
{
    const quotesCollection = collection(db, "quotes");
    const q = query(quotesCollection, where("keywords", "array-contains",
        keyword.toLowerCase()));
    const quotes = [];
    snapshop.forEach(doc => {
        quotes.push(doc.data());
    });
    return quotes;
}

document.addEventListener("DOMContentLoaded", function ()
{
    const deedBtn = document.getElementById("deedBtn");
    const deedDisplay = document.getElementById("deedDisplay");
    if (deedBtn) {
        deedBtn.addEventListener("click",  async function () {
            const deeds = await getDeeds();
            const randomIndex = Math.floor(Math.random() * deeds.length);
            console.log("test")
            deedDisplay.textContent = deeds[randomIndex];
        });
    }

    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn)
    {
        loginBtn.addEventListener("click", async function () {
            const email = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            try {
                await signInWithEmailAndPassword(auth, email, password);

                window.location.href = "index.html";

            } catch (err) {
                console.error(err.message);
            }
        });
    }
});
    const quoteBtn = document.getElementById("quoteBtn");
    const quoteDisplay = document.getElementById("quoteDisplay");
    const authorDisplay = document.getElementById("authorDisplay");
    const searchInput = document.getElementById("searchInput");
    if (quoteBtn)
    {
        quoteBtn.addEventListener("click", async function (){
            const keyword = searchInput.value.trim().toLowerCase();
            if (!keyword)
            {
                quoteDisplay.textContent = "Care to specify?";
                authorDisplay.textContent = "";
                return;
            }
            const quotes = await getQuotesByKeyword(keyword);
            
            if (quotes.length > 0)
            {
                randomIndex = Math.floor(Math.random * quotes.length);
                const selected = quotes[randomIndex];   
                quoteDisplay.textContent = `"${selected.text}"`;
                authorDisplay.textContent = `-${selected.text}`;
            }
            else{
                quotenDisplay.textContent = "No quotes found for that keyword.";
                authorDisplay.textContent = "";
            }
        })
    }
    quoteBtn.addEventListener("click", function() { const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex]; });