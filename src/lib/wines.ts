export type Vintage = '2022' | '2023' | '2024';

export interface Wine {
  id: string;
  vintage: Vintage;
  nameKey: string;
  tastingKey: string;
  pairingKey: string;
  abv: string;
  volume: string;
  image: string;
  imageAlt: string;
}

export const wines: Wine[] = [
  {
    id: 'ckhaveri2022',
    vintage: '2022',
    nameKey: 'wines.ckhaveri2022.name',
    tastingKey: 'wines.ckhaveri2022.tasting',
    pairingKey: 'wines.ckhaveri2022.pairing',
    abv: '12.5%',
    volume: '750ml',
    image: '/images/wines/IMG_0085.JPG',
    imageAlt: 'Sarishvili Ckhaveri Rosé 2022 bottle with dried flowers',
  },
  {
    id: 'ckhaveri2023',
    vintage: '2023',
    nameKey: 'wines.ckhaveri2023.name',
    tastingKey: 'wines.ckhaveri2023.tasting',
    pairingKey: 'wines.ckhaveri2023.pairing',
    abv: '12.0%',
    volume: '750ml',
    image: '/images/wines/IMG_0061.JPG',
    imageAlt: 'Sarishvili Ckhaveri Rosé 2023 bottle and glass',
  },
  {
    id: 'ckhaveri2024',
    vintage: '2024',
    nameKey: 'wines.ckhaveri2024.name',
    tastingKey: 'wines.ckhaveri2024.tasting',
    pairingKey: 'wines.ckhaveri2024.pairing',
    abv: '11.5%',
    volume: '750ml',
    image: '/images/wines/IMG_0096.JPG',
    imageAlt: 'Sarishvili Ckhaveri Rosé 2024 bottle with bokeh flowers',
  },
];
