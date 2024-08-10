import { useRef } from "react";
import { Link } from "react-router-dom";
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const empRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Add a new document with a generated id to the "employees" collection
      const snapshot = await getDocs(collection(db, "employees"));
      const employeesList = snapshot.docs.map(
        (doc) => doc.data().employee_code
      );
      const employee = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const index = employeesList.indexOf(empRef.current.value);
      if (index !== -1) {
        if(employee[index].password === passRef.current.value.trim()){
            navigate("/login");
        }else{
            alert('Entered password is incorrect!')
        }
        return;
      } else {
        alert("Employee code not registered!");
        navigate("/user");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  return (
    <>
      <main>
        <section className="welcome">
          <h2>Welcome to Central Electronics Limited!</h2>
          <form onSubmit={handleSubmit} className="employee-form">
            <label htmlFor="employee-code">Employee Code:</label>
            <input
              ref={empRef}
              type="text"
              id="employee-code"
              placeholder="Enter Employee code"
            />
            <label htmlFor="password">Password:</label>
            <input ref={passRef} type="password" id="password" placeholder="***" />
            <button type="submit">Enter</button>
            <p>
              <Link to="/user">Create New User</Link>
            </p>
          </form>
          <p className="example">Ex.: RG#,COT#,...</p>
        </section>
      </main>
    </>
  );
};

export default Home;