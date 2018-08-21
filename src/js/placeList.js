const DataManager = require("./DataManager")
//const sessionUser = require("../dataManager/sessionActiveUser")


function loadPlaces() {
  let findPlaces = DataManager.getAllPlaces()

  findPlaces.then(result => {
    //console.log(result)
    document.getElementById("container")
    container.textContent = ""
    result.forEach(element => {
      document.getElementById("container").innerHTML += `
      
        <h4>Place: ${element.name}</h4>
        <h4>Country: ${element.country}</h4>
        <button type="button" name="delete" value="delete" id="remove--${element.id}">Delete<br>
        `
    })
  })


}


module.exports = loadPlaces