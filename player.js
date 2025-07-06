// this function will take the input from the form and display it on the page
function processForm(){
    // create variable shortcuts
    let username = document.getElementById("txtUser");
    let weapon = document.getElementById("txtWeapon");
    let health = document.getElementById("numHealth");
    let points = document.getElementById("numPoints");

    // format the information given by the user for output purposes
    let output = "Userame: " + username.value + "<BR>" + "Weapons: " + weapon.value + "<BR>" + "Health: " + health.value + "<BR>" + "Points: " + points.value;
    
    // display h2 element
    document.getElementById("h2Player").style.display = "block";

    // direct reference to the output
    document.getElementById("divOutput").innerHTML = output;
    // display output elements and styling
    document.getElementById("divOutput").style.display = "block";

    // clear out the form inputs in case the browser does not do it automatically
    if (username != "") {
        username.value = "";
        weapon.value = "";
        health.value = "";
        points.value = "";
    }
}