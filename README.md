# 📧 Spam Email Detector

A simple **JavaScript Spam Email Detector** that analyzes email text and determines whether the message is **SPAM** or **NOT SPAM** based on predefined spam keywords.

---

## 🚀 Features

* Detects common spam words
* Calculates spam percentage
* Displays result instantly
* Simple and beginner-friendly logic
* Runs directly in the browser

---

## 🛠️ Technologies Used

* HTML
* CSS
* JavaScript

---

## ⚙️ How It Works

1. User enters email content in a textarea.
2. JavaScript converts the text to **lowercase** and removes extra spaces.
3. The program checks for predefined spam keywords.
4. It counts how many spam words appear in the email.
5. Calculates a **Spam Score**.
6. If spam score is **greater than 20%**, the email is marked as **SPAM**.

---

## 📜 JavaScript Code

```javascript
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
```

---

## ▶
Example Output

🚫 This Email is SPAM! (25% spam words)

✅ This Email is NOT SPAM (10% spam words)

