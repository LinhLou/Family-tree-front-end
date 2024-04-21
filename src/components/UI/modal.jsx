import React, { forwardRef } from 'react'


function Modal({children}, ref){
  return (
    <div className="modal" tabIndex="-1" ref={ref} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button role="button" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer border-0">
              <button role="button" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default forwardRef(Modal)
