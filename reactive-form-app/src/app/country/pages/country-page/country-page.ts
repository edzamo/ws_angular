import { ChangeDetectionStrategy, Component, afterNextRender, inject, OnDestroy, signal} from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { filter, switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPage implements OnDestroy {
  fb = inject(FormBuilder);
  countryService = inject(CountryService);

  regions = signal<string[]>([]);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  private regionSubscription?: ReturnType<typeof this.onRegionChanged>;
  private countrySubscription?: ReturnType<typeof this.onCountryChanged>;

  constructor() {
    // Inicializar regions después de que las dependencias estén inyectadas
    // para evitar dependencia circular
    this.regions.set(this.countryService.regions);

    // Usar afterNextRender para ejecutar después de que el componente esté completamente inicializado
    // Esto evita la dependencia circular
    afterNextRender(() => {
      this.regionSubscription = this.onRegionChanged();
      this.countrySubscription = this.onCountryChanged();
    });
  }

  onRegionChanged() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.myForm.get('border')!.setValue('')),
        tap(() => {
          this.borders.set([]);
          this.countriesByRegion.set([]);
        }),
        switchMap((region) =>
          this.countryService.getCountriesByRegion(region ?? '')
        )
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
      });
  }

  onCountryChanged() {
    return this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value) => value!.length > 0),
        switchMap((alphaCode) =>
          this.countryService.getCountryByAlphaCode(alphaCode ?? '')
        ),
        switchMap((country) =>
          this.countryService.getCountryNamesByCodeArray(country.borders)
        )
      )

      .subscribe((borders) => {
        this.borders.set(borders);
      });
  }

  ngOnDestroy(): void {
    this.regionSubscription?.unsubscribe();
    this.countrySubscription?.unsubscribe();
  }
}
