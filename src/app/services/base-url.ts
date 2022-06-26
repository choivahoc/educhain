import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const baseUrl = new InjectionToken<string>('baseUrl', {
  providedIn: 'root',
  factory: () => environment.apiUrl,
});
