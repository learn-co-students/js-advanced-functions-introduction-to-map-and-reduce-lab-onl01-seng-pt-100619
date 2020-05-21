// Your code here
function mapToNegativize(num){ 
    let negNum = []
    for (let i = 0; i < num.length; i++ ) {
        negNum.push(-1 * num[i])
      }
      return negNum
    }


function mapToNoChange(num)
{
    let neg = []
    for (let i =0; i < num.length; i++) {
        neg.push(neg[i])
    }
    return neg 
}


