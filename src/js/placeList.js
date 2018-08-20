const DataManager = require("./DataManager")
//const sessionUser = require("../dataManager/sessionActiveUser")
//const loadTaskForm = require("./taskForm")
//const $ = require("jquery")

//load tasks associated with userID in session storage
function loadPlaces() {
  let findPlaces = DataManager.getAllPlaces()

  findPlaces.then(result => {
    console.log(result)
    document.getElementById("container")
    container.textContent = ""
    result.forEach(element => {
      document.getElementById("container").innerHTML += `
      
        <h4>Place: ${element.name}</h4>
        <h4>Country: ${element.country}</h4>
        `
    })
  })


}


module.exports = loadPlaces