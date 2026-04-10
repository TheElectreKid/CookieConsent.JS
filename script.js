window.onload = function() {
    let consentstatus = localStorage.getItem('consent')

    if (consentstatus == null) {
        setTimeout(() => {
            document.getElementById("consentbanner").style.display = "block";
        }, 3000)
    }
}

document.getElementById("acceptcookies").addEventListener('click', () => {
    localStorage.setItem('consent', 'true');
    document.getElementById("consentbanner").style.display = "none";
})

document.getElementById("declinecookies").addEventListener('click', () => {
    localStorage.setItem('consent', 'false');
    document.getElementById("consentbanner").style.display = "none";
})

