export interface ShippingAddressType {
shippingAddress: UserAddressType;
}

export interface UserAddressType {
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}