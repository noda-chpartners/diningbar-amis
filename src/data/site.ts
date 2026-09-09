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
  mapUrl:
    'google.com/maps?q=SINGAPORE+AMIS+ASIAN+DINING+%26BAR+シンガポール+アミス+アジアン+ダイニング＆バー,+５−５+新町+神奈川区+横浜市+神奈川県+221-0043&ftid=0x60185dfc71f12ebf:0x46e0ba4a1e35a486&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,100821559,47071704,94218641,94282134,94286869,100820247,100822504&g_ep=CAISEjI2LjMzLjEuOTYxODkxNDMyMBgAIO-qBypdLDk0Mjk3Njk5LDk0MjMxMTg4LDk0MjgwNTY4LDEwMDgyMTU1OSw0NzA3MTcwNCw5NDIxODY0MSw5NDI4MjEzNCw5NDI4Njg2OSwxMDA4MjAyNDcsMTAwODIyNTA0QgJKUA%3D%3D&skid=679f41cd-8139-4026-9a30-7d16aeb39656&g_st=ic',
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
