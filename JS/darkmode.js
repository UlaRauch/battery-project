
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    let darkMode = localStorage.getItem('darkMode');

    const enableDarkMode = () => {
        localStorage.setItem("darkMode", "enabled");
        let x = document.getElementById("easterEgg");
        x.className = "test";
        //x.style.backgroundColor = "red";
    }

    const disableDarkMode = () => {
        localStorage.setItem("darkMode", null);
        let x = document.getElementById("easterEgg");
        x.classList.remove("test");
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


