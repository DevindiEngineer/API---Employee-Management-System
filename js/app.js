const API_URL =
    "https://6aa3100ae7ae868cdf7a91ce.mockapi.io/employees";

let employeesData = [];
let editingId = null;

async function loadEmployees() {

    console.log(employeesData[0]);

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load employees");
        }

        employeesData = await response.json();

        console.log("Employees loaded:", employeesData.length);

        displayEmployees();
        updateDashboard();
    } catch (error) {
        console.error("API loading error:", error);
    }
}

let department = document.getElementById("departments");
let designation = document.getElementById("designations");

department.onchange = function () {

    if (department.value == "Product & Engineering") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Full-Stack Developer</option>
            <option>Frontend Engineer</option>
            <option>Backend Engineer</option>
            <option>UI/UX Designer</option>
            <option>AI/ML Engineer</option>
            <option>QA (Quality Assurance) Engineer</option>
            `;
    }

    if (department.value == "Sales & Marketing") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Digital Marketing Executive</option>
            <option>Content & SEO Specialist</option>
            <option>Direct Sales Manager</option>
            <option>Customer Success Executive</option>
            `;
    }

    if (department.value == "Finance & Accounting") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Accounts Clerk</option>
            <option> Accounts Executive </option>
            <option> Billing Specialist</option>
            <option>Payroll Executive</option>
            <option>Financial Analyst Specialist</option>
            <option>Accountant</option>
            `;
    }

    if (department.value == "Operations & HR") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>HR Executive</option>
            <option>HR Specialist</option>
            <option>Project/Opeartions Executive</option>
            <option>Project/Operations/HR Manager</option>
            <option>Administrative Specialist</option>
            `;
    }

    if (department.value == "Legal, Security & Compliance") {
        designation.innerHTML = `
            <option>Select Designation</option>
            <option>Legal Assistant</option>
            <option>Legal/Compliance  Specialist</option>
            <option>Cybersecurity Analyst</option>
            <option>General Counsel</option>
            `;
    }

};

async function saveEmployee() {
    const banner = document.getElementById("successBanner");

    const empName = document.getElementById("empName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("TP").value.trim();
    const gender = document.getElementById("gender").value;
    const DOJ = document.getElementById("DOJ").value;
    const departments = document.getElementById("departments").value;
    const designations = document.getElementById("designations").value;
    console.log("Designation:", designations);
    const types = document.getElementById("types").value;
    const salary = document.getElementById("salary").value.trim();

    if (
        empName === "" ||
        email === "" ||
        phone === "" ||
        gender === "" ||
        DOJ === "" ||
        departments === "" ||
        designations === "" ||
        designations === "Select Designation" ||
        types === "" ||
        salary === ""
    ) {
        showBanner("Please fill all fields", "red");
        return;
    }

    if (phone.length !== 10) {
        showBanner("Phone number must contain exactly 10 digits", "red");
        return;
    }

    if (!phone.startsWith("07")) {
        showBanner("Phone number must start with 07", "red");
        return;
    }

    const employee = {
        empName: empName,
        email: email,
        TP: phone,
        gender: gender,
        DOJ: DOJ,
        departments: departments,
        designations: designations,
        types: types,
        salary: Number(salary)
    };

    try {
        let response;

        if (editingId === null) {
            response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employee)
            });

            if (!response.ok) {
                throw new Error("Failed to add employee");
            }

            showBanner("Saved Successfully!", "green");
        } else {

            console.log("editingId =", editingId);

            const response = await fetch(
                `${API_URL}/${employeesData[editingId].id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(employee)
                }
            );

            console.log("PUT status:", response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.log(errorText);
                throw new Error(errorText);
            }

            showBanner("Updated Successfully!", "green");

            await loadEmployees();

            resetForm();

            return;
        }

        resetForm();
        await loadEmployees();
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

function showBanner(message, color) {
    const banner = document.getElementById("successBanner");

    banner.innerHTML = message;
    banner.style.color = color;
    banner.style.display = "block";

    setTimeout(function () {
        banner.style.display = "none";
    }, 1500);
}

function displayEmployees(employeesToDisplay = null) {

    let allEmployees = employeesData;

    let employeeList;

    if (employeesToDisplay === null) {
        employeeList = allEmployees.map((employee, index) => {
            return {
                employee: employee,
                originalIndex: index
            };
        });
    } else {
        employeeList = employeesToDisplay;
    }

    let tableBody =
        document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";

    if (employeeList.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="9" class="no-results">
                    No matching employees found
                </td>
            </tr>
        `;

        return;
    }

    employeeList.forEach(function (item) {

        let emp = item.employee;
        let index = item.originalIndex;

        let rowClass = "";

        if (emp.departments === "Product & Engineering") {
            rowClass = "eng-row";
        }
        else if (emp.departments === "Sales & Marketing") {
            rowClass = "sales-row";
        }
        else if (emp.departments === "Finance & Accounting") {
            rowClass = "finance-row";
        }
        else if (emp.departments === "Operations & HR") {
            rowClass = "hr-row";
        }
        else if (
            emp.departments ===
            "Legal, Security & Compliance"
        ) {
            rowClass = "legal-row";
        }

        console.log(emp.id, emp.empName);

        tableBody.innerHTML += `
            <tr class="${rowClass}">
                <td>${emp.empName}</td>

                <td>
                    ${emp.email}<br>
                    ${emp.TP}
                </td>

                <td>${emp.gender}</td>

                <td>${emp.DOJ}</td>

                <td class="department-cell ${rowClass}">
                    ${emp.departments}
                </td>

                <td>${emp.designations}</td>

                <td>${emp.types}</td>

                <td>Rs. ${Number(emp.salary).toLocaleString()}</td>

                <td class="action-cell">

                    <button
                        type="button"
                        class="edit-btn"
                        onclick="editEmployee(${index})"
                    >
                        Edit
                    </button>

                    <button
    type="button"
    class="delete-btn"
    onclick="deleteEmployee(${index})"
>
    Delete
</button>

                </td>
            </tr>
        `;
    });
}


