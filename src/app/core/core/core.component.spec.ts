import { CoreComponent } from './core.component';
import { SelectedPlantService } from '../services/selected-plant.service';

jest.mock('../services/selected-plant.service');

describe('CoreComponent', () => {
    let underTest: CoreComponent;
    let mockSelectedPlantService: SelectedPlantService;

    beforeEach(() => {
        mockSelectedPlantService = new SelectedPlantService();
        mockSelectedPlantService.clearSelectedPlant = jest.fn();

        underTest = new CoreComponent(mockSelectedPlantService);
    });

    describe('clearSelectedPlant', () => {
        test('calls selectedPlantService.clearSelectedPlant', () => {
            underTest.clearSelectedPlant();

            expect(mockSelectedPlantService.clearSelectedPlant).toHaveBeenCalledTimes(1);
        });
    });
});
