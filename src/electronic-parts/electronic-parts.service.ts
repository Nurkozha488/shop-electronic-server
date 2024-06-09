import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { ElectronicParts } from './electronic-parts.model';
import { IElectronicPartsFilter, IElectronicPartsQuery } from './types';

@Injectable()
export class ElectronicPartsService {
  constructor(
    @InjectModel(ElectronicParts)
    private electronicPartsModel: typeof ElectronicParts,
  ) {}

  async paginateAndFilter(
    query: IElectronicPartsQuery,
  ): Promise<{ count: number; rows: ElectronicParts[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IElectronicPartsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.electronic) {
      filter.electronic_manufacturer = JSON.parse(decodeURIComponent(query.electronic));
    }

    if (query.parts) {
      filter.parts_manufacturer = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.electronicPartsModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: ElectronicParts[] }> {
    return this.electronicPartsModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: ElectronicParts[] }> {
    return this.electronicPartsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<ElectronicParts> {
    return this.electronicPartsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<ElectronicParts> {
    return this.electronicPartsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: ElectronicParts[] }> {
    return this.electronicPartsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}