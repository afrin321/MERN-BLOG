import React from 'react'

function Post() {
  return (
    <div className='post'>
          <div className="image">
          <img src='https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=911&q=80' />
          </div>          
          <div className='texts'>
            <h2>Gateaway</h2>
            <p className='info'>
              <a className='author'>Afrin Haque</a>
              <time>2023-01-26 16:45</time>
            </p>
            <p className='summary'>Craving a vaaction. Cant wait to go back. Nature retreat.</p>
          </div>
          
        </div>
  )
}

export default Post