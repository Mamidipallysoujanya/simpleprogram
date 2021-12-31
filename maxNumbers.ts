var arr:number[]=[7, 12, 45, 90, 57, 100];  //declaration and initiallization
var max= arr[0];
for(var i=0;i<arr.length;i++)
{
  if(arr[i]>=max)
  {
      max=arr[i];
      console.log('max' +max);
      
  }
}
console.log(max);




