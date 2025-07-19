function checkValidData(email, password) {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)

    if(!isEmailValid) return "Please enter a valid email address.";
    if(!isPasswordValid) return "Your password must contain minimum 6 characters.";

    return null
}

export default checkValidData;