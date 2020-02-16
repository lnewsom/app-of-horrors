import { PlantCatalogComponent } from './plant-catalog.component';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/core/models/user';
import { of } from 'rxjs';
import { chance, generateRandomUser } from '../../../test-utils/model-generators';

jest.mock('src/app/authentication/authentication.service');

describe('PlantCatalogComponent', () => {
    let underTest: PlantCatalogComponent;
    let mockAuthenticationService: AuthenticationService;
    let expectedUser: User;
    let expectedPlantType: string;

    beforeEach(() => {
        expectedUser = generateRandomUser();

        mockAuthenticationService = new AuthenticationService();
        mockAuthenticationService.getUser = jest.fn(() => of(expectedUser));

        underTest = new PlantCatalogComponent(mockAuthenticationService);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            underTest.ngOnInit();
        });

        test('user is set to expectedUser', () => {
            expect(underTest.user).toEqual(expectedUser);
        });
    });

    describe('setPlantType', () => {
        beforeEach(() => {
            expectedPlantType = chance.string();
        });
        test('sets plantTpye to expectedPlantType', () => {
            underTest.setPlantType(expectedPlantType);

            expect(underTest.plantType).toEqual(expectedPlantType);
        });
    });
});
