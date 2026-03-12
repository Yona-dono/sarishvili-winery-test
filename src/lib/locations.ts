export type LocationId = 'winery' | 'tbilisi' | 'batumi' | 'kutaisi';

export interface Location {
  id: LocationId;
  nameKey: string;
  addressKey: string;
  phoneKey: string;
  hoursKey: string;
  isWinery: boolean;
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  {
    id: 'winery',
    nameKey: 'locations.winery.name',
    addressKey: 'locations.winery.address',
    phoneKey: 'locations.winery.phone',
    hoursKey: 'locations.winery.hours',
    isWinery: true,
    lat: 41.987,
    lng: 42.045,
  },
  {
    id: 'tbilisi',
    nameKey: 'locations.tbilisi.name',
    addressKey: 'locations.tbilisi.address',
    phoneKey: 'locations.tbilisi.phone',
    hoursKey: 'locations.tbilisi.hours',
    isWinery: false,
    lat: 41.6892,
    lng: 44.8013,
  },
  {
    id: 'batumi',
    nameKey: 'locations.batumi.name',
    addressKey: 'locations.batumi.address',
    phoneKey: 'locations.batumi.phone',
    hoursKey: 'locations.batumi.hours',
    isWinery: false,
    lat: 41.6168,
    lng: 41.6367,
  },
  {
    id: 'kutaisi',
    nameKey: 'locations.kutaisi.name',
    addressKey: 'locations.kutaisi.address',
    phoneKey: 'locations.kutaisi.phone',
    hoursKey: 'locations.kutaisi.hours',
    isWinery: false,
    lat: 42.2679,
    lng: 42.7181,
  },
];
