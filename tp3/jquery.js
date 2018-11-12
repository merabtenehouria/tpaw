$( document ).ready(function() {
  $("#valider").click( function(){
    
     // Y mettre le code jQuery pour valider tous les champs du formulaire$().ready(function() {
      $("#formulaire").validate({
    rules : {
      Name : {
        required : true
      },
      prenom: {
        minlength : 3
      },	
      adresse : {
        required : true,
        mail : true
      }
    },
    messages : {
      firstName : "Veuillez fournir un prénom",
      lastName : "Veuillez fournir un nom d'au moins trois lettres",
      login : "L'email est incorrect"
    }
   })
  });


 });