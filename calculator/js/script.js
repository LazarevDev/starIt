function theme(){
    const themeId = document.querySelector("#themeId");
    
    if(themeId.getAttribute("href") == "css/lightTheme.css") {
        themeId.href = "css/darkTheme.css";
    }else{
        themeId.href = "css/lightTheme.css";
    }
}