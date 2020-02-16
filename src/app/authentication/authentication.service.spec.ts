import { AuthenticationService } from './authentication.service';
import { User } from '../core/models/user';

describe('AuthenticationService', () => {
    let underTest: AuthenticationService;
    const expectedUser: User = new User('skrelbourn', 'Seymour', 'Krelbourn');

    beforeEach(() => {
        underTest = new AuthenticationService();
    });

    describe('getUser', () => {
        test('returns expected User', (done) => {
            underTest.getUser().subscribe((user) => {
                expect(user).toEqual(expectedUser);
                done();
            });
        });
    });
});
