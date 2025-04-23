interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstname: 'Jane',
    lastname: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstnameCell = document.createElement('td');
    const lastnameCell = document.createElement('td');

    firstnameCell.textContent = student.firstname;
    lastnameCell.textContent = student.lastname;

    row.appendChild(firstnameCell);
    row.appendChild(lastnameCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
