let contenr=document.querySelector('#home-banner');
let navbar = document.getElementById('navbar')
contenr.appendChild(navbar)
let heder =document.createElement('div');
navbar.appendChild(heder);
let logo =document.createElement('h2');
logo.style.color='red';
 logo.style.marginRight='600px';
let logoText=document.createTextNode('ZAHID');
logo.appendChild(logoText)

let ul =document.createElement('ul');
ul.classList.add('ul')

navbar.appendChild(heder);
heder.appendChild(logo);
heder.appendChild(ul);
ul.appendChild(logo)

let array=[ "Home","Team","products","Ingradints","Conference","Contact Us",];
let linkId=["home-banner","our-team","products","our-ingradints","conference","contact"]
for (let i = 0; i < array.length; i++) {
console.log(array); 
let li =document.createElement('li');
let liLink=document.createElement('a');
liLink.classList.add('lia')
liLink.href=`#${linkId[i]}`

let textli = document.createTextNode(array[i]);

liLink.appendChild(textli);

li.appendChild(liLink)
li.classList.add('ddd') 
ul.appendChild(li)
}
// 
//  let links=document.querySelectorAll('header ul li a');
//  links.forEach(link =>{
// link.addEventListener('click', e=>{
//   e.preventDefault();
//   let currentId = e.target.attributes.href.value;
//     let section = document.querySelector(currentId);
//     let sectionPos = section.offsetTop;
//      section.scrollIntoView({
//        behavior: "smooth",
//      });

// })
//  })
//  ________________________________________________
//  for (const link of links) {
//   link.addEventListener("click", clickHandler);
// }
// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth"
//   });
// }
// __________________________________________________________
// for (const link of btnScrool) {
//   link.addEventListener('click',smoothScroll);
// }
// function smoothScroll(event) {
//   event.preventDefault();
//   const href=this.getAttribute("href")
//   document.querySelector(href).scrollIntoView({
//     behavior:"smooth"
//   })
// }
    




window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 50){
    ul.classList.add("navAdd");
      
  }else{
    ul.classList.remove("navAdd");
  }
})

// ------------------------------
let hr = document.createElement('div');
hr.classList.add('hr')
contenr.appendChild(hr);
// -_____________________________________
let textHome = document.createElement('div');
textHome.classList.add('textHome');
contenr.appendChild(textHome);
let textValue =document.createElement('h1');
textValue.classList.add('h1');
textHome.appendChild(textValue);
let text =document.createTextNode('thank you for joining us at fiNi europe');
textValue.appendChild(text)
let textp =document.createElement('p');
textHome.appendChild(textp);
textp.classList.add('p');
let textpr =document.createTextNode('if we had the chance to conncet, it was ore sincere. if we missed you weًٌََُ d love to continue the con versation  ');
textp.appendChild(textpr)
// ------------------------------------------------2--------------------------------
let ourTeam =document.querySelector('#our-team');
 let ourTeamDiv =document.createElement('div');
  ourTeam.appendChild(ourTeamDiv);
 let textValue2 =document.createElement('h1');
textValue2.classList.add('hh2');
ourTeamDiv.appendChild(textValue2);
let text2 =document.createTextNode('here,s how you can get in touch');
textValue2.appendChild(text2)



let textp2 =document.createElement('h5');
ourTeamDiv.appendChild(textp2);
textp2.classList.add('p1');
let textpt =document.createTextNode('our team can,t wait to share more with you .please dont hesitate to reach out to any one of us . ');
textp2.appendChild(textpt)
// __________________________________________________
let card = document.createElement('div')
card.style.width='80%';
card.style.display='flex';
card.style.flexDirection='row';
card.style.marginLeft='150px';
card.style.padding='15px';
card.style.justifyContent='center';
card.style.flexWrap='wrap';
card.style.alignItems='center';
card.classList.add('card')
ourTeam.appendChild(card)
card.classList.add('card')
function cardT(){
    let title =document.createElement('div');
    title.style.background='white';
    title.style.width='350px';
    title.style.height='220px';
    title.style.alignItems='center';
    title.style.lineHeight='20px';
    title.style.textAlign='center';
    title.style.display='flex';
    title.style.flexDirection='column';
    title.style.lineHeight='50px';
    title.style.margin='5px';
    title.style.flexDirection='column';
    title.style.borderRadius='20px';
    
    card.appendChild(title);

    let head =document.createElement('h2');
    title.appendChild(head)
    let hedText=document.createTextNode('martin muller francic ')
    head.appendChild(hedText);
    let loerm =document.createElement('p');
    let loermtext=document.createTextNode('area sales manager : germany , austria , and switzerland');
    loerm.appendChild(loermtext)
    title.appendChild(loerm)
    // _____________________________________________________________
    let flex =document.createElement('div');
    flex.classList.add('flex')
    title.appendChild(flex);
    
    let img =document.createElement('img');
    img.style.padding='5px'
    img.style.width='40px'
    img.style.height='40px'
    img.style.borderRadius='50%'
    img.style.border='solid 2px #B71515D1'
    img.src="./mail.png";
    let send =document.createElement('h4');
    send.style.color='#B71515D1'
    let sendtext =document.createTextNode('send email');
  
    flex.appendChild(img);
      flex.appendChild(send);
   send.appendChild(sendtext);

}
for (let i = 0; i < 7; i++) {
    cardT()
}
// __________________________

