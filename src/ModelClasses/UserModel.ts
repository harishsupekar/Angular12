export class UserModel
{
    UserName: string;
    Password: string;
    
    constructor(username:string, password: string)
    {
        this.UserName = username;
        this.Password = password;
    }
}