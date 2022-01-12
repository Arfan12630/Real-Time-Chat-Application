import React from 'react'

const MyMessage = ({message}) => {
    //check to see if message is image 
    if(message.attachements && message.attachements.length > 0)
    {
        //returns image if length greater than 0
        return (
            <img
            src = {message.attachements[0].file}
            alt = "message-attachment"
            className="message-image"
            style = {{float:'right'}}/>
        )
    
    }

    //if not image we render text 
    return (
        <div className="message" style = {{float: "right", marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default MyMessage
