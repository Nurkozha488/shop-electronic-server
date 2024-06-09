import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class ElectronicParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  electronic_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2024-03-14T03:39:23.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2024-03-14T03:39:23.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: ElectronicParts, isArray: true })
  rows: ElectronicParts;
}

export class Bestsellers extends ElectronicParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: ElectronicParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends ElectronicParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: ElectronicParts, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends ElectronicParts {
  @ApiProperty({ example: 'Viduo cohaero.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends ElectronicParts {
  @ApiProperty({ example: 'Viduo cohaero.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Viduo cohaero.' })
  name: string;
}

export class FindOneResponse extends ElectronicParts {}

export interface IElectronicPartsQuery {
  limit: string;
  offset: string;
  electronic: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IElectronicPartsFilter {
  electronic_manufacturer: string | undefined;
  parts_manufacturer: string | undefined;
  price: { [Op.between]: number[] };
}