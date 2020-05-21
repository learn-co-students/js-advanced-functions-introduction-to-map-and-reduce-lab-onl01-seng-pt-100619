// Your code here
function mapToNegativize(num){ 
    let negNum = []
    for (let i = 0; i < num.length; i++ ) {
        negNum.push(-1 * num[i])
      }
      return negNum
    }


    function mapToNoChange(src) {
        let r = []
        for (let i = 0; i < src.length; i++ ) {
          r.push(src[i])
        }
        return r
      }

