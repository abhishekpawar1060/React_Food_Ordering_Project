import { type } from '@testing-library/user-event/dist/type'
import classes from './button.module.css'
import { getNodeText } from '@testing-library/react'


export default function Button({
    type,
    text, 
    onClick,
    color, 
    backgroundColor, 
    fontSize, 
    width, 
    height,
}) {
    return (
        <div className={classes.container}>
            <button
                style={{
                    color,
                    backgroundColor,
                    fontSize,
                    width,
                    height,
                }}
                type={type}
                onClick={onClick}
            >
                {text}
            </button>    
        </div>
    )
}

Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    backgroundColor: '#e72929',
    color: 'white',
    fontSize: '1.3rem',
    width: '12rem',
    height: '3.5rem'
}