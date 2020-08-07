function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
  } else {
      document.addEventListener('DOMContentLoaded', fn);
  }
}
ready(initInputs());

function initInputs () {
  var icon = document.querySelector('.changeType')
  if(icon){
    icon.onclick = function (e) {
        var x = document.querySelector('#loginPassword')
        if (x.type === "password") {
          x.type = "text";
          e.target.classList.remove('fa-eye-slash')
          e.target.classList.add('fa-eye')
        } else {
          x.type = "password";
          e.target.classList.remove('fa-eye')
          e.target.classList.add('fa-eye-slash')
        }
    }
    
    var loginNumber = document.querySelector('#loginNumber')
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 8 && loginNumber.value.length < 5) {
            e.preventDefault();
        }
    }); 
  }
}

