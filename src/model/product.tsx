import IProducts from '../interfaces/Iproducts';

export class Product implements IProducts {
  private _id: number;
  private _title: string;
  private _price: number;
  private _category: string;
  private _description: string;
  private _image: string;

  constructor(
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
  ) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._category = category;
    this._description = description;
    this._image = image;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }

  public get category(): string {
    return this._category;
  }

  public set category(category: string) {
    this._category = category;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get image(): string {
    return this._image;
  }

  public set image(image: string) {
    this._image = image;
  }
}
