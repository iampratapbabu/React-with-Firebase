import React from 'react';
import {Card, CardContent, Typography } from '@material-ui/core';



const Todo = (props) => {
    return (
        <div>
         <Card>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                <li><h5>{props.text}</h5></li>
                </Typography>
            </CardContent>
         </Card>
            
        </div>
    )
}

export default Todo;
