import { useState } from 'react';

const useNavutils = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return {handleClose,handleShow, show,setShow}
}

export default useNavutils;