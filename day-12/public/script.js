const BASE_URL = location.hostname === "localhost" 
  ? "http://localhost:3000"
  : "https://chat-server-xyz.onrender.com"; 


const checkBtn = document.getElementById("checkPass");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");
const passwordOverlay = document.getElementById("pass-screen");

fetch(`${BASE_URL}/get-password`)
  .then(res => res.json())
  .then(data => {
    const realPass = data.password;

    checkBtn.addEventListener("click", () => {
      const entered = passwordInput.value.trim(); // remove accidental spaces
      if (entered === realPass) {
        passwordOverlay.style.display = "none";
      } else {
        errorMsg.textContent = "Wrong password";
      }
    });
  });


const input = document.getElementById("msg");
const sendBtn = document.getElementById("btn");
const receiveBtn = document.getElementById("receive");
const messageBox = document.getElementById("showallmessage");
const  allmsg = document.getElementById("allmsg")

const textarea = document.querySelector('.auto-expand');

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset height to recalculate properly

    const maxHeight = 85; // Max growth in px
    const newHeight = Math.min(this.scrollHeight, maxHeight);

    this.style.height = newHeight + 'px';
});


sendBtn.addEventListener("click", () => {
    const text = input.value;

fetch(`${BASE_URL}/send`, {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            input.value = "";
        });
});

receiveBtn.addEventListener("click", () => {
fetch(`${BASE_URL}/receive`)
        .then(res => res.json())
        .then(data => {
         
const singlemessage = document.getElementById("message");
singlemessage.innerHTML = "";
if (data.length > 0) {
        const lastMsg = data[data.length - 1]; // last message
        const p = document.createElement("p");
        p.textContent = lastMsg.text;
        singlemessage.appendChild(p);
      } else {
        singlemessage.textContent = "No messages yet.";
      }

        })
})
let bool = true
allmsg.addEventListener("click", () => {
if(bool){
  messageBox.style.display = "inline-block"
  bool = false
}else{
    bool = true
    messageBox.style.display = "none"

}    



fetch(`${BASE_URL}/receive`)

        .then(res => res.json())
        .then(data => {
            messageBox.innerHTML =`<p>Click Receive button again to see All Newly added or old  message</p>`
            data.forEach(msg => {
            
                const p = document.createElement("p");
                p.textContent = msg.text;
                messageBox.appendChild(p)
            });

        })
})

