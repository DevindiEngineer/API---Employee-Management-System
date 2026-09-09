let dummyEmployees = [

    {
        empName: "John Smith",
        email: "john@gmail.com",
        TP: "0771234567",
        gender: "Male",
        DOJ: "2024-03-15",
        departments: "Product & Engineering",
        designations: "Full-Stack Developer",
        types: "Permanent",
        salary: "250000"
    },

    {
        empName: "Amanda Perera",
        email: "amanda@gmail.com",
        TP: "0772345678",
        gender: "Female",
        DOJ: "2025-01-05",
        departments: "Operations & HR",
        designations: "HR Executive",
        types: "Contract",
        salary: "150000"
    },

    {
        empName: "Nimal Silva",
        email: "nimal@gmail.com",
        TP: "0773456789",
        gender: "Male",
        DOJ: "2023-11-20",
        departments: "Finance & Accounting",
        designations: "Accountant",
        types: "Permanent",
        salary: "220000"
    },

    {
        empName: "Sarah Fernando",
        email: "sarah@gmail.com",
        TP: "0774567890",
        gender: "Female",
        DOJ: "2024-08-12",
        departments: "Sales & Marketing",
        designations: "Digital Marketing Executive",
        types: "Trainee/Intern",
        salary: "80000"
    },

    {
        empName: "Kasun Jayasinghe",
        email: "kasun@gmail.com",
        TP: "0775678901",
        gender: "Male",
        DOJ: "2022-06-18",
        departments: "Legal, Security & Compliance",
        designations: "Cybersecurity Analyst",
        types: "Permanent",
        salary: "235000"
    },

    {
        empName: "Dilini Peris",
        email: "dilini@gmail.com",
        TP: "0776789012",
        gender: "Female",
        DOJ: "2024-10-10",
        departments: "Product & Engineering",
        designations: "UI/UX Designer",
        types: "Contract",
        salary: "175000"
    },

    {
        empName: "Tharindu Madushan",
        email: "tharindu@gmail.com",
        TP: "0777890123",
        gender: "Male",
        DOJ: "2025-02-01",
        departments: "Operations & HR",
        designations: "Administrative Specialist",
        types: "Trainee/Intern",
        salary: "90000"
    },

    {
        empName: "Kavindi Rodrigo",
        email: "kavindi@gmail.com",
        TP: "0778901234",
        gender: "Female",
        DOJ: "2023-04-22",
        departments: "Sales & Marketing",
        designations: "Customer Success Executive",
        types: "Permanent",
        salary: "185000"
    },

    {
        empName: "Chamara Wijesinghe",
        email: "chamara@gmail.com",
        TP: "0779012345",
        gender: "Male",
        DOJ: "2024-07-12",
        departments: "Finance & Accounting",
        designations: "Financial Analyst Specialist",
        types: "Contract",
        salary: "195000"
    },

    {
        empName: "Ashen Fernando",
        email: "ashen@gmail.com",
        TP: "0771122334",
        gender: "Male",
        DOJ: "2023-09-05",
        departments: "Legal, Security & Compliance",
        designations: "Legal Assistant",
        types: "Permanent",
        salary: "210000"
    }

];

dummyEmployees.push(

{
    empName: "Kevin De Silva",
    email: "kevin@gmail.com",
    TP: "0772233445",
    gender: "Male",
    DOJ: "2024-04-10",
    departments: "Product & Engineering",
    designations: "Backend Engineer",
    types: "Permanent",
    salary: "240000"
},

{
    empName: "Shanika Perera",
    email: "shanika@gmail.com",
    TP: "0773344556",
    gender: "Female",
    DOJ: "2025-05-12",
    departments: "Product & Engineering",
    designations: "QA (Quality Assurance) Engineer",
    types: "Contract",
    salary: "165000"
},

{
    empName: "Dinesh Raj",
    email: "dinesh@gmail.com",
    TP: "0774455667",
    gender: "Male",
    DOJ: "2023-07-25",
    departments: "Product & Engineering",
    designations: "AI/ML Engineer",
    types: "Permanent",
    salary: "310000"
},

{
    empName: "Yasara Fernando",
    email: "yasara@gmail.com",
    TP: "0775566778",
    gender: "Female",
    DOJ: "2024-01-15",
    departments: "Sales & Marketing",
    designations: "Content & SEO Specialist",
    types: "Permanent",
    salary: "170000"
},

{
    empName: "Ravindu Silva",
    email: "ravindu@gmail.com",
    TP: "0776677889",
    gender: "Male",
    DOJ: "2022-10-14",
    departments: "Sales & Marketing",
    designations: "Direct Sales Manager",
    types: "Permanent",
    salary: "210000"
},

{
    empName: "Nadeesha Wijeratne",
    email: "nadeesha@gmail.com",
    TP: "0777788990",
    gender: "Female",
    DOJ: "2023-06-06",
    departments: "Finance & Accounting",
    designations: "Accounts Executive",
    types: "Permanent",
    salary: "190000"
},

{
    empName: "Pramuditha Jayasuriya",
    email: "pramuditha@gmail.com",
    TP: "0778899001",
    gender: "Male",
    DOJ: "2025-03-21",
    departments: "Operations & HR",
    designations: "Project/Opeartions Executive",
    types: "Contract",
    salary: "145000"
},

{
    empName: "Anuki Senanayake",
    email: "anuki@gmail.com",
    TP: "0779900112",
    gender: "Female",
    DOJ: "2024-09-09",
    departments: "Operations & HR",
    designations: "HR Specialist",
    types: "Permanent",
    salary: "175000"
},

{
    empName: "Isuru Madusanka",
    email: "isuru@gmail.com",
    TP: "0771010101",
    gender: "Male",
    DOJ: "2023-05-17",
    departments: "Legal, Security & Compliance",
    designations: "Legal/Compliance Specialist",
    types: "Permanent",
    salary: "230000"
},

{
    empName: "Madhavi Perera",
    email: "madhavi@gmail.com",
    TP: "0772020202",
    gender: "Female",
    DOJ: "2025-02-20",
    departments: "Product & Engineering",
    designations: "Frontend Engineer",
    types: "Trainee/Intern",
    salary: "95000"
}

);

localStorage.setItem(
    "employees",
    JSON.stringify(dummyEmployees)
);

displayEmployees();
updateDashboard();