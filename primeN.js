let first = 2;
let last = 20

for(let i = first;i<=last;i++)
{
    flag = 0;
    for(let j=2;j*j<=i;j++)
    {
        if(i%j==0)
        {
            flag = 1;
        }
    }
    if(flag == 0)
    {
        console.log(i)
    }
    
}
