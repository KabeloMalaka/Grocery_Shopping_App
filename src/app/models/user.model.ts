import { Address } from "./address.model";

export class User {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  shippingAddress: Address = new Address();
  billingAddress: Address = new Address();
}
