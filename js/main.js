(function(){
  var stage=document.getElementById('stage'),book=document.getElementById('book'),btn=document.getElementById('toggle');
  function set(open){
    stage.classList.toggle('open',open);
    if(open&&matchMedia('(max-width:759px)').matches){setTimeout(function(){book.scrollIntoView({behavior:'smooth',block:'center'})},900)}
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.textContent=open?'Cerrar invitación':'Abrir invitación';
  }
  btn.addEventListener('click',function(){set(!stage.classList.contains('open'))});
  book.addEventListener('click',function(){set(!stage.classList.contains('open'))});
})();
