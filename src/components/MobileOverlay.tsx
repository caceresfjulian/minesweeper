import React from 'react'

function MobileOverlay (): JSX.Element {
  return (
    <div className="overlay">
      <div
        style={{
          backgroundColor: 'var(--background-color)',
          border: '1px solid var(--main-color)',
          width: '75%',
          maxWidth: '500px',
          height: '250px',
          padding: '35px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <h3>This game is not playable on mobile devices :(</h3>
      </div>
    </div>
  )
}

export default MobileOverlay
