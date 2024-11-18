
// JavaScript form validation function
function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 chars, 1 letter and 1 number

  // Validate email
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password (min 6 characters, must contain at least one letter and one number)
  if (!passwordPattern.test(password)) {
    alert("Password must be at least 6 characters long and contain both letters and numbers.");
    return false;
  }

  // If all validations pass
  return true;
}