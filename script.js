    let width = innerWidth ;
function ShowMenu(){
    let width = innerWidth    
    let menu = document.getElementById("menu");
    let header = document.getElementById("header")
    if(menu.style.display == "block" && width < 1025){
        menu.style.display = "none"
        header.style.height = "150px"        
    }
    else{
        menu.style.display = "block"
        header.style.height = "450px"
    }
}
