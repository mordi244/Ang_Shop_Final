import { User } from '../../model/user';

export class UserService {
    users:User[] = [
        {
        "username":"user",
        "password":"user",
        "logged":false,
        }   
    ];

    initUsers() {
        console.log(this.users.find(x => x.username === 'user'));
    }

    validateUserAndPass(username:string,password:string):boolean {
        let exists:boolean = false;
        this.users.forEach((user) => {
            
            if (user.username === username && user.password === password) {
               exists = true;
            }
        });
        return exists;
    }
    logInUser(username:string) {
        this.users.forEach((user) => {  
            if (user.username === username) {
              user.logged = true;
            }
        });
    }
    logOutUser(username:string) {
        this.users.forEach((user) => {
            if (user.username === username) {
              user.logged = false;
            }
        });
    }
    isLogged(username:string) {
        let logged:boolean;
        this.users.forEach((user) => {  
            if (user.username === username) {
              logged = user.logged;
            }
        });
        return logged;
    }
    getUserName():string { // hardcoded
        return this.users[0].username;
    }
    checkLogged():string {
        if (this.users[0].logged)
            return 'user';
        return '';    
    }
    
}