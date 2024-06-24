import useInput from "../hooks/useInput";

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    reset: resetFirstNameInput,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    reset: resetLastNameInput,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    reset: resetEmailInput,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@'));

  let isFormValid = false
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    isFormValid = true
  }

  const handleFormSubmission = (event) => {
    event.preventDefault()

    if (!isFormValid) {
      return
    }

    console.log("Form submitted!");
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={handleFormSubmission}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameInputHasError && <p className="error-text">First name should not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && <p className="error-text">Last name should not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Email should be valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
