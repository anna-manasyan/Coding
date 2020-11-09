
module.exports = {
    sumofmatrices: function( mat1, mat2) {
        let mat = [];
         for( let row = 0; row < mat1.length; ++row) {
            mat[row] = [];
            for ( let col = 0; col < mat1[0].length; ++col) {
                 let sum = mat1[row][col] + mat2[row][col];
                 mat[row][col] = sum;
            };     
        }
       return mat;
    },

     matrixproduct: function(mat1, mat2) { 
        let newmat = [];
        for( let i = 0; i < mat1.length; i++ ) {
            newmat[i] = [];
            for (let j = 0; j < mat2.length; j++ ) {
                let sum = 0;
                for ( let k = 0; k < mat2.length; k++ ) {
                    sum += mat1[i][k] * mat2[k][j]
                }
                newmat[i][j] = sum;
            }
        }
         return newmat;
    },
  
    
   


    
    sumofarray: function(arr){
    let sum = 0;
    for( i = 0; i < arr.length; ++i){
        sum += arr[i];
    }
    return sum;
    },

    sumofeachrow: function(mat) {
        let result = [];
        for( let row = 0; row < mat.length; ++row){
           result.push(this.sumofarray(mat[row]));
        }
        return result;
    }


    }

    