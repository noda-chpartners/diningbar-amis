export const site = {
  name: 'シンガポール アミス アジアン ダイニング＆バー',
  shortName: 'SINGAPORE AMIS',
  tagline: '香りで旅する、アジアの食卓。',
  phone: '045-345-6731',
  phoneHref: 'tel:0453456731',
  postalCode: '〒221-0043',
  address: '神奈川県横浜市神奈川区新町5-5 ウィナス新町 1F',
  access: '神奈川新町駅 徒歩3分',
  hours: [
    { label: 'LUNCH TIME', time: '11:00 – 15:00' },
    { label: 'DINNER TIME', time: '15:00 – 23:00' },
  ],
  closed: '定休日なし',
  seats: '28席',
  mapUrl: 'https://www.google.com/maps?cid=5107286804935320710',
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
