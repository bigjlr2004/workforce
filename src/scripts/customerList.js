import { getData } from "./dataAccess.js";



const customerEmployees = (customer,assignedEmployees) => {

    

    const customHTML = assignedEmployees.map(employee => { //format the employees for display by mapping through the assignedEmployees
        return `<li>${employee.firstName} ${employee.lastName}</li>`  
      }).join("")

      let html =` <h3>${customer.name}</h3>
                <ul>
                ${customHTML}
                </ul>
      `

    return html 
}




export const customerList = ()=> {
    const customerToEmployeeRelationship = getData("customerEmployees")
    const employees = getData("employees")
    const customers = getData("customers")

let html = `<div class="customer__employeelist"><h2> Customer Employee List</h2>

    ${customers.map( // map through the customers
        (customer) => {
            const filteredEmployeesToCustomer = customerToEmployeeRelationship.filter(cus => 
                customer.id === cus.customerId) //filter the the employees for the mapped customer
       
                //map through the filteredEmployeesToCustomer
            const assignedEmployees = filteredEmployeesToCustomer.map(filteredEmployee => {
                return employees.find( //for each employee find/return the employee object in the employees table
                    (employee) => {
                        return employee.id === filteredEmployee.employeeId
                    }
                )
            })
            
            return customerEmployees(customer, assignedEmployees)

            }
    
   
        ).join("")}
        
</div>`
return html
}