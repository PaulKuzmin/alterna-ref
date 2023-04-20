export class ContactModel {
  address: string;
  contacts: ContactDetailModel;
  even: boolean;
  id: number;
  map: string;
  name: string;
  short_name: string;
}

export class ContactDetailModel {
  public emails: string[];
  public phones1: string[];
  public phones2: string[];
}
