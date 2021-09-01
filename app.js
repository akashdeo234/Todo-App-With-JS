let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchneIteamsList = document.getElementById("kitchen-iteams-list");


function addKitchenIteams(){
    let kitchenInputValue = kitchenInput.value;

    let li = document.createElement('li');
    
    let spanEl = document.createElement('span');
    li.appendChild(spanEl);
    spanEl.innerText = kitchenInputValue;
  

    kitchneIteamsList.appendChild(li);

    kitchenInput.value = null;

    kitchenInput.focus();

    // create trash can
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);
    
    //create edit button

    let editBtn = document.createElement('i');
    editBtn.classList.add('fas','fa-edit');
    li.appendChild(editBtn);

}

 // delete iteam from kitchen list
function deleteKitchenIteam(event){
    if(event.target.classList[1] === 'fa-trash'){
        let iteam = event.target.parentElement;
        iteam.classList.add('slideOut');
        iteam.addEventListener('transitionend',()=>{
            iteam.remove();
        })

    }
}

// edit iteams from kitchen list

function editKitchenIteams(event){
    if(event.target.classList[1] === 'fa-edit'){
        let editValue = prompt('Enter New Text Here');
        let iteam = event.target.parentElement;
        let spanEl = iteam.querySelector('span');
        spanEl.innerText = editValue;

    }
}


// add event listeners

addBtn.addEventListener('click',addKitchenIteams);

kitchneIteamsList.addEventListener('click',deleteKitchenIteam);

kitchneIteamsList.addEventListener('click',editKitchenIteams)








/* steps

1 : add event listener to btn
2 : get the kicthen input value and store
3 : create li element
4 : then li.innertext = input value
5 : ul appendchild (li)
6 : then kitchen iteams list value = null;
7 : then kicthneinput.focus()


remove steps

create trash btn

1 : create trash btn with ('i');
2 : then add class list(name) to i (i = fa, fa-trash)
3 : li.appedend child the li

add event listner on trash btn

4 : create add listner on kitchen iteam list (ul)

if(event.target.classList[0] === 'fas'){                       --> 
        let iteam = event.target.parentElement;
        iteam.remove();










*/