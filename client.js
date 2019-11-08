$(document).ready(onReady);

function onReady(){
    console.log('hello');
    $('#add-employee').on('click', addEmployeesTable)
}

//make employees array
const employees =[];

function addEmployeesTable(event){
    event.preventDefault();
    let firstName = $('#first-name').val()
    let lastName = $('#last-name').val()
    let id = $('#em-id').val()
    let title = $('#title').val()
    let annualSalary = $('#annual-salary').val()

    employees.push(
        {
            firstName, lastName, id, title, annualSalary
        }
    )

    // clear inputs
    $('#first-name').val('');
    $('#last-name').val('');
    $('#em-id').val('');
    $('#title').val('');
    $('#annual-salary').val('');

    showEmployees(employees)
}