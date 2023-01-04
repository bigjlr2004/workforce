import { getData } from "./dataAccess.js"
import { customerList } from "./customerList.js"

const employeeList =(employee, customer) => {
    const computers = getData("computers")
    const departments =getData("departments")
    const locations = getData("locations")
    const employeeComputer = computers.find(
        (computer) => {
    return computer.id === employee.computerId //return the employee's computer record
    })
    const employeeDepartment = departments.find(
        (department) => {
            return department.id === employee.departmentId //return the employee's department record 
        })
    const employeeLocation = locations.find(
        (location) => {
            return location.id === employee.locationId //return the employee's location record
        })
    const customHTML = customer.map(cus => { //format the customers for display by mapping through the array we passed to it
          return `<li>${cus.name}</li>`  
        })

    let html = `
        <div class="employee">
                <header class="employee__name">
                    <h1>${employee.firstName} ${employee.lastName}</h1>
                </header>
            <div class="employee__bio">
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
    const customerToEmployeeRelationship = getData("customerEmployees")
    const employees = getData("employees")
    const customers = getData("customers")
    
        let html = `
            ${employees.map(
                (employee) => {
                    /*
                    Map through employees. For each employee filter customerToEmployeeRelationship.
                    Filter the records in the customerToEmployeeRelationship to select only
                    the ones that match the employee.id value of the employee we are mapping through.
                    Save them as a new array with just the values in the customerEmployees table that 
                    match the employee ID of the employee we are mapping through.
                    */
                const filteredEmployeeToCustomerRelationship = customerToEmployeeRelationship.filter(emp => 
                    employee.id === emp.employeeId)

                    /*
                        Take the filtered array that has the customerId specific to the employee and map that 
                        relationship to the customers table so that we can get the customer objects that 
                        are specific the employee.
                    */

                    const assignedCustomers = filteredEmployeeToCustomerRelationship.map(filteredCustomer => {
                    return customers.find(
                        (customer) => {
                            return customer.id === filteredCustomer.customerId
                        })
                    }
                    )
                    /*
                        Pass the employee object and the customerObjects specific to that employee 
                        to the employeeList function for HTML display.
                    */
               return employeeList(employee, assignedCustomers)
               
                })
                
                 
           

}`
return html
}


