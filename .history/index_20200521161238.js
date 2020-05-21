// Your code here
function mapToNegativize(num){ 
    let negNum = []
    for (let i = 0; i < num.length; i++ ) {
        negNum.push(-1 * num[i])
      }
      return negNum
    }


    function mapToNoChange(num) {
        let r = []
        for (let i = 0; i < num.length; i++ ) {
          r.push(num[i])
        }
        return r
      }

      function reduceToAllTrue(src) {
        for (let i = 0; i < src.length; i++ ) {
          if (!src[i]) return false
        }
        return true
      }

      function reduceToAnyTrue(hey) {
          for (let i = 0; i < hey.length; i++) {
              if (hey[i]) return true 
          }
      }
