import React from 'react'
import "./css/display.css"

interface DisplayProps {
  hasMemory: boolean
  expression: string
  value: string
}

export const Screen: React.FC<DisplayProps> = ({ value, hasMemory, expression }) => {
  return (
    <div className='StyledDisplay'>
      <div className='StyledIndicatorList'>
        {hasMemory &&
          <span>M</span>
        }
        <div className='StyledExpression'>
          {expression}
        </div>
      </div>
      <div className='StyleScreen'>
        {value}
      </div>
    </div>
  )
}

export default Screen
