export class BaseModel{
    _primeryId: number;
}
export class TableModel extends BaseModel {
    public Index: number = 0;
    public IsEdit: boolean = false;
    public IsDeleted: boolean = false;
    public FormArreyIndex: number = -1;
}