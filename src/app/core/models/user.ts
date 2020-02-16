export class User {
    username: string;
    firstName: string;
    lastName: string;

    public constructor(username: string, firstName: string, lastName: string) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
