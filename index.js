function validateForm() {
  if (checkEmail() && checkZip() && checkPassword() && checkPassword2()) {
    alert('High Five!!!!!');
  } else {
    alert('no high five for you :(');
  }
}

function checkEmail() {
  const email = document.getElementById('email');
  if (!email.checkValidity() || email.value === '') {
    email.style.border = '2px solid red';
    console.log(email);
  } else {
    email.style.border = '2px solid green';
    return true;
  }
  return false;
}

function checkZip() {
  const zip = document.getElementById('zip');
  if (!zip.checkValidity() || zip.value === '' || zip.value.length !== 5) {
    zip.style.border = 'solid 2px red';
  } else {
    zip.style.border = 'solid 2px green';
    return true;
  }
  return false;
}

function checkPassword() {
  const pw = document.getElementById('pw');
  if (pw.value !== '' && pw.value.length >= 4 && pw.value.length <= 25) {
    pw.style.border = 'solid 2px green';
    return true;
  }
  pw.style.border = 'solid 2px red';
  return false;
}

function checkPassword2() {
  const pw = document.getElementById('pw');
  const pw2 = document.getElementById('pw2');
  if (checkPassword() && pw.value === pw2.value) {
    pw2.style.border = 'solid 2px green';
    return true;
  }
  pw2.style.border = 'solid 2px red';
  return false;
}
