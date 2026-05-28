export type AddressType = {
  street: string;
  city: string;
};

export type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType;
};
export type UsersObjectType = {
  myFriends: UserType[];
};
