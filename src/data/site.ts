export const site = {
  name: 'シンガポール アミス アジアン ダイニング＆バー',
  shortName: 'SINGAPORE AMIS',
  tagline: '香りで旅する、アジアの食卓。',
  phone: '045-345-6731',
  phoneHref: 'tel:0453456731',
  postalCode: '〒221-0043',
  address: '神奈川県横浜市神奈川区新町5-5 ウィナス 1F',
  access: '神奈川新町駅 徒歩3分',
  hours: [
    { label: 'LUNCH TIME', time: '11:00 – 15:00' },
    { label: 'DINNER TIME', time: '15:00 – 23:00' },
  ],
  closed: '定休日なし',
  seats: '28席',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%8C%BA%E6%96%B0%E7%94%BA5-5%20%E3%82%A6%E3%82%A3%E3%83%8A%E3%82%B9%201F',
} as const;

export const navigation = [
  { label: '私たちについて', href: '#about' },
  { label: '人気メニュー', href: '#popular' },
  { label: 'メニュー', href: '#menu' },
  { label: '店舗情報', href: '#access' },
] as const;

export const popularMenu = [
  { rank: '01', name: 'ソフトシェルクラブのチリソース', en: 'SOFT SHELL CRAB WITH CHILI SAUCE', image: 'softShellCrab' },
  { rank: '02', name: '海南鶏飯', en: 'HAINANESE CHICKEN RICE', image: 'hainaneseChickenRice' },
  { rank: '03', name: 'ビリヤニ', en: 'BIRYANI', image: 'biryani' },
  { rank: '04', name: 'ブラックカレー', en: 'BLACK CURRY', image: 'blackCurry' },
  { rank: '05', name: 'ナンゴレン', en: 'LAKSA', image: 'laksa' },
] as const;
