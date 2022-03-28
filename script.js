// ADD
var listDetail = document.getElementById("listDetail");
var addBtn = document.getElementById("addBtn");
var ul = document.getElementById("ul");

addBtn.onclick = function () {
  if (listDetail.value !== "") {
    var li = document.createElement("LI");
    li.className = "li";
    ul.appendChild(li);
  }
  else {
    alert("List item cannot be empty");
  }
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  li.appendChild(checkbox);


// ACTIVE TASKS
let active = document.getElementById('activeBtn');
active.addEventListener('click', e => {
 var demo =  li.children;
  for (var i = 0; i < demo.length; i++) {
    if (demo[i].tagName == 'INPUT' && demo[i].type == 'checkbox') {
      if (demo[i].checked) {
        li.style.display = "none";
      }else{
        li.style.display = "";
      }
    }
  }
})

// COMPLETED TASKS
  let completed = document.getElementById('completedBtn');
  completed.addEventListener('click', e => {
    var demo = li.children;
    for (var i = 0; i < demo.length; i++) {
      if (demo[i].tagName == 'INPUT' && demo[i].type == 'checkbox') {
        if (demo[i].checked) {
          li.style.display = "";
        }else{
          li.style.display = "none";
        }
      }
    }
  })

  // ALL TASKS
  let all = document.getElementById('allBtn');
  all.addEventListener('click', e => {
    var demo = li.children;
    for (var i = 0; i < demo.length; i++) {
      if (demo[i].tagName == 'INPUT' && demo[i].type == 'checkbox') {
          li.style.display = "block";
        }
      }
    });
  


  var entry = document.createElement("SPAN");
  var entryText = document.createTextNode(listDetail.value);
  entry.className = "userEntry";
  entry.appendChild(entryText);
  li.appendChild(entry);


// DELETE
  var close = document.createElement("SPAN");
  var cText = document.createTextNode("\u00D7");
  close.className = "close";
  close.appendChild(cText);
  li.appendChild(close);
  close.onclick = function () {
    this.parentElement.style.display = "none";
  }


  // EDIT
  var edit = document.createElement("SPAN");
  var eText = document.createTextNode("\u270E");
  edit.className = "edit";
  edit.appendChild(eText);
  li.appendChild(edit);
  edit.onclick = function () {
    var p = prompt("Edit your entry");
    var entry = this.parentElement.getElementsByClassName("userEntry")[0]; // get sibling userEntry element
    entry.innerText = p;
  }
  listDetail.value = "";
}


// SEARCHING
let input = document.getElementById('searchBox');
input.addEventListener('input', e => {
  let el = e.currentTarget,
    value = el.value.toUpperCase(),
    list = document.getElementById(el.getAttribute("data-filters")),
    lis = Array.from(list.children);
  lis.forEach(li => {
    li.classList.toggle('hidden', !li.innerText.toUpperCase().includes(value));
    console.log(li.innerText.toUpperCase().includes(value))
  });
});


//SORTING
  function sortList() {
  var list, i, switching, b, shouldSwitch;
    list = document.getElementById("ul");
  switching = true;
  while (switching) {
    switching = false;
  b = list.getElementsByTagName("li");
  for (i = 0; i < (b.length - 1); i++) 
  {
    shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) 
      {
      shouldSwitch = true;
      break;
      }
  }
    if (shouldSwitch)
    {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
    }
  }
}


// STRIKE OUT ON SELECTED ITEM
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
});


































  









  
