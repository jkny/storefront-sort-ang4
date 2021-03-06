import { Injectable } from '@angular/core';
import { IProduct } from './products.model';
import { Http, Response } from '@angular/http';

@Injectable()

export class ProductService {

    getProduct(): IProduct[] {
        return [
            {
              '_id': '5a05dacc734d1d68d42d31f3',
              'productId': 1,
              'productName': 'Leaf Rake',
              'productCode': 'GDN-0011',
              'releaseDate': 'March 19, 2016',
              'description': 'Leaf rake with 48-inch wooden handle.',
              'price': 19.95,
              'starRating': 3.5,
              'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
              '_id': '5a05daec734d1d68d42d32ca',
              'productId': 2,
              'productName': 'Garden Cart',
              'productCode': 'GDN-0023',
              'releaseDate': 'March 18, 2016',
              'description': '15 gallon capacity rolling garden cart',
              'price': 32.99,
              'starRating': 4.5,
              'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            }
            ,
            {
              '_id': '5a05daec734d1d68d42d32ca',
              'productId': 2,
              'productName': 'Garden Cart',
              'productCode': 'GDN-0023',
              'releaseDate': 'March 18, 2016',
              'description': '15 gallon capacity rolling garden cart',
              'price': 12.99,
              'starRating': 2.7,
              'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            }
        ];
    }
}
