import React from 'react'

const Loader = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
        </div>
      
    </div>
  )
}

export default Loader;
