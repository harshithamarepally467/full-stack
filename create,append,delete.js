//create - append - remove elements exampls in js

let aish=document.createElement("p");
//create a new paragraph element
aish.textContent="i'm chitti";
//setnthe text content

aish.innerHTML="Memory 1 Tera Byte";//set the innerHtml



aish.style.color="blue";
aish.style.fontsize="20px";
aish.style.padding="30px";
document.getElementById("vasi").appendChild(aish);//append
//create newheading

let newHeading = document.createElement("h2");
newHeading.innerHTML = "This is new heading added by javascript!!";
newHeading.style.color = "purple";
newHeading.style.color ="24px";
document.body.appendChild(newHeading);

//remove element example:remove the first information
setTimeout(() => {
    let re = document.getElementsByClassName("list")[3];
    if (re) {
        re.remove();
    }
},2000);

//append the text tag
let tagText = document.createElement("p");
tagText.textContent = "This text is appended to the tag";
tagText.style.color = "orange";
document.getElementById("vasi").appendChild(tagText);

//append the text 3 seconds
setTimeout(() =>{
    let newText = document.createElement("p");
newText.textContent = "this is added after 3 seconds";
newText.style.color = "green";
document.body.appendChild(newText);
},3000);

//create a list ,add  items and remove one
let myList = document.createElement("ul");
for(let i = 1;i <= 3;i++){
let listItem = document.createElement("li");
listItem.textContent = 'Item ${i}';
myList.appendChildd(listItem);
}
document.body.appendChild(myList);

