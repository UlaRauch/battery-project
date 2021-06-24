
    const darkModeToggle = null;

    let darkMode = localStorage.getItem('darkMode');

    const enableDarkMode = () => {
        localStorage.setItem("darkMode", "enabled");
    }

    const disableDarkMode = () => {
        localStorage.setItem("darkMode", null);

    }

    darkModeToggle.addEventListener("click", () => {
        if(darkMode !== "enabled"){
            enableDarkMode();
            console.log(darkMode);
        }else{
            disableDarkMode();
            console.log(darkMode);
        }
    });


