import { Observable } from '@nativescript/core';
import { LocationService } from '../../services/location.service';

export class MapViewModel extends Observable {
  private _userLocation: { latitude: number; longitude: number };

  constructor() {
    super();
    this.initLocation();
  }

  get userLocation() {
    return this._userLocation;
  }

  private async initLocation() {
    try {
      const location = await LocationService.getCurrentLocation();
      this._userLocation = {
        latitude: location.latitude,
        longitude: location.longitude
      };
      this.notifyPropertyChange('userLocation', this._userLocation);
    } catch (error) {
      console.error('Failed to get location:', error);
    }
  }
}