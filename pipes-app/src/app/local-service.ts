import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AvailableLocale = 'es' | 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private currentLocale = signal<AvailableLocale>('fr');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentLocale.set(
        (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
      );
    }
  }

  get getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('locale', locale);
      this.currentLocale.set(locale);
      window.location.reload();
    } else {
      this.currentLocale.set(locale);
    }
  }

}
