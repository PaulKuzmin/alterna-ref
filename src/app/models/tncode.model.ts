export class TncodeModel {
  public code: string;
  public name: string;
  public data: TncodeDataModel | null;
}

export class TncodeDataModel {
  public import_tax: TncodeRateModel | null;
  public export_tax: TncodeRateModel | null;
  public vat: TncodeRateModel | null;
  public excise: TncodeRateModel | null;
  public special: TncodeRateModel | null;
  public ensuring: TncodeRateModel | null;
  public documents: TncodeDocumentsModel | null;
}

export class TncodeRateModel {
  public name: string;
  public data: TncodeRateItemModel[];
}

export class TncodeRateItemModel {
  public name: string;
  public description: string;
  public order: string;
  public rate: string;
  public rate_type: TncodeRateTypeModel;
  public rate_name: string;
  public rate_plus: string;
  public rate_plus_type: TncodeRateTypeModel;
  public rate_plus_name: string;
  public rate_alt: string;
  public rate_alt_type: TncodeRateTypeModel;
  public rate_alt_name: string;
  public minimum: string;
  public maximum: string;
  public min_max_rate: string;
  public limit: string;
  public rate_string: string;
  public country: string;
}

export class TncodeRateTypeModel {
  public kod: string;
  public name: string;
  public val: string;
  public kolval: string;
  public vised: string;
  public viskol: string;
  public edizm: string;
  public koled: string;
  public nameosn: string;
  public name_krat: string;
  public name_poln: string;
  public brutto: string;
  public znak: string;
  public idx: string;
  public class: string;
  public description: string;
}

export class TncodeDocumentsModel {
  public restrictions: TncodeDocumentModel | undefined;
  public license: TncodeDocumentModel | undefined;
  public certificates: TncodeDocumentModel | undefined;
  public others: TncodeDocumentModel | undefined;
}

export class TncodeDocumentModel {
  public name: string;
  public data: TncodeDocumentItemModel[];
}

export class TncodeDocumentItemModel {
  public order: string;
  public document: boolean;
  public authority: string;
  public authority_license: string;
  public country: string;
  public direction: string;
  public description: string;
}
