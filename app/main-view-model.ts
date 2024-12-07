import { Observable } from '@nativescript/core';
import { LocationService } from './services/location.service';

export class MainViewModel extends Observable {
  constructor() {
    super();
  }

  async findServiceProvider() {
    try {
      const location = await LocationService.getCurrentLocation();
      // Here you would implement the logic to find nearby service providers
      console.log('Finding service providers near:', location);
    } catch (error) {
      console.error('Error finding service providers:', error);
    }
  }
}