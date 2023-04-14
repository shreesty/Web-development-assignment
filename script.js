
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

    let text1 = "10 Tips For Planning A Successful Road Trip";
    let result1 = text1.link("blog1.html");
    document.querySelector('.first-blog').innerHTML = result1;


let secondBlog=document.querySelector('.second-blog');

    let text2 = "Social media bringing you down?";
    let result2 = text2.link("blog2.html");
    secondBlog=document.querySelector('.second-blog').innerHTML = result2;



let thirdBlog=document.querySelector('.third-blog');
    let text3 = "What Is The Impact Of Artificial Intelligence (AI) On Society?";
    let result3 = text3.link("blog3.html");
    thirdBlog=document.querySelector('.third-blog').innerHTML = result3;



let fourthBlog=document.querySelector('.fourth-blog');

    let text4 = "The Importance of Self-Care";
    let result4 = text4.link("blog4.html");
    fourthBlog=document.querySelector('.fourth-blog').innerHTML = result4;

