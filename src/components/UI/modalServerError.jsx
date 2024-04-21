import React, {forwardRef} from 'react';
import Modal from "./modal";

function ModalServerError(props, ref) {
  return (
    <Modal ref={ref}>        
      <div className='fs-5 text-center' data-testid="modalServerError">
        Server connection error! <br />
        Please try again later!
    </div>
    </Modal>
  )
}

export default forwardRef(ModalServerError)
