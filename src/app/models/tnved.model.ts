export class TnvedModel {
  public level: number;
  public nodes: TnvedNodeModel[];
}

export class TnvedNodeModel {
  public dsign: string;
  public edi2: string;
  public edi3: string;
  public has_childs: string;
  public idx: string;
  public index_: string;
  public kod: string;
  public kodplus: string;
  public longname: string;
  public name: string;
  public parent_idx: string;
}
