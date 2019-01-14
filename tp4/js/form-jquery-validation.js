$(document).ready(function(){
    $("#myBtn").click(function(){

        event.preventDefault();
        let nom = $("#nom").val();
        let prenom = $("#prenom").val();
        let dateNaissance = $("#dateNaissance").val();
        let adresse = $("#adresse").val();
        let email = $("#email").val();
        
        if (!nom) {

            let messageErreur = "La saisie du nom est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
        else if (!prenom) {

            let messageErreur = "La saisie du prenom est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);

        }
        else if (!dateNaissance) {

            let messageErreur = "La date de naissance  est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
        else if (!adresse) {

            let messageErreur = "La saisie de l'adresse est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);
        }
        else if (!email) {

            let messageErreur = "L'email est obligatoire ";
            ouvrirModaleValidationFormulaire(messageErreur);

        }
        else {
            event.preventDefault();
            contactStore.add(nom,prenom,dateNaissance,adresse,email);
            let listeContacts =  contactStore.getList();
            var table = document.getElementById("tableId");   
            for(var index in listeContacts){
                var row = table.insertRow(index);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = listeContacts[index].name;
                cell2.innerHTML =  listeContacts[index].firstname;
                cell3.innerHTML = listeContacts[index].date;
                cell4.innerHTML = listeContacts[index].adress;
                cell5.innerHTML = listeContacts[index].mail;
            }
           return;
        }
    });
    
    $("#gps").click(function(){
        getLocation()
    });

    $("#nom").keyup(function(){
       let name = $("#nom").val();
       $("#nbCarNom").html(name.length +" Car");

    });

    $("#prenom").keyup(function(){
        let prenom = $("#prenom").val();
        $("#nbCarPrenom").html(prenom.length +" Car");
 
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

