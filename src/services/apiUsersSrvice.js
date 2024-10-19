
export async function getUsers(){
    const response = await fetch("/src/data/users.json");
    if(response.ok){
        const users = await response.json();
        return users;
    } else {

    }
}

export async function getUser(email){
    const users = await getUsers();
    const user = users.find(item => item.email == email);
    return user ? user : [];
}