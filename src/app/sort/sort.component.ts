import { Component, OnInit } from '@angular/core';
import { Web3servicesService } from '../services/web3services.service';
import { Router } from '@angular/router';

declare let window: any;
import * as Web3 from 'web3';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  public details=[];
  public sort=[];
  public  _web3: any;
  public id1: any;
  public id2: any;
  public account:string;
  public balance:number;
  public totalproductsale: number=0;
  public totalamount: number=0;

  constructor(private web3Service:Web3servicesService,private router:Router) { }

  ngOnInit() {
  }
  //sortlist table
sortlisting(sortlist,options){
  this.sort= [0];
  if(options == 0){
    this.web3Service.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.web3Service.ViewCustomer(element).then(obj=>{
             if(sortlist == obj[0]){
              
               if(obj[8]==1){
                 var f="ORDERED";
                 var tot
                //  alert(obj[5]);
                //  this.totalproductsale=this.totalproductsale+obj[5];
                //  alert(this.totalproductsale)
                //  this.totalamount=+parseInt(obj[6]);
               }
               else{
                 var f="CANCELLED"           
               }
    
            
  
               if(obj[3]!=""){
                
               }
  
               this.sort.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"totalprice": obj[6],"totalquantity":obj[5],"dateVal":obj[7],"Status":f});     
             }//if
            //  else {
            //    alert("can't find records for this duration");
            //  }
     
         })    
         
      });
      
    })

  }//if
  else if(options == 1){
    this.sort= [0];
    this.web3Service.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.web3Service.ViewCustomer(element).then(obj=>{
             if(sortlist==obj[2]){
               if(obj[8]==1){
                 var f="ORDERED";
                 var tot
                //  alert(obj[5]);
                //  this.totalproductsale=this.totalproductsale+obj[5];
                //  alert(this.totalproductsale)
                //  this.totalamount=+parseInt(obj[6]);
               }
               else{
                 var f="CANCELLED"           
               }
    
            
  
               if(obj[3]!=""){
                
               }
  
               this.sort.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"totalprice": obj[6],"totalquantity":obj[5],"dateVal":obj[7],"Status":f});     
             }//if
            //  else {
            //    alert("can't find records for this duration");
            //  }
     
         })    
         
      });
      
    })

  }//elseif 1
  else if(options == 2){
    this.sort= [0];
    this.web3Service.getCustomerCount().then(order=>{
      order.forEach(element => {
          this.web3Service.ViewCustomer(element).then(obj=>{
             if(sortlist == obj[1]){
               if(obj[8]==1){
                 var f="ORDERED";
                 var tot
                //  alert(obj[5]);
                //  this.totalproductsale=this.totalproductsale+obj[5];
                //  alert(this.totalproductsale)
                //  this.totalamount=+parseInt(obj[6]);
               }
               else{
                 var f="CANCELLED"           
               }
    
            
  
               if(obj[3]!=""){
                
               }
  
               this.sort.push({"oid":obj[0],"pid":obj[1],"cusid":obj[2],"pname":obj[3],"totalprice": obj[6],"totalquantity":obj[5],"dateVal":obj[7],"Status":f});     
             }//if
            //  else {
            //    alert("can't find records for this duration");
            //  }
     
         })    
         
      });
      
    })
  }//elseif2

}

}
