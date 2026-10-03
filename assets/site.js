(function(){
  var KEY='thisisthepy-lang';
  function pick(){try{var s=localStorage.getItem(KEY);if(s)return s}catch(e){}
    return (navigator.language||'en').toLowerCase().indexOf('ko')===0?'ko':'en'}
  function apply(l){document.documentElement.lang=l;var b=document.getElementById('lang');if(b)b.textContent=l==='ko'?'English':'한국어'}
  apply(pick());
  document.addEventListener('click',function(e){if(e.target&&e.target.id==='lang'){var n=document.documentElement.lang==='ko'?'en':'ko';apply(n);try{localStorage.setItem(KEY,n)}catch(x){}}});
})();
