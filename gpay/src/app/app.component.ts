import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpay';
  buttonColor="black";
  buttonType="buy"
  isCustomSize=250;
  buttonHeight=50;
  isTop=window===window.top;

paymentRequest={
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMenthods:[
    {
      type:"CARD",
      parameters:{
        allowedAuthMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      }, 
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantId:"exampleGatewayMerchantId"
        }
      }
    }
  ],
  merchantInfo:{
    merchantId:"1234567",
    merchantName:"demo merchant"
  },
  transactionInfo:{
    totalPriceStatus:"FINAL",
    totalPriceLabel:"Total",
    totalPrice:"100.00",
    currencyCode:"USD",
    countryCode:"US"
  }
};
onLoadPaymentData(event:any):void{
  console.log("Load Payment Data",event.detail)
}
}
