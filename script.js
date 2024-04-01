// alert("Loading ji");
function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    

    let weOb=document.getElementById("we");
    let weAddButton=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButton);
}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    

    let aqOb=document.getElementById("aq");
    let aqAddButton=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButton);
}

function addNewskillsField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillsField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
    

    let skillsOb=document.getElementById("skills");
    let skillsAddButton=document.getElementById("skillsAddButton");

    skillsOb.insertBefore(newNode,skillsAddButton);
}

function generateCV(){
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;
    document.getElementById("mailT").innerHTML= document.getElementById("mailField").value;
    document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;
    document.getElementById("linkedT").innerHTML= document.getElementById("ldField").value;
    document.getElementById("ghT").innerHTML= document.getElementById("ghField").value;
    document.getElementById("instaT").innerHTML= document.getElementById("igField").value;
    document.getElementById("objectiveT").innerHTML= document.getElementById("ObjectiveField").value;
    let wes = document.getElementsByClassName("weField");
    let str= " ";
    for (let e of wes){
        str = `${str}<li>${e.value}</li>`;
    }
    document.getElementById('weT').innerHTML=str;

    let aqs = document.getElementsByClassName("eqField");
    let str1= " ";
    for (let e of aqs){
        str1 = `${str1}<li>${e.value}</li>`;
    }
    document.getElementById('aqT').innerHTML=str1;

    let skillss = document.getElementsByClassName("skillsField");
    let str2= " ";
    for (let e of skillss){
        str2 = `${str2}<li>${e.value}</li>`;
    }
    document.getElementById('skillsT').innerHTML=str2;

    //code for setting image

    let file= document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

   reader.onloadend= function(){
    document.getElementById("imgTemplate").src=reader.result;
   }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";


}

function printCV(){
    window.print();
}