


// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const togglePassword=document.querySelector('#togglePassword');
const passwordInput=document.querySelector('#password');
const GenderInput=document.querySelector('#gender');
const DOBInput=document.querySelector('#DOB');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
togglePassword.addEventListener('click',function(e){
	const type=password.getAttribute('type')==='password' ? 'text' : 'password';
	password.setAttribute('type',type);
	this.classList.togglePassword('fa-eye-slash');})

function onSubmit(e) {
	e.preventDefault();
	
	if(nameInput.value === '' || emailInput.value === '') {
	  // alert('Please enter all fields');
	  msg.classList.add('error');
	  msg.innerHTML = 'Please enter all fields';
  
	  // Remove error after 3 seconds
	  setTimeout(() => msg.remove(), 3000);
	} else {
	  // Create new list item with user
	  const li = document.createElement('li');
  
	  // Add text node with input values
	  li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
	  // Add HTML
	  // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
	  // Append to ul
	  userList.appendChild(li);
  
	  // Cle
	}
  }