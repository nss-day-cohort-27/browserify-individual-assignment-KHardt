// Handle delete button clicks
const dataManager = require("./DataManager")
const loadPlaces = require("./placeList")



function deletePlaces () {
document.getElementById("container").addEventListener("click", event => {
    console.log("hi")
    if(event.target.id.split("--")[0] === "remove"){
        let id = event.target.id.split("--")[1]
        dataManager.deletePlace(id).then(()=> {
           loadPlaces()
    })
} //had to put edit in here because removeTasks is linked with DOM info for all buttons via tasklist.
/*
else if(event.target.id.split("--")[0] === "editIt"){
        let id = event.target.id.split("--")[1]
        taskManager.editTasks(id)
        .then(taskObject => {
            document.getElementById("taskForm").value = taskObject.entryContent
            console.log(id)
 $("#taskForm").show() //hides the form after save
           loadTasks() //show updated list.
    })
}
*/


})

}

module.exports = deletePlaces
