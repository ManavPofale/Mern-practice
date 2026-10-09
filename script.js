const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
    result.innerHTML = `
    <h2>Registration Successful</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Course:</strong> ${course}</p>
    `;
});