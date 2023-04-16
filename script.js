
let About = document.querySelector('.About');
let about = document.querySelector('.about');
let firstBlog = document.querySelector('.first-blog');
let secondBlog = document.querySelector('.second-blog');
let thirdBlog = document.querySelector('.third-blog');
let fourthBlog = document.querySelector('.fourth-blog');


firstBlog.addEventListener("click", function () {
	window.location.href = firstBlog.textContent;

});
secondBlog.addEventListener("click", function () {
	window.location.href = secondBlog.textContent;
});

thirdBlog.addEventListener("click", function () {
	window.location.href = thirdBlog.textContent;
});

fourthBlog.addEventListener("click", function () {
	window.location.href = fourthBlog.textContent;
});









// import React, { useState } from 'react';

// function SignInForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Submitting email ${email} and password ${password}`);
//     // TODO: Implement form submission logic
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input 
//         type="email" 
//         id="email" 
//         value={email} 
//         onChange={(event) => setEmail(event.target.value)} 
//         required 
//       />

//       <label htmlFor="password">Password:</label>
//       <input 
//         type="password" 
//         id="password" 
//         value={password} 
//         onChange={(event) => setPassword(event.target.value)} 
//         required 
//       />

//       <button type="submit">Sign In</button>
//     </form>
//   );
// }
