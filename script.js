function realPic() {
    const id = Math.floor( (Math.random() * 6 + 1 ) * 10000);
    return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
const fakePic = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");


function draw() {
    resContainer.innerHTML = ""
    imgContainer.innerHTML = ""
    
    const resetBtn = document.createElement("Button");
    resetBtn.innerHTML = "Try Again"
    resetBtn.onclick = draw

    const rnd = Math.random() > 0.5
    const arr = [ rnd , !rnd ];

    for (const isReal of arr) {
        const img = document.createElement("img");
        img.src = isReal ? realPic() : fakePic;
        
        
        img.onclick = function() {
            if(isReal) {
                resContainer.innerHTML = "correct 😊"
            }
            else {
                resContainer.innerHTML = "incorrect 😢😭😿"
            }
            resContainer.appendChild(resetBtn);
        }
        imgContainer.appendChild(img);
        
    }
}
draw();