
const applicationState = {} 
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8089"

export const fetchData = (data) => {
    return fetch(`${API}/${data}`)
        .then(response => response.json())
        .then(
            (dataReturned) => {
                // Store the external state in application state
                applicationState[data] = dataReturned
            }
        )
}
export const sendData = (data, to) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
}
    return fetch(`${API}/${to}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
       mainContainer.dispatchEvent( new CustomEvent("stateChanged"))
})

}

export const getData = (data) => {
    // return {...applicationState[data]}
    return applicationState[data].map(arr =>({...arr}))
}
