//import { useState, useEffect } from "react"
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const chat = (props) => {
    
    const {chats, activeChats,userName,messages} = props; //Destructing vartiables from props 
    const chat = chats && chats[activeChats]; // Checks if chat is included and sees if it is allocated with [activechats]
    
    //Function to generate messages 
    const renderMessages = () => {
            const keys  = Object.keys(messages);  // used to fetch messages 
            return keys.map((key,index) => { //going to find the keys and index 
                const message = messages[key]; 
                const lastMessageKey = index === 0 ? null : keys[index-1]; //index -1 means to find the last message 
                const isMyMessage = userName === message.sender.username
                
                return (
                    <div key={`msg_${index}`} style = {{width:"100%"}}>
                        <div className="message-block">
                            {
                                isMyMessage // if it is my message 
                                ? <MyMessage message ={message}/> //return my message 
                                : <TheirMessage message = {message} lastMessage = {messages[lastMessageKey]}/> // else return their message if it is not my message
                                                //dynamically takes in last message key 
                            } 

                        </div>
                        <div className="read-message" style = {{marginRight:isMyMessage ? '20px' : '0px', marginLeft:isMyMessage ? '0px':'68px' }}> 
                            
                            </div>
                    </div>
                );
            
            })
    }
 
    if(!chat)
    {
        return "Loading......"; 
    }
    return (
        <div className="Chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                        {chat?.title} 
                </div>
                <div className = "Chat-subtitle">
                {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div> 
            {renderMessages()}
            <div style = {{height:'100px'}}/>
            <div className = "message-form-container"> 
                <MessageForm {...props} chatID = {activeChats}/> 
            </div>
        </div>
    )
}

export default chat
