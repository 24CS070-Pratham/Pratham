// Initial course data
const courseData = [
  { code: "ITUE203", name: "Web Development" },
  { code: "CSUC201", name: "Data Structures & Algorithm" },
  { code: "ITUC201", name: "Computer Networks" },
  { code: "HSUA201", name: "Logical Thinking" }
];

// Render all course rows
function renderTable() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  courseData.forEach((course, index) => {
    const row = document.createElement("tr");

    const codeCell = document.createElement("td");
    codeCell.textContent = course.code;

    const nameCell = document.createElement("td");
    nameCell.textContent = course.name;

    const removeCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.background = "none";
    deleteBtn.style.border = "none";
    deleteBtn.style.fontSize = "1.2rem";
    deleteBtn.style.color = "#b71c1c";
    deleteBtn.title = "Remove this course";

    deleteBtn.addEventListener("click", () => {
      courseData.splice(index, 1);
      renderTable();
      updateTimestamp();
    });

    removeCell.appendChild(deleteBtn);

    row.appendChild(codeCell);
    row.appendChild(nameCell);
    row.appendChild(removeCell);
    tableBody.appendChild(row);
  });
}

// Add new course
function addCourse() {
  const codeInput = document.getElementById("courseCode");
  const nameInput = document.getElementById("courseName");

  const code = codeInput.value.trim().toUpperCase();
  const name = nameInput.value.trim();

  if (!code || !name) {
    alert("Both Course Code and Course Name are required.");
    return;
  }

  const duplicate = courseData.some(course => course.code === code);
  if (duplicate) {
    alert("Course code already exists!");
    return;
  }

  courseData.push({ code, name });
  renderTable();
  updateTimestamp();

  codeInput.value = "";
  nameInput.value = "";
}

// Update timestamp
function updateTimestamp() {
  const updatedSpan = document.getElementById("lastUpdated");
  const now = new Date();
  updatedSpan.textContent = now.toLocaleString();
}

// Init page
window.onload = () => {
  renderTable();
  updateTimestamp();
};
