import React from 'react'
import { useLoading } from '../../hooks/useLoading'
import classes from './loading.module.css'


function Loading() {
    
    const { isLoading } = useLoading();

    if(!isLoading) return;
    
    return (
        <div className={classes.container}>
            <div className={classes.items}>
                <img src='/loading.svg' alt='Loading!'/>
                <h1>Loading!</h1>
            </div>
         
        </div>
    )
}

export default Loading
