import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public details=[];
  public sort=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public totalproductsale: any;
  public totalamount: any;

  constructor(private web3Service:Web3servicesService,private router:Router){ }
ngOnInit(){
  let meta = this;
  //  meta.alltablework();
    meta.web3Service.getUserBalance().then(balance => meta.balance = balance);
    meta.web3Service.getAccount().then(acc => {
        this.account = acc;
        meta.id1 = setInterval(function() {
         if (typeof window.web3 !== 'undefined') {
             meta._web3 = new Web3(window.web3.currentProvider);
             if (meta._web3.eth.accounts[0] !== meta.account) {
                 meta.account = meta._web3.eth.accounts[0];
                 if (meta._web3.eth.accounts[0] === undefined) {
                     meta.router.navigate(['metamask']);
                     clearInterval(this.interval);
                 } else {
                    // alert('Address Change Detected Please Refresh Page');
                   // window.location.reload();
                 }
             }
         } else {
             meta.router.navigate(['metamask']);
         }
        }, 200);
     });

     meta.id2 = setInterval(function() {
      meta.web3Service.getUserBalance().then(balance => this.balance = balance);
      meta.web3Service.getAccount().then(account => this.balance = account);
    //  meta.alltablework();
  }, 20000);
}

//report table

date_view_details(datest,dateend){

var a :any =datest;
var b :any=new Date(a);
var c:number =Math.round(b);
var d:any =c/1000.0;
var date1:number=parseInt(d);

var a :any = dateend;
var b :any=new Date(a);
var c:number =Math.round(b);
var d:any =c/1000.0;
var date2:number=parseInt(d);
// alert( date1);
// alert( date2);
this.web3Service.getCustomerCount().then(order=>{
this.details=[0];
this.totalproductsale=0;
this.totalamount=0;
var tofprice;
var tofquantity;

order.forEach(element => {
    this.web3Service.ViewCustomer(element).then(obj=>{
      var a :any =obj[7];
      var b :any=new Date(a);
      var c:number =Math.round(b);
      var d:any =c/1000.0;
      var dt:number=parseInt(d);
      // alert(dt);
       if( date1 <= dt &&  date2 >= dt){
        
         if(obj[8]==1){
           var f="ORDERED";
          var t = parseInt(this.totalproductsale)
           this.totalproductsale=t+parseInt(obj[5]);
     var g=this.totalamount;
           this.totalamount = parseFloat(g)+parseFloat(obj[6]);
          //  alert(g+obj[6]);
         }
         else{
           var f="CANCELLED"          
         
         }

      

         if(obj[3]!=""){
          
         }

         this.details.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"totalprice": obj[6],"totalquantity":obj[5],"dateVal":obj[7],"Status":f});     
       }//if
      //  else {
      //    alert("can't find records for this duration");
      //  }

   })    
   
});

})

}

}
