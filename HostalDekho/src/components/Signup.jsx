import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { addval } from "../features/Hostaldekho/hostaldekhoSlice";
import { Link } from "react-router-dom";

function Signup() {
  const signupdata = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    console.log(signupdata);
  }, [signupdata]);

  const getData = (data) => {
    dispatch(addval(data));
    setIsSubmitted(true);
  };

  return (
    <div className="mainbox">
      {signupdata.length > 0 ? (
        <>
          {signupdata.map((val) => (
            <>
              <h2 key={val.name}>Sign up successfuly!</h2>
              <button className="btn">
                <Link to="/">Go to Home page</Link>
              </button>
            </>
          ))}
        </>
      ) : (
        <div className="formbox">
          {isSubmitted ? (
            <h1>Form Submitted</h1>
          ) : (
            <>
              <h1>Registration Form</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = {
                    name: e.target.name.value,
                    dob: e.target.dob.value,
                    email: e.target.email.value,
                    mono: e.target.mono.value,
                    age: e.target.age.value,
                    gender: e.target.gender.value,
                    address: e.target.address.value,
                  };
                  getData(data);
                }}
              >
                <div>
                  <label>Full Name</label>
                  <input type="text" name="name" />
                </div>
                <div>
                  <label>Date of birth</label>
                  <input type="date" name="dob" />
                </div>
                <div>
                  <label>Email id</label>
                  <input type="email" name="email" />
                </div>
                <div>
                  <label>Mobile No</label>
                  <input type="text" name="mono" />
                </div>
                <div>
                  <label>Age</label>
                  <input type="text" name="age" />
                </div>
                <div>
                  <label>Male</label>
                  <input type="radio" name="gender" value="male" />
                  <label>Female</label>
                  <input type="radio" name="gender" value="female" />
                </div>
                <div>
                  <label>Address</label>
                  <input type="text" name="address" />
                </div>
                <div>
                  <button type="reset">Reset</button>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Signup;
