let key;

let btn = document.getElementById("btn")
let input = document.getElementById("input");
let ul = document.querySelector("ul")
input.addEventListener("change", (e) => {
    key = e.target.value

})
    function upper(params) {
        let arr =  params.split(" ")

 let val  =  arr.map(e =>{

return e[0].toUpperCase() + e.slice(1)

})

return val.join("")

    }

let arr = []

btn.addEventListener("click", () => {

ul.innerHTML = ''
 searched.innerHTML  = ''
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${key}`)
        .then(res => res.json())
        .then(data => {

            // let allele =     data.map(element => {
            // });

            // console.log(allele);
            if (arr.length === 1) {
                arr.shift()


            } arr.push(data[0])

            console.log(arr);
let searchword = arr[0].word


            searched.innerHTML =  upper(searchword)
            
            let value = arr[0].meanings



let audarr = [];


// let first = new audio()
         let sound = arr[0].phonetics;
         sound.map(s =>{
            console.log(s);
       
            
            if ( s.audio && s.audio.includes("mp3")){
audarr.push(s.audio)

            }
         })
   if (audarr.length > 0) {
  let aud = document.createElement("div");

  let audele = document.createElement("audio");
  audele.src = audarr[0];       
  audele.controls = true;      

  aud.appendChild(audele);
  ul.appendChild(aud);
}


            value.forEach((element) => {
 
       
                let partsOfSpeech1 = element.partOfSpeech;
     
                                let def = element.
                                    definitions;
                                
                                    
               let definnerHTML =      def.map(defs => 
                        defs.definition ?  `
                        <li> ${defs.
                        definition
                        }</li>` : "Sorry Definitions are not available").join("")
            

                let antonyms1 = element.antonyms.length ? element.antonyms.join(', ') : "Not available"
            

                let synonyms1 = element.synonyms.length ? element.synonyms.join(', ') : "Not available"
            


                let li1 = document.createElement("div");


                li1.innerHTML = `
                 <br>
    <li>PARTS OF SPEECH: ${partsOfSpeech1.toUpperCase()}</li> 
    <li>ANTONYMS: ${antonyms1.toUpperCase()}</li> 
    <li>SYNONYMS:  ${synonyms1.toUpperCase()}</li> 
    <li style="color:black">DEFINITIONS: ${definnerHTML.toUpperCase()}</li>  
    
    
    
    
    
    
    
    `




                ul.appendChild(li1)
            });

            // let li2 = document.createElement("li");
            // let li3 = document.createElement("li");
            // let li4 = document.createElement("li");
            // if (arr[0].meanings) {
            // console.log(
            // arr[0].meanings

            // );




            // arr[0].meanings.forEach((element, i) => {
            //     if (i === 0) {
            //         // console.log(element);

            //     }



            // });

            //                 const partsOfSpeech = [
            //                     "noun",
            //                     "pronoun",
            //                     "verb",
            //                     "adjective",
            //                     "adverb",
            //                     "preposition",
            //                     "conjunction",
            //                     "interjection"
            //                 ];



            //                 let value1 = objsolve(arr)
            //                 console.log(value1);

            // for (let i = 0; i < value1.length; i++) {
            // if(value1[i].partsOfSpeech === 'noun' || value1[i] === "pronoun" || value1[i] === "verb" || value1[i] === "adjective" || value1[i] === "adverb" || value1[i] === "preposition" || value1[i] === "conjunction" || value1[i] === "interjection"  ){
            // console.log("hey");
            // }



            // }
            //     console.log(value1);          
            //     let meaningnoun = objsolve(value1.meanings)
            //     console.log(meaningnoun);
            //     let antonyms = meaningnoun.antonyms
            //     let synonyms = meaningnoun.synonyms
            //     let definitions = meaningnoun.definitions
            //     console.log(antonyms);
            //     console.log(synonyms);
            //     console.log(definitions);

            //     if (antonyms.length = 0)
            //    l
            //  li1.innerHTML = `

            //         <span>Not available
            //         <li>Not available</li>
            //         </span>


            //         `
            //     }else{
            //         li1.innerHTML = `

            //         <span>Noun
            //         <li></li>
            //         </span>


            //         `

            // }
            //                     li1.innerHTML = `

            // <span>Noun
            //     <li>h1</li>
            // </span>
            //                     <span>Antonyms <li>
            //                         hey1
            //                     </li></span>
            //                     <span>Synonyms <li>
            //                         hey1
            //                     </li></span>
            //                     <span>Definations <li>
            //                         hey1
            //                     </li></span>

            //     `










        })




})



// function objsolve(obj = []) {
//     console.log(obj);

//     for (let i = 0; i < 2; i++) {

//         return obj[0].meanings

//     }

// }