export class User {
    username: string;
    firstName: string;
    lastName: string;
    role: number;

    public constructor(username: string, firstName: string, lastName: string, role: number) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}
