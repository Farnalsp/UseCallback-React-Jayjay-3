Terdapat komponen Jumlah yang didalamnya terdapat function sum. Ditugas ini, kalian diminta untuk melakukan enhance terhadap function sum dengan menggunakan useCallback, dengan menjumlahkan value nilai array dari props.

import React, { useMemo } from 'react';


const Jumlah = (props) => {
 const sum = () => {
   if (props.arr) {
     return props.arr.reduce((total, num) => total + num, 0)
   };
 }

 return (
   <div>
     <p>Jumlah: {sum()}</p>
   </div>
 );
}

export default Jumlah
