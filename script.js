const form = document.getElementById('studentForm');
const tableBody = document.querySelector('#studentTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById('course').value;
  const email = document.getElementById('email').value;

  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  form.reset();
});

tableBody.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('tr').remove();
  }
});
6