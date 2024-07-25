import classes from './inputContainer.module.css';

export default function inputContainer({ label, bgColor, children }){
    return(
        <div className={classes.container} style={{ backgroundColor: bgColor }}>
            <label className={classes.label}>{label}</label>
            <div className={classes.content}>{children}</div>
        </div>
    )
}