import { fetchData } from "./dataAccess.js"
import { workforce } from "./workforce.js"





const mainContainer = document.querySelector("#container")
const render =() => {
    
    fetchData("departments").then(
    fetchData("locations")).then(() =>
    fetchData("customerEmployees")).then(() =>
    fetchData("customers")).then(() =>
    fetchData("computers")).then(() =>
    fetchData("employees")).then(()=>
    {
            mainContainer.innerHTML = workforce()
        }
    )
}
render()