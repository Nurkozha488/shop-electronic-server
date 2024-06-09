import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart.model';
import { UsersModule } from 'src/users/users.module';
import { ElectronicPartsModule } from 'src/electronic-parts/electronic-parts.module';

@Module({
  imports: [SequelizeModule.forFeature([ShoppingCart]), UsersModule, ElectronicPartsModule,],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
})
export class ShoppingCartModule {}
