import { Observable } from '@nativescript/core';
import { Service } from '../../models/service.model';

export class ServiceListViewModel extends Observable {
  private _services: Service[] = [
    {
      id: '1',
      name: 'Emergency Plumbing',
      description: 'Quick fix for urgent plumbing issues',
      price: 499,
      category: 'Plumbing',
      estimatedTime: 15
    },
    {
      id: '2',
      name: 'Electrical Repair',
      description: 'Emergency electrical services',
      price: 599,
      category: 'Electrical',
      estimatedTime: 15
    },
    {
      id: '3',
      name: 'Lock Service',
      description: 'Emergency locksmith service',
      price: 399,
      category: 'Security',
      estimatedTime: 15
    }
  ];

  get services(): Service[] {
    return this._services;
  }
}