let products =document.querySelector('#products');
function productText(){
    let lern = document.createElement('div');
    lern.classList.add('lern')
products.appendChild(lern);
let lernH1=document.createElement('h1');
lern.appendChild(lernH1);
let lernH1Text=document.createTextNode('learn more about innovative solutions crafted by kalsec ');
lernH1.appendChild(lernH1Text)
let learnprag =document.createElement('p');
products.appendChild(learnprag);
let tetlerb= document.createTextNode('Browse our resources to learn how we can help make a difference in your next product formulation')
learnprag.appendChild(tetlerb);
// ______________________________________________________________________
let divicon = document.createElement('div');
divicon.classList.add('icon')
products.appendChild(divicon);
}
productText()
function d(){
    let x =document.createTextNode( "order by")
let ordericon =document.createElement('h5');
ordericon.classList.add('icon')
products.appendChild(ordericon);
let sitting = document.createElement('img');
ordericon.appendChild(sitting)
ordericon.appendChild(x)
sitting.src='./settings.png';
sitting.style.width='30px';
sitting.style.height='20px';

var input = document.createElement("INPUT");
input.style.width='100px'; 
input.style.height='18px'; 
input.setAttribute("type", "checkbox");
ordericon.appendChild(input);
let label =document.createElement("label");
ordericon.appendChild(label)
let labeltext=document.createTextNode('view all');
label.appendChild(labeltext)
label.style.marginLeft='-30px'

}

d()
// /_____________________________________________________________________
let cover = document.createElement('div')
cover.classList.add('continer')


