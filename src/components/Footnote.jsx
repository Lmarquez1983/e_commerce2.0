import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
const Footnote = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/luis-marquez-49556333/' target="_blank" rel="noopener noreferrer" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Lmarquez1983' target="_blank" rel="noopener noreferrer" role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: 
        <a className='text-white' href='https://www.linkedin.com/in/luis-marquez-49556333/' target="_blank" rel="noopener noreferrer">
        &nbsp; Luis Marquez
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footnote