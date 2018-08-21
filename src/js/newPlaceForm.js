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
<fieldset>
    <label for="newPhoto">Photo url:</label>
    <input type="text" id ="newPlacePhoto">
</fieldset>
<button id="SaveEntryButton">Save Entry</button>
`


    function clearForm() {
        document.getElementById("newPlace").value = "";
        document.getElementById("newPlaceCountry").value = ""
    }

    //const userObject = session.getActiveUser() ----replace with entries into other tables

    //const placeObject = dataManager.getAllPlaces[places[0].length -1]

    document.getElementById("SaveEntryButton").addEventListener("click", () => {
        //const loadPlaces = require("./placeList")
        const newPlaceEntry = {
            name: document.getElementById("newPlace").value,
            country: document.getElementById("newPlaceCountry").value,
            //userID: userObject.id
        }


        //POST to api
//two ways I can think of to get the ID back for photos- call DB or get result here
        dataManager.createNewPlace(newPlaceEntry).then(result => {
            console.log(newPlaceEntry)
            const placeObject = newPlaceEntry.id
            console.log(newPlaceEntry.id)
            const newPlacePhoto = {
                photo: document.getElementById("newPlacePhoto").value,
                placeID: placeObject
            }
            console.log(result)
            dataManager.createNewPlacePhoto(newPlacePhoto).then(() => {

            clearForm()
        })
            .then(() => {
                //console.log(loadTasks())
                //$("#addPlace").hide()
                loadPlaces()
            })

        })
    })

}


module.exports = loadPlaceForm
