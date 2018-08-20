const loadPlaces = require("./placeList")
const dataManager = require("./DataManager")
//const session = require("../dataManager/sessionActiveUser")


function loadPlaceForm() {
    const addForm = document.getElementById("addPlace");
    addForm.innerHTML = `
<fieldset>
    <label for="newPlace">New Place:</label>
    <input required type="text" id="newPlace">
</fieldset>
<fieldset>
    <label for="entryDate">Country:</label>
    <input required type="text" id ="newPlaceCountry">
</fieldset>

<button id="SaveEntryButton">Save Entry</button>
`


function clearForm () {
document.getElementById("newPlace").value = "";
document.getElementById("newPlaceCountry").value = ""
    }

//const userObject = session.getActiveUser() ----replace with entries into other tables

    document.getElementById("SaveEntryButton").addEventListener("click", () => {
        //const loadPlaces = require("./placeList")
        const newPlaceEntry = {
            name: document.getElementById("newPlace").value,
            country: document.getElementById("newPlaceCountry").value,
            //userID: userObject.id
        }
        //POST to api
        dataManager.createNewPlace(newPlaceEntry).then(() => {
            clearForm()})
            .then(() => {
            //console.log(loadTasks())
            //$("#addPlace").hide()
            loadPlaces()
        })


    })


}
module.exports = loadPlaceForm
