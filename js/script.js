var arr = [{
    name: "Yaakov"
}, {
    name: "John"
}, {
    name: "jen"
}, {
    name: "Jason"
}, {
    name: "Paul"
}, {
    name: "Frank"
}]
arr.forEach((val) => {
    firstLetter = val.name.split(" ")[0].split("")[0];

    if (firstLetter == "J" || firstLetter == "j") {
        console.log("Goodbye " + val.name);
    } else {
        console.log("Hello " + val.name);
    };

});

