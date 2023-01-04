import { customerList } from "./customerList.js"
import {employee} from "./employeeList.js"

export const workforce = () => {
    return `
    ${employee()}
    ${customerList()}
    `
}