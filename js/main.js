var arrList = [];

var elAddInput = document.querySelector('.add_input');
var elCheckInput = document.querySelector('.check_input');
var elButton = document.querySelector('.btn');
var elList = document.querySelector('.add_list');

elButton.addEventListener('click', function (e) {
  e.preventDefault();

  var newLi = document.createElement('li');
  newLi.textContent = elAddInput.value;
  
  if (elCheckInput.checked) {
    arrList.unshift(newLi.textContent);
    elList.prepend(newLi);
    newLi.classList.add('bg-warning');
    elAddInput.value = '';
  } else {
    arrList.push(newLi.textContent);
    elAddInput.value = '';
    elList.appendChild(newLi);
  }


});