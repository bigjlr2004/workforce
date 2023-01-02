import { fetchData } from "./dataAccess.js"
import {employee} from "./employeeList.js"



/* define a function that will invoke the function from the penpal.js module
    The following function invokes the fetchData function imported from the dataAccess module
    For each of the databases in the json-server database we need to fetch the data before we can use it 
    in our application. When fetchData() is invoked the database needed is passed along to it in quotes inside
    parentheses. By having one function called fetchData and passing a parameter as an argument we 
    cut back on the repetitive code in the application.
*/
const mainContainer = document.querySelector("#container")
const render =() => {
    fetchData("computers").then(() =>
    fetchData("employees")).then(()=>
    {
            mainContainer.innerHTML = employee()
        }
    )
}
render()