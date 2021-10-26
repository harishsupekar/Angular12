export class User
{
    Id:number;
    FirstName: string;
    LastName: string;
    Username:string;
    Password:string;
    Role: string;
    Token:string;

    constructor(id:number, firstName:string, lastName: string, userName:string, password:string, role:string, token:string)
    {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Username = userName;
        this.Password = password;
        this.Role = role;
        this.Token = token;
    }
}