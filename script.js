const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
    // setting cookie for 1 month , after 1 month cookie will be expired automatically
    document.cookie = "CookieBy=PoojaMulik; max-age="+60*60*24*30;
    if(document.cookie){
        // if the above cookie set
        cookieBox.classList.add("hide"); //hide cookie box once cookie set
    }else{
        alert("cookie can't be set !"); //if cookie can't be set the alert an error
    }
}

//let's hide the cookie box if cookie is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=PoojaMulik"); //checking our set cookie

//if the given string not found in the all cookies then it'll return -1 and we'll show the box if it return -1 otherwise hide the box
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");