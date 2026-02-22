import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ barcode: string }> }
) {
  const { barcode } = await params;
  const response = await fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}.json`, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Unable to fetch product data from OpenFoodFacts.' },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json({
    barcode,
    product: data.product,
    ingredients: data.product?.ingredients_tags ?? [],
    allergens: data.product?.allergens_tags ?? []
  });
}
