function checkSpam() {

    let text = document.getElementById("emailText").value.toLowerCase().trim();

    let spamWords = [
        "win",
        "free",
        "money",
        "offer",
        "click here",
        "subscribe",
        "buy now",
        "urgent",
        "lottery",
        "prize",
        "cash",
        "congratulations"
    ];

    let spamCount = 0;

    // Count spam words
    for (let i = 0; i < spamWords.length; i++) {
        if (text.includes(spamWords[i])) {
            spamCount++;
        }
    }

    let result = document.getElementById("result");

    // If textarea is empty
    if (text === "") {
        result.innerHTML = "⚠️ Please enter email content!";
        result.style.color = "orange";
        return;
    }

    // Calculate spam percentage
    let spamScore = (spamCount / spamWords.length) * 100;

    // Decide spam or not
    if (spamScore > 20) {
        result.innerHTML = "🚫 This Email is SPAM! (" + spamScore.toFixed(2) + "% spam words)";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ This Email is NOT SPAM (" + spamScore.toFixed(2) + "% spam words)";
        result.style.color = "green";
    }
}
