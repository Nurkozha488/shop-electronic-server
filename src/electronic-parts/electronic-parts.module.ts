import { Module } from '@nestjs/common';
import { ElectronicPartsController } from './electronic-parts.controller';
import { ElectronicPartsService } from './electronic-parts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ElectronicParts } from './electronic-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([ElectronicParts])],
  controllers: [ElectronicPartsController],
  providers: [ElectronicPartsService],
  exports: [ElectronicPartsService],
})
export class ElectronicPartsModule {}
