window.onload = () => {
    document.getElementById("profile").animate([{opacity: 0}, {opacity: 1}], {
        duration: 1000,
        fill: "forwards",
    });
}