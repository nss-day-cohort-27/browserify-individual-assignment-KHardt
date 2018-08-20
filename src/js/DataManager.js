const dataManager = Object.create(null, {
    getAllPlaces: {
        value: () => {
            return fetch("http://localhost:8088/places").then(r => r.json())

        }
    },

    createNewPlace: {
        value: (newPlace) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlace)
            }).then(r => r.json)
        }
    },

    deletePlace: {
        value: (id) => {
            return fetch(`http://localhost:8088/places/${id}`, {
                method: "DELETE"
            }).then(r => r.json)
        },
        updatePlace: {
            value: (id) => {
                return fetch(`http://localhost:8088/places/${id}`, {
                    method: "PATCH"
                }).then(r => r.json)
            }
        },
    },



})

module.exports = dataManager


