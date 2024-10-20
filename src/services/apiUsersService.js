
export async function getUsers(){
    const response = await fetch("/src/data/users.json");
    if(response.ok){
        const users = await response.json();
        return users;
    } else {

    }
}

//récupération du user par son mail
export async function getUser(email){
    const users = await getUsers();
    const user = users.find(item => item.email == email);
    return user ? user : [];
}

//vérification de la conformité du mot de passe pour l'utilisateur voulant se connecter
export async function veryfPassword(email, password){
    const user = getUser(email);
    const message = {bool: false, rapport: ""};
    const veryfOk = "vérification réussie !";
    const veryfNok = "échec de la vérification !";

    if(user.identifiant == password){
        message.bool = true;
        message.rapport = veryfOk;
    } else {
        message.rapport = veryfNok;
    }
    
    return message;
}