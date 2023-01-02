<div class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
    <section class="employee__department">
        Works in the IT department
    </section>
</div>

mainContainer.innerHTML = PenPal()

/* define a function that will invoke the function from the penpal.js module
    The following function invokes the fetchData function imported from the dataAccess module
    For each of the databases in the json-server database we need to fetch the data before we can use it 
    in our application. When fetchData() is invoked the database needed is passed along to it in quotes inside
    parentheses. By having one function called fetchData and passing a parameter as an argument we 
    cut back on the repetitive code in the application.
*/
const render =() => {
    fetchData("pals").then(() =>{
            mainContainer.innerHTML = employee()
        }
    )
}
render()