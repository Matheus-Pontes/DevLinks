document.querySelector("#switch").addEventListener('click', ()=> {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light"))
        document.querySelector("#btn-switch").setAttribute("name", "sunny-outline");
    else
        document.querySelector("#btn-switch").setAttribute("name", "moon-outline");
});