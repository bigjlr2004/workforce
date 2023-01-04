import { getData } from "./dataAccess.js"

const employeeList =(employee, customer) => {
    const computers = getData("computers")
    const departments =getData("departments")
    const locations = getData("locations")
    const employeeComputer = computers.find(
        (computer) => {
    return computer.id === employee.computerId
    })
    const employeeDepartment = departments.find(
        (department) => {
            return department.id === employee.departmentId
        })
    const employeeLocation = locations.find(
        (location) => {
            return location.id === employee.locationId
        })
        let customHTML = customer.map(cus => {
          return `<li>${cus.name}</li>`
        })

    let html = `
        <div class="employee">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
            </header>
        
        <section class="employee__computer">
            Currently using a ${employeeComputer.year} ${employeeComputer.model}
        </section>
        <section class="employee__department">
                 Works in the ${employeeDepartment.name} department.
             </section>
             <section class="employee__location">
        Works at the ${employeeLocation.name} office
    </section>
    <section class="employee__customers">
    Has worked for the following customers.
    <ul>
        ${(customHTML).join("")}
    </ul>
</section>
</div>
    </div>
     `
    
    return html 
}
export const employee =() => {
    const employees = getData("employees")
    const customers = getData("customers")
    const customerRelationships =getData("employeeCustomers")
        let html = `
            ${employees.map(
                (employee) => {
                const relationships = customerRelationships.filter(relationship => 
                    employee.id === relationship.employeeId)
                const assignedCustomers = relationships.map(rel => {
                    return customers.find(
                        (customer) => {
                            return customer.id === rel.customerId
                        })
                    }
                    )
               return employeeList(employee, assignedCustomers)
               
                })
                
                 
           

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
{/* <section class="employee__location">
        Works at the Memphis office
    </section>
</div> */}
