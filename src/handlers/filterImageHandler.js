const filterImageHandler = (value) => {
    const poster = document.querySelectorAll(".image-box");
    poster.forEach((image) => {
        const title = image.querySelector("h2").innerText;
        if(title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            image.classList.remove('hide')
        } else {
            image.classList.add("hide")
        }
    })
 }

 export default filterImageHandler;