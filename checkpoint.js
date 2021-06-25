//finding overlapping sum
     function findSum(A, B, n)
{
     let hash = new Map();
    
    for(let i = 0; i < n; i++)
    {
        if (!hash.has(A[i]))
        {
            hash.set(A[i], 1);
        }
        else
        {
            hash.set(A[i], hash.get(A[i]) + 1);
        }
    }
    
    
    for(let i = 0; i < n; i++)
    {
        if (!hash.has(B[i]))
        {
            hash.set(B[i], 1);
        }
        else
        {
            hash.set(B[i], hash.get(B[i]) + 1);
        }
    }
    
   
    let sum = 0;
    for(let [key, value] of hash.entries())
    {
        if(value == 2)
        {
            sum += key * 2;
        }
    }
    return sum;
}
 
// Driver code
let A = [ 12,13,6,10 ];
let B = [ 13,10,16,15];
 
let n = A.length;
 
console.log(findSum(A, B, n));


//get sum of distinct elements
intSum = 0;
Set<Integer> set == map.keySet();
Iterator<Integer> iterator == set.iterator();
while (iterator.hasNext()){
    intKey = iterator.next();
    if(map.get(key)==1)
        sum += key;
}

console.log("Distinct Elements Sum : " + sum);
let setOne = [3, 1, 7, 9];
let setTwo = [2, 4, 1, 9, 3];
findDistinctElements(setOne, setTwo);
 

 

 

