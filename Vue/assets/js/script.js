
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-not');

 
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  
  const setNotif = () => { //pour afficher la couleur dans le coeur
    if (checkboxCheck()){
      // si c'est true on met visible et l'icone rouge aparet
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // sinon on met hidden 
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  
  setNotif();

  
  document.addEventListener('click', setNotif);

});

