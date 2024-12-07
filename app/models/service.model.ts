export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  estimatedTime: number;
}

export interface ServiceProvider {
  id: string;
  name: string;
  services: string[];
  rating: number;
  location: {
    latitude: number;
    longitude: number;
  };
  isAvailable: boolean;
}