# 💔 HeartbreakAPI

An Express.js API that mirrors real-life heartbreak.  
Make a confession, and get rejected — just like she never saw you that way.

---

## 📌 Overview

This minimalist API accepts a POST request for confessions.  
But beware — if your message contains the word “like”, the server will shut you down.

---

## ⚙️ Tech Stack

- Node.js
- Express.js

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/HeartbreakAPI.git
cd HeartbreakAPI
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the server
bash
Copy
Edit
node server.js
The server runs on:

arduino
Copy
Edit
http://localhost:3000
💔 API Endpoint
POST /confess-your-feelings
Send a confession in JSON format.

✅ Request Body
json
Copy
Edit
{
  "from": "You",
  "to": "Her",
  "message": "I think I like you..."
}
🔁 Possible Responses
Condition	Response
Message includes "like"	404 Not Found + { "error": "Endpoint doesn't exist. She never saw you that way." }
Message does NOT include it	200 OK + { "success": true, "response": "Confession received, but... it's complicated." }

🧪 Example with curl
bash
Copy
Edit
curl -X POST http://localhost:3000/confess-your-feelings \
-H "Content-Type: application/json" \
-d '{"from":"Aditya","to":"Priya","message":"I think I like you..."}'
📬 Try it on Postman
Method: POST

URL: http://localhost:3000/confess-your-feelings

Headers:

Content-Type: application/json

Body:

json
Copy
Edit
{
  "from": "Aditya",
  "to": "Priya",
  "message": "Hey... just wanted to say I think I like you."
}
📄 License
MIT — Free to use, clone, modify, and cry over.

👤 Author
Aditya Kumar

"Your confession deserved better. But the server didn’t flinch."
