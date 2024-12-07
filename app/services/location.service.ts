import { Geolocation } from '@nativescript/geolocation';
import { CoreTypes } from '@nativescript/core';

export class LocationService {
  static async getCurrentLocation() {
    const hasPermission = await Geolocation.enableLocationRequest(true);
    
    if (!hasPermission) {
      throw new Error('Location permission denied');
    }

    return await Geolocation.getCurrentLocation({
      desiredAccuracy: CoreTypes.Accuracy.high,
      maximumAge: 5000,
      timeout: 10000
    });
  }
}