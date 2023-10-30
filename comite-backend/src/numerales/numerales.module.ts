import { Module } from '@nestjs/common';
import { NumeralesService } from './numerales.service';
import { NumeralesController } from './numerales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { numeral, numeralSchema } from './model/numerales.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:numeral.name, schema: numeralSchema}])],
  controllers: [NumeralesController],
  providers: [NumeralesService],
})
export class NumeralesModule {}
