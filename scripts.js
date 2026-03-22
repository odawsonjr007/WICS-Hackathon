
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
        "You may encounter many defeats, but you must not be defeated.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Out of difficulties grow miracles.",
        "I used to think the worst thing in life was to end up alone. It’s not. The worst thing in life is to end up with people who make you feel alone.",
        "You were never created to live depressed, defeated, guilty, condemned, ashamed or unworthy. You were created to be victorious.",
        "Walking with a friend in the dark is better than walking alone in the light.",
        "I learned that courage was not the absence of fear, but the triumph over it.",
        "You get in life what you have the courage to ask for.",
        "I’ve failed over and over and over again in my life. And that is why I succeed.",
        "What we have once enjoyed we can never lose; all that we love deeply becomes a part of us.",
        "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
        "Don’t cry because it’s over, smile because it happened.",
    ]; 
    quoteBtn.addEventListener("click", function() { const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex]; });