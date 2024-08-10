import React, { useRef } from "react";
import "./style.css";
import { db } from './firebase';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const empRef = useRef();
  const nameRef = useRef();
  const depRef = useRef();
  const passRef = useRef();
  const desRef = useRef();

  // Import your Firebase database instance // Adjust the path to match your file structure

  async function submitForm(e) {
    e.preventDefault();

    // Example data to be submitted
    const data = {
      employee_code: empRef.current.value,
      name: nameRef.current.value,
      department: depRef.current.value,
      password: passRef.current.value,
      destination: desRef.current.value,
    };

    // Reference to the "employees" collection in Firebase
    try {
      // Add a new document with a generated id to the "employees" collection
      const snapshot = await getDocs(collection(db, "employees"));
      const employeesList = snapshot.docs.map(
        (doc) => doc.data().employee_code
      );
      if (employeesList.indexOf(data.employee_code) !== -1) {
        alert("Employee already exists");
        navigate("/");
        return;
      }
      await addDoc(collection(db, "employees"), data);
      alert("Employee created successfully");
      navigate("/");
      // Optionally reset form fields or show success message
      empRef.current.value = "";
      nameRef.current.value = "";
      depRef.current.value = "";
      passRef.current.value = "";
      desRef.current.value = "";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <div>
      <center>
        <h1>Welcome to Central Electronics Limited!</h1>
      </center>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Your form structure */}
        <form onSubmit={submitForm}>
          <label htmlFor="employee-code">Employee Code:</label>
          <input
            ref={empRef}
            type="text"
            id="employee-code"
            name="employee-code"
          />
          <br />
          <br />
          <label htmlFor="full-name">Name:</label>
          <input ref={nameRef} type="text" id="full-name" name="full-name" />
          <br />
          <br />
          <label htmlFor="department-name">Department Name:</label>
          <input
            ref={depRef}
            type="text"
            id="department-name"
            name="department-name"
          />
          <br />
          <br />
          <label htmlFor="Password">Password:</label>
          <input ref={passRef} type="password" id="Password" name="Password" />
          <br />
          <br />
          <label htmlFor="Designation">Designation:</label>
          <input ref={desRef} type="text" id="Designation" name="Designation" />
          <br />
          <br />

          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
};

export default User;