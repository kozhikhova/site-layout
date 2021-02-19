(function(d){
  var button = d.querySelector('#mybutton'),
      checkPhone = function() {
        alert('Кнопка');
      }

  button.addEventListener('click', checkPhone)
})(document)