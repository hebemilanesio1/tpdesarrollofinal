/* eslint-disable prettier/prettier */
// products.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from '../entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<ProductEntity[]> {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() productData: { name: string; price: number }): Promise<ProductEntity> {
    return this.productsService.create(productData);
  }
}
