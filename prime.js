let a = 6;
 let flag = 0;
for(let i=2;i*i<=a;i++)
{
    if(a%i==0)
    {
        flag = 1;
        break;
    }
}
if(flag == 0)
{
    console.log("prime")
}
else{
    console.log("not prime")
}