import React from 'react'
import SomeContext from './SomeContext'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UiKitProvider = ({color, children}: any) => {
    document.documentElement.style.setProperty('accent-color', color)

  return (
    <SomeContext.Provider value={color}>
        {children}
    </SomeContext.Provider>
  )
}

export default UiKitProvider