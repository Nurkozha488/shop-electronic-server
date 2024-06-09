import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Aeger textus.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=330457169336065642462153652508',
  })
  image: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: 'Case' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Iphone' })
  electronic_manufacturer: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 3 })
  count: number;

  @ApiProperty({ example: 3 })
  total_price: number;

  @ApiProperty({ example: '2024-03-28T06:07:03.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2024-03-28T06:07:03.000Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCardResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}