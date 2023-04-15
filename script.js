

let about=document.querySelector('#about');
let About=document.querySelector('.About');
// let Blogs=documents.querySelector('.Blogs');

about.addEventListener('click',function()
{
    let aboutText=window.location.href="about.html";  
})

let authors=document.querySelector('#authors');
authors.addEventListener('click',function()
{
    window.location.href="authors.html";
})

let contacts=document.querySelector('#contact');
contacts.addEventListener('click',function()
{
    window.location.href="contact.html";
})


let firstBlog=document.querySelector('.first-blog');
let secondBlog=document.querySelector('.second-blog');
let thirdBlog=document.querySelector('.third-blog');
let fourthBlog=document.querySelector('.fourth-blog');


firstBlog.addEventListener("click", function() {
	window.location.href = firstBlog.textContent;
    
});
secondBlog.addEventListener("click", function() {
	window.location.href = secondBlog.textContent;
});

thirdBlog.addEventListener("click", function() {
	window.location.href = thirdBlog.textContent;
});


fourthBlog.addEventListener("click", function() {
	window.location.href = fourthBlog.textContent;
});



