import React from 'react'

const EditText = () => {
  return (
    <>
    <div className="input-group mb-3 w-25">
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        <span className="input-group-text" id="basic-addon1">@</span>
    </div>
    </>
  )
}

export default EditText