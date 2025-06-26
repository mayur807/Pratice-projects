const apikey = "replysavage715@gmail.com_IoXUmFvSIYhXs9oBhCP3qMkNkPCMWpxcEjR7F6Owk1SFAOOVK0NrSofOyl1OTJYS";

document.querySelector(".extraction").addEventListener("click", () => {
console.log("clicked");


    const fileInput = document.querySelector("#pdffiles");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a PDF file.");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch("https://api.pdf.co/v1/file/upload", {
        method: 'POST',
        headers: {
            'x-api-key': apikey
        },
        body: formData
    })
        .then(res => res.json())
        .then(uploadRes => {
     
            if (!uploadRes.url) {
                alert("File upload failed.");
                return;
            }
        return   fetch('https://api.pdf.co/v1/pdf/convert/to/png', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apikey
                },
                body: JSON.stringify({
                    url: uploadRes.url,
                    pages: '1-',
                    inline: true
                })
            });


        })
        .then(res => res.json())
        .then(data => {
            console.log("Conversion result:", data);
        localStorage.setItem("imageUrls", JSON.stringify(data.urls))
if(data.urls && data.urls.length > 0){
    document.getElementById("btn").disabled  = false
document.getElementById("btn").style.backgroundColor = "rgb(57, 56, 56)";
btn.onclick = () => {
  window.location.href = "flip.html";
};
}

        })


})