loadEmployees();

function updateDashboard() {

    let employees = employeesData;

    document.getElementById("totalEmployees").innerHTML =
        employees.length;

    let departments =
        [...new Set(employees.map(emp => emp.departments))];

    document.getElementById("totalDepartments").innerHTML =
        departments.length;

    let permanentCount =
        employees.filter(emp =>
            emp.types === "Permanent"
        ).length;

    document.getElementById("permanentEmployees").innerHTML =
        permanentCount;

    let contractCount =
        employees.filter(emp =>
            emp.types === "Contract"
        ).length;

    document.getElementById("contractEmployees").innerHTML =
        contractCount;

    let traineeCount =
        employees.filter(emp =>
            emp.types === "Trainee/Intern"
        ).length;

    document.getElementById("traineeEmployees").innerHTML =
        traineeCount;

    let totalSalary =
        employees.reduce(
            (sum, emp) =>
                sum + Number(emp.salary),
            0
        );

    let averageSalary =
        employees.length > 0
            ? Math.round(totalSalary / employees.length)
            : 0;

    document.getElementById("averageSalary").innerHTML =
        "Rs. " + averageSalary.toLocaleString();
}

async function deleteEmployee(id) {
    const answer = confirm(
        "Are you sure you want to delete this employee?"
    );

    if (!answer) {
        return;
    }

    try {
        console.log("Deleting employee ID:", id);

        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Delete failed: ${response.status} ${errorText}`
            );
        }

        showBanner("Deleted Successfully!", "green");

        await loadEmployees();
    } catch (error) {
        console.error("Delete error:", error);
        showBanner("Could not delete employee", "red");
    }
}


function editEmployee(index) {

    const employee = employeesData[index];

    editingId = index;

    document.getElementById("empName").value =
        employee.empName;

    document.getElementById("email").value =
        employee.email;

    document.getElementById("TP").value =
        employee.TP;

    document.getElementById("gender").value =
        employee.gender;

    document.getElementById("DOJ").value =
        employee.DOJ;

    document.getElementById("departments").value =
        employee.departments;

    department.onchange();

    setTimeout(() => {
        document.getElementById("designations").value =
            employee.designations;
    }, 100);

    document.getElementById("types").value =
        employee.types;

    document.getElementById("salary").value =
        employee.salary;

    document.getElementById("saveButton").innerText =
        "Update Employee";
}

function resetForm() {

    document.getElementById("empName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("TP").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("DOJ").value = "";
    document.getElementById("departments").value = "";
    document.getElementById("designations").innerHTML =
        '<option value="">Select Designation</option>';

    document.getElementById("types").value = "";
    document.getElementById("salary").value = "";

    editingId = null;

    document.getElementById("saveButton").innerText =
        "Save Employee";
}

function applyFilters() {
    const searchText =
        document.getElementById("searchEmployee")
            .value.trim().toLowerCase();

    const selectedDepartment =
        document.getElementById("filterDepartment").value;

    const selectedType =
        document.getElementById("filterType").value;

    const filteredEmployees = employeesData
        .map(function (employee, index) {
            return {
                employee: employee,
                originalIndex: index
            };
        })
        .filter(function (item) {
            const emp = item.employee;

            const employeeName =
                String(emp.empName || "").toLowerCase();

            const employeeEmail =
                String(emp.email || "").toLowerCase();

            const matchesSearch =
                employeeName.includes(searchText) ||
                employeeEmail.includes(searchText);

            const matchesDepartment =
                selectedDepartment === "" ||
                emp.departments === selectedDepartment;

            const matchesType =
                selectedType === "" ||
                emp.types === selectedType;

            return (
                matchesSearch &&
                matchesDepartment &&
                matchesType
            );
        });

    displayEmployees(filteredEmployees);
}

function clearFilters() {

    document.getElementById("searchEmployee").value = "";

    document.getElementById("filterDepartment").value = "";

    document.getElementById("filterType").value = "";

    displayEmployees();
}