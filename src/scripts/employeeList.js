import { getData } from "./dataAccess.js"

const employeeList =(employee) => {
    const computers = getData("computers")
    const employeeComputer = computers.find(
        (computer) => {
    return computer.id === employee.computerId
    })
    let html = `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
        
        <section class="employee__computer">
            Currently using a ${employeeComputer.year} ${employeeComputer.model}
        </section>
     `
    
    return html
}
export const employee =() => {
    const employees = getData("employees")
        let html = `
            ${ employees.map(
                (employee) => {
                return employeeList(employee)
                 }
            ).join("")
            }`
return html

}

// <div class="employee">
//     <header class="employee__name">
//         <h1>Rainu Ittycheriah</h1>
//     </header>
//     <section class="employee__computer">
//         Currently using a 2015 MacBook Pro
//     </section>
//     <section class="employee__department">
//         Works in the IT department
//     </section>
// </div>