products.appendChild(cover);
function card2T(){
    let title =document.createElement('div');
    title.classList.add('cover')
    cover.appendChild(title)
    let img =document.createElement('img');
    img.src='./jhkj.png'
    img.style.width='100%';
    img.style.height='250px';
    title.appendChild(img);
    let h3 = document.createElement('p');
    h3.style.fontSize='25px'
    h3.style.lineHeight='33px'
    h3.style.padding='10px'
    h3.style.textAlign='left'
    title.appendChild(h3);
    let link = document.createElement('a')
    link.href="#";
    link.classList.add('a')
    title.appendChild(link)
    let linktext=document.createTextNode('DONNLOAD NOW');
    link.appendChild(linktext)

    
    let h3text =document.createTextNode('natural taste  sensory solutions')
  h3.appendChild(h3text)
  
// _____________________________________________
}
for (let i = 0; i < 11; i++) {
    card2T()
}
//////////////////////////////////////////////////////////////////
let ouringradints =document.querySelector('#our-ingradints');
function our() {
    let heder=document.createElement('div');
    heder.classList.add('hed')
    ouringradints.appendChild(heder);
    let h1 =document.createElement('h1');
    heder.appendChild(h1);
    h21text= document.createTextNode('give our ingredients a try.');
    h1.appendChild(h21text)
    let pp =document.createElement('p');
    pp.style.fontSize='25px';
    pp.style.width='850px';
    pp.style.lineHeight='40px';
    
    heder.appendChild(pp);
    pp1text= document.createTextNode('we have assembled samples to help you see for yourself the difference kalsec can make _____naturally');
    pp.appendChild(pp1text)
let ptn = document.createElement('button');
ptn.classList.add('btn')
heder.appendChild(ptn);
let btntext = document.createTextNode('order sample');
ptn.appendChild(btntext)

}
our()
let confe =document.getElementById('conference');
let container=document.createElement('div');
container.classList.add('contin');
let upc =document.createElement('b');
upc.classList.add('upc')
container.appendChild(upc)
let upctext=document.createTextNode('ucpoming conference');
upc.appendChild(upctext)
let upcpp =document.createElement('h1');
upcpp.classList.add('upcpp')
container.appendChild(upcpp)
let upctextpp=document.createTextNode('we hope to see you at FTSE Mexico');
upcpp.appendChild(upctextpp)
let upcpph =document.createElement('p');
container.appendChild(upcpph)
let upctextpph=document.createTextNode('please stop by and say hello on december 1 and 2');
upcpph.appendChild(upctextpph)
confe.appendChild(container);
// __________________________________________________________________________
let contact = document.getElementById('contact');
let formcon = document.createElement('div');
contact.appendChild(formcon);
let form =document.createElement('form')
formcon.appendChild(form);
let label =document.createElement("label")
form.appendChild(label)
let labeltext =document.createTextNode('first name')
let contactx =document.querySelector("#contact");
contact.style.cssText="background-color:grey;text-align:center;padding:3% 0;color:white;";
let titleOfContact = document.createElement("h1");
let titleOfContactText = document.createTextNode("Get in touch");
titleOfContact.style.cssText="font-size:35px;margin-bottom:2%"
titleOfContact.appendChild(titleOfContactText);
contact.appendChild(titleOfContact);
let formx = document.createElement("form");
formx.style.cssText ="display:flex;flex-direction:column;justifyContent:center ;gap:1%;width:50%;"
let divForm1 = document.createElement("div");
divForm1.style.cssText ="display:flex;flex-direction:row;gap:20%;marginLeft:33%"
let divInp1 = document.createElement("div");
divInp1.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;margin-left:35%;"
let label1 = document.createElement("label");
label.style.marginLeft='500px'
let labelText1 = document.createTextNode("First Name :");
label1.appendChild(labelText1);
divInp1.appendChild(label1);
let inp = document.createElement("input");
inp.style.cssText ="width:100%;padding:4% 30%;outline:none;border-color: white"
inp.type="text";
inp.placeholder="Enter First Name";
divInp1.appendChild(inp);

let divInp2 = document.createElement("div");
divInp2.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:7px ;margin-left:-12%"
let label2 = document.createElement("label");
let labelText2 = document.createTextNode("Last Name :");
label2.appendChild(labelText2);
divInp2.appendChild(label2);
let inp2 = document.createElement("input");
inp2.type="text";
inp2.placeholder="Enter Last Name";
divInp2.appendChild(inp2);
inp2.style.cssText ="width:100%;padding:4% 30%;outline:none;border-color: white"
divForm1.appendChild(divInp1);
divForm1.appendChild(divInp2);
form.appendChild(divForm1);

contact.appendChild(form);




let divForm2 = document.createElement("div");
divForm2.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:12px ;margin-right:2%;margin-top:2%"
let label3 = document.createElement("label");
let labelText3 = document.createTextNode("Email Address:");
label3.appendChild(labelText3);
divForm2.appendChild(label3);
let inp3 = document.createElement("input");
inp3.style.cssText ="width:7%;outline:none;border-color: white;padding:0% 15%; height:25px"
inp3.type="email";
inp3.placeholder="Enter your Email";
divForm2.appendChild(inp3);
form.appendChild(divForm2);

let divForm3 = document.createElement("div");
divForm3.style.cssText ="display:flex;flex-direction:column;align-items:center;gap:12px ;margin-right:2%;margin-top:2%"
let label4 = document.createElement("label");
let labelText4 = document.createTextNode("Your Message:");
label4.appendChild(labelText4);
divForm3.appendChild(label4);
let inp4 = document.createElement("input");
inp4.style.cssText ="width:7%;outline:none;border-color: white;padding:0% 15%; height:205px"
inp4.type="email";
inp4.placeholder="how we can help my";
divForm3.appendChild(inp4);
form.appendChild(divForm3);
// ___________________________________________________________________________________ footer
let footer = document.querySelector('#footer');
let dir = document.createElement('p');
let dir2 = document.createElement('p');
dirText = document.createTextNode('about contact help home');
dirText2 = document.createTextNode('thanks for you copy rights @fshshsdjdj');
dir.appendChild(dirText)
dir2.appendChild(dirText2)
footer.appendChild(dir)
footer.appendChild(dir2)
console.log(footer);







