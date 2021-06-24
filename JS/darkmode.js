
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    let darkMode = localStorage.getItem('darkMode');

    const enableDarkMode = () => {
        localStorage.setItem("darkMode", "enabled");
        let main = document.getElementById("main");
        main.className = "main-darkmode";
        main.classList.remove("main-lightmode");

        let body = document.getElementById("body");
        body.className = "body-darkmode";
        body.classList.remove("body-lightmode");

        let header = document.getElementById("header");
        header.className = "nav-darkmode";
        header.classList.remove("nav-lightmode");

        let mainArticle = document.getElementById("h1");
        mainArticle.className = "header-darkmode";
        mainArticle.classList.remove("header-lightmode");

        let footer = document.getElementById("footer");
        footer.className = "footer-darkmode";
        footer.classList.remove("footer-lightmode");


    }

    const disableDarkMode = () => {
        localStorage.setItem("darkMode", null);
        let main = document.getElementById("main");
        main.className = "main-lightmode";
        main.classList.remove("main-darkmode");

        let body = document.getElementById("body");
        body.className = "body-lightmode";
        body.classList.remove("body-darkmode");

        let header = document.getElementById("header");
        header.className = "nav-lightmode";
        header.classList.remove("nav-darkmode");

        let mainArticle = document.getElementById("h1");
        mainArticle.className = "header-lightmode";
        mainArticle.classList.remove("header-darkmode");

        let footer = document.getElementById("footer");
        footer.className = "footer-lightmode";
        footer.classList.remove("footer-darkmode");

    }




    //sonst ist der darkmode nicht aktiv wenn die seite neu geladen wird :(
    if(darkMode === 'enabled'){
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if(darkMode !== "enabled"){
            enableDarkMode();
            console.log(darkMode);
        }else{
            disableDarkMode();
            console.log(darkMode);
        }
    });


