

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [editStudentIndex, setEditStudentIndex] = useState(null);
  const [editingAccount, setEditingAccount] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  
  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    setStudents([...students, student]);
    e.target.reset();
  };

  
  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  
  const handleEditStudent = (e) => {
    e.preventDefault();
    const updatedStudent = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    const updatedStudents = [...students];
    updatedStudents[editStudentIndex] = updatedStudent;

    setStudents(updatedStudents);
    setEditStudentIndex(null);
  };


  const handleEditAccount = (e) => {
    e.preventDefault();
    const updatedAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const updatedAccounts = accounts.map((acc) =>
      acc.email === account.email ? updatedAccount : acc
    );

    setAccounts(updatedAccounts);
    setAccount(updatedAccount);
    setEditingAccount(false);
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello {account.email}</h1>
          <button onClick={logout}>Log out</button>

          {editingAccount ? (
            <form onSubmit={handleEditAccount}>
              <h2>Edit Account</h2>
              <input
                type="email"
                name="email"
                defaultValue={account.email}
                required
              />
              <input
                type="password"
                name="pass"
                defaultValue={account.pass}
                required
              />
              <button>Save</button>
            </form>
          ) : (
            <button onClick={() => setEditingAccount(true)}>Edit Account</button>
          )}

          <div>
            {editStudentIndex !== null ? (
              <form onSubmit={handleEditStudent}>
                <h2>Edit Student</h2>
                <input
                  type="text"
                  name="studentName"
                  defaultValue={students[editStudentIndex].name}
                  required
                />
                <input
                  type="text"
                  name="studentLastname"
                  defaultValue={students[editStudentIndex].lastname}
                  required
                />
                <input
                  type="number"
                  name="studentAge"
                  defaultValue={students[editStudentIndex].age}
                  required
                />
                <button>Save</button>
              </form>
            ) : (
              <form onSubmit={addStudent}>
                <h2>Add Student</h2>
                <input
                  type="text"
                  name="studentName"
                  placeholder="student name"
                  required
                />
                <input
                  type="text"
                  name="studentLastname"
                  placeholder="student lastname"
                  required
                />
                <input
                  type="number"
                  name="studentAge"
                  placeholder="student age"
                  required
                />
                <button>Add Student</button>
              </form>
            )}
          </div>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    <button onClick={() => setEditStudentIndex(index)}>
                      Edit
                    </button>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
