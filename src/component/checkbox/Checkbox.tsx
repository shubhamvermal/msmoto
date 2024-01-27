import React, { useContext } from 'react'
import SomeContext from '../SomeContext';

const Checkbox = () => {
    const theme = useContext(SomeContext);

  return (
    <div>Checkbox</div>
  )
}

export default Checkbox