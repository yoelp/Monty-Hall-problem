var randArray = function(arr){
 return arr[Math.floor(Math.random()*arr.length)];
}
var calc = function(){
 var doors = [],i,max,has,temp;
 for (i=0;i<3;i++)doors[i] = Math.random();
 max = Math.max.apply(Math,doors);
 for (i in doors){
  if(doors[i] === max){
   doors[i] =1;
   has = i;
  }else{
   doors[i]=0;
   }
 }
 var choose = Math.floor(Math.random()*3);
 //I call suggest the one that is left closed
 var suggest = (function(){
  if(doors[choose]!=1){
   for(i in doors)
    if (i != choose && doors[i]==1)
     return i;
  }else{
   temp = [0,1,2];
   temp.splice(temp.indexOf(choose),1);
   return randArray(temp);
  }
 }());
 return {
  choosen : choose,
  suggested : suggest,
  hasIt : has
 };
}



// var r = {
//  choosen :0,
//  suggested : 0,
//  percent : 0
// };

// for ( j=0; j<5000;j++){
//  var t = a();
//  if (t.choose == t.has)
//   r.choosen +=1;
//  else
//   r.suggested += 1;
// }
// r.percent= 100/5000*r.suggest;
// console.log(r);