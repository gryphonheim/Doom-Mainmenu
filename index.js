// document.querySelector('#bloodfall').addEventListener('click', function(){
//   toggle();
//   this.classList.add("yes");
//   this.setAttribute('src', 'images/bloodfall-y.png');
// });

var imgList = document.querySelectorAll('.news-card-img');

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener('click', function() {
    toggle();
    this.classList.add('yes');
    y = this.getAttribute('id');
    y = y + "-y.png";
    this.setAttribute('src', 'images/'+y)
  });
}

function toggle() {
  x = document.querySelector('.yes');
  y = x.getAttribute('id');
  x.classList.remove('yes');
  y = y + '.png'
  x.setAttribute('src', 'images/'+y);
  console.log(y);
}
