import React, {Component} from "react";

class NotDefindeMenuChild extends Component<NotDefindeMenuChildProps , NotDefindeMenuChildState >{

    render(){
        return ( 
            <div>
                not definde this menu child
            </div>
        )    
    }
 }

export default NotDefindeMenuChild;

type NotDefindeMenuChildProps = INotDefindeMenuChildProps 
type NotDefindeMenuChildState = INotDefindeMenuChildState

interface INotDefindeMenuChildState { }
interface INotDefindeMenuChildProps { }