import React, {useState} from 'react';
import  "./SignupForm.css";


export default function SignupForm() {
  
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
  

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const [value1, setValue1] = useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  }
  
  const[value2, setValue2] = useState('')
  const handleChange2 = (event)=> {
    setValue2(event.target.value);
  }




    return (
        <div className="container">
            <div className="signup-form">
              <h2 className="signup-form-heading">
                  Let's setup your account
              </h2>
              <p className="signup-form-paragraph">
                  Already have an account? <a href="#c" className="signup-form-link">Sign in</a>
              </p>
              <form action="" className="form">
                  <div className="form-section">
                    <input type="text" className="form-input" placeholder=" " id="name" value={value} onChange={handleChange} />
                    <label htmlFor="name" className="form-label">Your name</label>
                  </div>
                  <div className="form-section">
                    <input type="email" className="form-input" placeholder=" " id="email" value={value1} onChange={handleChange1} />
                    <label htmlFor="email" className="form-label">Email address</label>
                    <span>Please enter a valid email address</span>
                  </div>
                  
                  <div className="form-section">
                    <select name="description" id="description" className="form-input select">
                    </select>
                    <label htmlFor="desciption" className="description-form-label">I would describe my user type as</label>
                    </div>
                  <div className="form-section">
                  <input className="form-input" placeholder=" " id="password" value={value2} onChange={handleChange2} type={passwordShown ? "text" : "password"} />
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" onClick={togglePasswordVisiblity} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> 
                    <label htmlFor="password" className="form-label">Password</label>
                    <small className="form-password">Minimum 8 charachters</small>

                </div>
              </form>
              <div className="form-btn">
              <button type="submit" className="form-btn-btn" disabled={!value || !value1 || !value2} > Next</button>
              </div>
              <div className="form-terms">
                  <small className="form-terms-conditions">
                      By clicking a "Next" button, you agree to creating a free account, and to <a href="#c" className="form-terms-link">Terms of Service</a> and <a href="#c" className="form-terms-link">Privacy Policy</a>.
                  </small>
              </div>
            </div>
        </div>
    )
}
