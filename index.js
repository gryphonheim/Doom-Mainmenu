document.querySelector('#bloodfall').addEventListener('click', function(){
  x = document.querySelector('.yes');
  y = x.getAttribute('id');
  x.classList.remove('yes');
  y = y + '.png'
  console.log(y);
  x.setAttribute('src', 'images/'+y);
  this.classList.add("yes");
  this.setAttribute('src', 'images/bloodfall-y.png');
});
