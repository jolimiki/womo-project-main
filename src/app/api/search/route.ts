import { NextResponse } from 'next/server';

const ITEMS = [
  { id: 1, label: 'Apple iPhone 15 Pro', sub: '手機 / Apple' },
  { id: 2, label: 'Apple MacBook Air M3', sub: '筆電 / Apple' },
  { id: 3, label: 'Samsung Galaxy S24 Ultra', sub: '手機 / Samsung' },
  { id: 4, label: 'Sony WH-1000XM5', sub: '耳機 / Sony' },
  { id: 5, label: 'Nintendo Switch OLED', sub: '主機 / Nintendo' },
  { id: 6, label: 'Dyson V15 Detect', sub: '家電 / Dyson' },
  { id: 7, label: 'iPad Air M2', sub: '平板 / Apple' },
  { id: 8, label: 'GoPro HERO 12', sub: '運動攝影機 / GoPro' },
  { id: 9, label: 'Kindle Paperwhite', sub: '電子書 / Amazon' },
  { id: 10, label: 'Sony A7 IV', sub: '全片幅相機 / Sony' },
];

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get('q') || '').trim().toLowerCase();

    // 模擬外部延遲（可移除）
    await new Promise((resolve) => setTimeout(resolve, 140));

    // 確保空關鍵字時正常回傳完整列表
    if (q.length === 0) {
      return NextResponse.json({ items: ITEMS });
    }

    const filtered = ITEMS.filter(
      (it) => it.label.toLowerCase().includes(q) || (it.sub && it.sub.toLowerCase().includes(q))
    );

    return NextResponse.json({ items: filtered });
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json({ items: [], error: 'Server error' }, { status: 500 });
  }
}
