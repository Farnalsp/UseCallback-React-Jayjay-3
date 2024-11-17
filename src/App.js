
import React, { useCallback } from 'react';


const Jumlah = (props) => {
 const sum = useCallback (() => {
   if (props.arr) {
     return props.arr.reduce((total, num) => total + num, 0);
   }
 }, [props.arr]);


 return (
  <>
  <div>
     <p>Jumlah: {sum()}</p>
     <button onClick={sum}>Hitung</button>
   </div>
  </>
 );
}

export default Jumlah;