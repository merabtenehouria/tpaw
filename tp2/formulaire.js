function validation(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let adresse = document.getElementById("adresse").value;
    let dateNaissance = document.getElementById("date").value;
    let email = document.getElementById("mail").value;

    // Vérification du nom : 
    if(!nom || (nom && nom.length < 5)){
        this.afficherErreur(document); 
        let messageErreur = !nom ? "La saisie du nom est obligatoire" : "le nom doit contenir au moins 5 caractères";
        document.getElementById("error").innerHTML = messageErreur;

    } 
    // vérification du prénom 
    else if (!prenom || (prenom && prenom.length < 5)) {
        this.afficherErreur(document);
        let messageErreur = !prenom ? "La saisie du prénom est obligatoire" : "le prénom doit contenir au moins 5 caractères";
        document.getElementById("error").innerHTML = messageErreur;
    } 
    // vérification de la date de naissance
    else if(!dateNaissance){
        this.afficherErreur(document);
        let messageErreur = "la date de naissance est obligatiore";
        document.getElementById("error").innerHTML = messageErreur;
    }
    // Véfification de l'adresse
    else if (!adresse || (adresse && adresse.length < 5))  {
          this.afficherErreur(document);
          let messageErreur = !adresse ? "La saisie de l'adresse est obligatoire" : "l'adresse doit contenir au moins 5 caractères";
          document.getElementById("error").innerHTML = messageErreur;

    }
    // vérification de l'émail
    else if(!email || (email && email.length < 5) ){
        this.afficherErreur(document);
        let messageErreur = !email ? "L'email est obligatoire" : "l'email doit contenir au moins 5 caractères";
        document.getElementById("error").innerHTML = messageErreur;
    }   
    else{
        // FORMULAIRE VALIDE 
        document.getElementById("error").innerHTML = "";
        document.getElementById('valide').classList.add('valide'); 
        document.getElementById('error').classList.remove('error')
        document.getElementById("valide").innerHTML = "Bienvenue " + prenom;
    }
    
    
}

function afficherErreur(document){
    document.getElementById("valide").innerHTML = "";
    document.getElementById('valide').classList.remove('valide');
    document.getElementById('error').classList.add('error'); 
}


