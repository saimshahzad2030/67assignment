
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function square(){
//     var a=prompt("enter base");
//     var b=prompt("Enter exponent")
// document.write(Math.pow(a,b))
// }
// square()






// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.


// var leapyear=prompt("Enter year like 2003")
// var slce=leapyear.slice(leapyear.length-2,leapyear.length)
// var num=parseInt(slce)
// if(leapyear.length=4){
//     alert("plz insert like 2014 or 2k14")
// }
// else if(num%4 === 0){
//     alert(leapyear + " was a  leapyear")
// }
// else{
//     alert("That year was not a leap year")
// }







// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// var A=prompt("Insert first side of triangle ")
// var a=parseInt(A)
// var B=prompt("Insert second side of triangle ")
// var b=parseInt(B)
// var C=prompt("Insert thirs side of triangle ")
// c=parseInt(C)
// var s;
// function S(){
//  s=(a+b+c)/2
//     document.write( " S = " + s )
// }
// var ans=S()
// // document.write(ans)
// function Area(){
//     var area=s*(s-a)*(s-c)*(s-b)
//     document.write("Are of triagle = " + area)
// }

// Area()




// e area of triangle using 2 functions













// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var isl=parseInt(prompt("Enter number u get in islamiat"))
// var phy=parseInt(prompt("Enter number u get in Physics"))
// var chem=parseInt(prompt("Enter number u get in Chemistry"))
// function average(){
//     var avrg=(isl + phy + chem)/3
//     document.write("Average = " + avrg)
// }
// function percentage(){
//     var percent=(isl + phy + chem)*300/100

//     document.write("\npercentage calculated in thrwee subjects is " + percent)
// }
// function main(){
//     percentage() 
//     average()

// }

// main()


















// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// var index=prompt("Enter any string")
// var val=prompt("which variable's index u want?")
// function indexof(){
//     var ans=index.indexOf(val)
//     document.write(ans)
// }
// indexof()













// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
// var str=prompt("Enter any string")
// function disemvowel(string) {
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//       if (string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u") {
//         newString += string[i];
//       };
//     };
// document.write(newString)
// };
// disemvowel(str)





// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT
// Page 2 of 2
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.



// function dis_emvowel() {
//     var str=prompt("Enter any string")

//     var count=0
// var arr="aeaiaoaueieoeuouoiuiouaaaiieeoouu"
// var check;
// for(let i=0;i<=arr.length-1;i++){


//     check=str.indexOf(arr.slice(i,i+2))
// }
//     switch (check){
// case -1:
    

// case 0:
// count+=1
// case 1:
// count+=1
// case 2:
// count+=1
// case 3:
// count+=1
// case 4:
// count+=1case 7:
// case 8:
// case 9:

// case 10:

// case 11:

// case 12:

// case 13:
// default:
// }

// document.write(count)
// }    
// dis_emvowel()

// var arr="saim"















// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// var input=parseInt(prompt("Enter distance between two cities in Kilometers"))
// function meter(){
//     var m=input*1000
//     alert(input + " kilometrs = " + m + " meters");
// }
// function feet(){
//     var f=input*3281
//     alert(input + " kilometrs = " + f + " feets");
// }
// function cm(){
//     var cm=input*1000*100
//     alert(input + " kilometrs = " + cm + " centimeters");
// }
// function inches(){
//     var inch=input*5000
//     alert(input + " kilometrs = " + inch + " inches");
// }
// meter()
// inches()
// feet()
// cm()




// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.



// function get_salary() {

//     var hours = prompt("Please enter the number of hours you worked this week");
//     var rate = prompt("Please enter how much money you earn per hour");
    
//     //Calculates over time pay or regular pay
//     if (hours>= 40)
    
//     {
//     regpay = (rate * 40)
//     overtimepay = ((rate * 1.5) * (hours - 40))
//     pay = (regpay + overtimepay)
    
//     // Send an alert with over time pay values
//     alert ("You earned overtime this week! Your total pay is " + pay);
    
//     }
    
//     else 
//     {
//     regpay = (rate * hours)
//     overtimepay = 0.00
    
    //send an alert with regular paid amount
    // alert ("Your total pay is " + regpay);
    // }
    // }
    // get_salary()








//     10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawe




// var amount=prompt("Enter amount to with draw")
// var h=amount.slice(0,(amount.length-2))
// var ten=parseInt( amount.slice(amount.length-2,amount.length-1))/5
// var t=Math.round(ten)
// var u=t%5
// alert("You will have " + h + " hundred notes "  + t + " fifty notes and " + u + " ten notes ")




































// 1. Show an alert box on click on a link.












// 2. Display some Mobile images in browser. On click on an








// image Show the message in alert to user.
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 
// function hide() {
 
//     var element = document.getElementById("row1");
//     element.remove()
// }
// function hide1() {
 
//     var element = document.getElementById("row2");
//     element.remove()
// }function hide2() {
 
//     var element = document.getElementById("row3");
//     element.remove()
// }










// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.













// function swap(){
//     var image=document.getElementById("img1")
//     image.src="images2.png"
// }





// function reswap(){
//     var re=document.getElementById("img1")
//     re.src="images.jpg"
// }









// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.



















// // chap49-52
// 1. Create a signup form and display form data in your web
// page on submission.




// function showmessage(){
//     var a=document.getElementById("mail")
//     var d=document.getElementById("pass")
//     var b=document.createElement("p")
//     var c=document.createElement("p")
//     var val=document.createTextNode(a.value)
//     var val2=document.createTextNode(d.value)
//     b.append(val)
//     c.append(val2)
//     var answer1=document.getElementById("showmessage")
//     answer1.appendChild(b)
//     var answer=document.getElementById("show_message")
//     answer.appendChild(c)
//     a.value=""
//     d.value=""
// }






// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.



// function moretext(){
//         var text=document.getElementById("org").innerHTML
//         var para=document.getElementById("para");
//         para.innerHTML=text    }
    



// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row





// function hide() {
 
//         var element = document.getElementById("row1");
//         element.remove()
//     }
//     function hide1() {
     
//         var element = document.getElementById("row2");
//         element.remove()
//     }function hide2() {
     
//         var element = document.getElementById("row3");
//         element.remove()
//     }    
















// chap 58-67
// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>

// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// var mc=document.getElementById("main-content").childNodes
// console.log(mc)
// var email=document.getElementsByClassName("render")
// var inpt=document.getElementById("first-name")    
    
// var val=document.createTextNode(email.value)
//     // var val2=document.createTextNode(d.value)
//     inpt.appendChild(val)
    // c.append(val2)
    
// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

// var m_c=document.getElementById("main-content").nodeType
// console.log(m_c)

// var m_c1=document.getElementById("lastName").nodeType
// console.log(m_c1)

// var textnode = document.createTextNode("Water");
// var item = document.getElementById("lastName").childNodes[0];
// item.replaceChild(textnode, item.childNodes[0]);


// var sblng=document.getElementById("lastName")
// console.log(sblng.nextSibling)
// console.log(sblng.previousSibling)

// var _email=document.getElementById("email")
// console.log(_email.parentNode)
// console.log(_email.nodeType)
