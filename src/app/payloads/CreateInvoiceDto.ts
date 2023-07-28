import { ITax } from "../interfaces/ITax";
import { IPackingList } from '../interfaces/packing-list/IPackingList';
import { ISalesOrderItem } from '../interfaces/packing-list/ISalesOrderItem';

export class CreateInvoiceDto {

  invoiceId: number = -1;
  currencyId: number = -1;
  taxGroupId: number = -1;
  invoiceTypeId: number = -1;
  invAddressId: number = -1;
  delAddressId: number = -1;
  customerId: number = -1;
  customerPo: string = "";
  invFormat: string = "inv_format_1";
  plFormat: string = "pl_format_1";
  totalQuantity: string = "0";
  subTotal: string = "0.00";
  invoiceTotalTax: string = "0.00";
  invoiceValue: string = "0.00";
  additionalCharges: string = "0.00";
  additionalChargesFor: string = "";
  invoiceTaxes: ITax[] = [];
  discount: string = "0.00";
  dispatchNote: string = "";
  invoiceType = "";
  customerName: string = "";
  currencyCode: string = "";
  exchangeRate: string = "0.00";
  invoiceAddress: string = "";
  deliveryAddress: string = "";
  poNumbers: string[] = [];
  isFoc: boolean = false;
  salesOrderItems: ISalesOrderItem[] = [];
  packingLists: IPackingList[] = [];
  salesOrderReference: string = "";

  invoiceNumber: string = "";
}
