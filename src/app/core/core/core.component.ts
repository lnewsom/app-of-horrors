import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedPlant } from 'src/app/reducers/plant-state';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html'
})
export class CoreComponent {
    public constructor(
        private store: Store<any>
    ) {
    }

    public clearSelectedPlant(): void {
        this.store.dispatch(clearSelectedPlant());
    }
}
