document.addEventListener("DOMContentLoaded", function ()
{
    const deedBtn = document.getElementById("deedBtn");
    const deedDisplay = document.getElementById("deedDisplay");
    const deeds = [
        "Compliment 3 different people (don't be vague!)",
        "Mentor someone",
        "Pay for the next person in line",
        "Donate something you don't need",
        "Create an appreciation post for something you love",
        "Run an errand for someone",
        "Volunteer your time for community service",
        "Send a quick message to a friend or someone you haven't talked to in a while",
        "Greet a stranger",
        "Help someone with homework",
        "Encourage someone on their goals or taking a risk",
        "Let go of a grudge and forgive that person",
        "Create something innovative and gift it to someone",
    ];
    deedBtn.addEventListener("click", function()
    {
        const randomIndex = Math.floor(Math.random() * deeds.length);
        deedDisplay.textContent = deeds[randomIndex];
    });
    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn)
    {
        loginBtn.addEventListener("click", function(){
            const u = document.getElementById("username").value;
            const p = document.getElementById("password").value;
            const error = document.getElementById("error");

            const user = "Steven";
            const pass = "1234567890"
            if (u == user && p == pass)
            {
                window.location.href = "happy.html";
            }
            else
            {
                error.textContent = "Sorry, invalid user or password applied.";
            }
        })
    }
});