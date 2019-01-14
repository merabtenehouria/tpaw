$(document).ready(function(){
    $("#myBtn").click(function(){

        event.preventDefault();
        let nom = $("#nom").val();
        let prenom = $("#prenom").val();
        let dateNaissance = $("#dateNaissance").val();
        let adresse = $("#adresse").val();
        let email = $("#email").val();
        
        if (nom == "") {

            let messageErreur = "La saisie du nom est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
         else if (prenom =="") {

            let messageErreur = "La saisie du prenom est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);

        }
        else if (dateNaissance == "") {

            let messageErreur = "La date de naissance  est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
        else if (adresse =="") {

            let messageErreur = "La saisie de l'adresse est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
        else if (email=="") {

            let messageErreur = "L'email est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);

        }
        else {
            $(".modal-title").text("bienvenue, " + nom);
            let imageMaps = '<a href="http://maps.google.com/maps?q=Paris" target="blank"> <img src="image6.png" style="width: 465px; cursor: pointer;" ></a>';
            $(".invalide").html(imageMaps);
            $("#date").html("vous êtes nés le " + dateNaissance +" et vous habitez ");
            $("#detail-adresse").html(adresse);
            $('#myModal').modal("show");
            event.preventDefault();
        }
    });

    function ouvrirModaleValidationFormulaire(message){
        $(".modal-title").text("Message Modale");
        $(".invalide").html('');
        $("#invalide").html(message);
        $("#date").html('');
        $("#detail-adresse").html('');

        // Methode pour l'ouveture de la modale 
        $('#myModal').modal("show");

        event.preventDefault();
   }
});
