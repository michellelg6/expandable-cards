const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', ()=>{
      removeActiveClasses();
      //Add the class if something is clicked
      panel.classList.add('active');
  })
})

function removeActiveClasses(){
   panels.forEach(panel => {
       panel.classList.remove('active');
   })
}