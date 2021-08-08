window.addEventListener("load", function(){
    let all = document.getElementById("all");
    let askania = document.getElementById("askania");
    let kern = document.getElementById("kern");
    let wild = document.getElementById("wild");
    let mom = document.getElementById("mom");
    let leica = document.getElementById("leica");

    all.addEventListener("change", e => {
        if (all.checked) console.log("all");
    });
    askania.addEventListener("change", e => {
        if (askania.checked) console.log("askania");
    });
    kern.addEventListener("change", e => {
        if (kern.checked) console.log("kern");
    });
    wild.addEventListener("change", e => {
        if (wild.checked) console.log("wild");
    });
    mom.addEventListener("change", e => {
        if (mom.checked) console.log("mom");
    });
    leica.addEventListener("change", e => {
        if (leica.checked) console.log("leica");
    });
    // if (all.checked) console.log("all");
    // if (askania.checked) console.log("askania");
    // if (kern.checked) console.log("kern");
    // if (wild.checked) console.log("wild");
    // if (mom.checked) console.log("mom");
    // if (leica.checked) console.log("leica");
});
