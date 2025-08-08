//DOM ImgeAPI

const imgContainer= document.getElementById(`img-contener`)

const urlAPI=`https://picsum.photos/v2/list`;


const apiDate=()=>{
fetch(urlAPI).then(data=>data.json()).then(items =>{
    items.forEach(photoOBJ => {
        const newContainer=document.createElement(`div`);
        newContainer.classList.add(`image-container-item`);
        const newImg=document.createElement(`img`);
        newImg.src=photoOBJ.download_url;
        newContainer.appendChild(newImg);

        const newAuthor = document.createElement(`p`);
        newAuthor.textContent = photoOBJ.author;

        newContainer.appendChild(newAuthor);

        imgContainer.appendChild(newContainer)
        console.log(items)
    });
})
}

apiDate()

