let page = 1;
fetch(`https://api.pexels.com/videos/search?query=aerial&per_page=80&page=${page}`, {
    headers: {
        Authorization: "WQxlBiAWuH7Y6asmAsaTCS4vFOkuMGKhC9i8W6vAPqqKUmeKYsj9AThg"
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data.videos[0]);
        console.log(data.videos[1]);


        let allHaveHD = data.videos.every(video => {
            return video.video_files.some(file => file.quality === 'sd');
        });

        console.log("Do all videos have at least one HD file?", allHaveHD);


    })
    .catch(error => {
        console.error("Error fetching from Pexels API:", error);
    });
