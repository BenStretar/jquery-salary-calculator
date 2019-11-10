$(document).ready(onReady);

function onReady(){
    console.log('hello');
    $('#add-employee').on('click', addEmployeesTable)
    calculateMonthlyTotal();
    $('#employee-table').on('click', '.delete', removeEmployee)
}

//make employees array
const employees =[];

// take input deom the form and put into employees array
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

    showEmployees(employees);
    calculateMonthlyTotal();
}

// show employees on the DOM

function showEmployees(array){
    $('#employee-table').empty();

    for (let employees of array) {
        $('#employee-table').append(`
        <tr>
            <td>${employees.firstName}</td>
            <td>${employees.lastName}</td>
            <td>${employees.id}</td>
            <td>${employees.title}</td>
            <td>${employees.annualSalary}</td>
            <td><button class='delete'>Delete</button></td>
        </tr>
        `);
    }
}
//remove employee from the DOM
function removeEmployee(){
   // console.log('removeEmployee');

    let button = $(this);
    // console.log('button', button);

    button.closest('tr').remove();
}




function calculateMonthlyTotal(){
    let totalSal = 0;

    for (let i = 0; i < employees.length; i++){
        totalSal += Number(employees[i].annualSalary)
    }// end for
    // annualSal divided by 12
    const monthlySal = totalSal / 12;

    // display monthly budget
    let monthlyBudget = $('#monthlyTotal');
    monthlyBudget.empty();
    monthlyBudget.append( monthlySal )

    // change color if over or equal to $20,000
    if (monthlySal >= 20000){
        $('#monthlyTotal').addClass('red');
        $('#monthlyHeader').addClass('red');
    }
}