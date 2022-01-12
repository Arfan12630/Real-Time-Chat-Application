
import {ChatEngine} from 'react-chat-engine'; 
import Chat from './components/Chat';
function App() {
  return (
 
      
        <ChatEngine
        height='100vh'
        projectID = "e1bf43bf-c3b8-4cdb-b1e4-1d87cc4f8dc5"
        userName = "Arfan123"
        userSecret = "Lakers12345"
        renderChatFeed = {(chatAppProps) => 
        <Chat {...chatAppProps}/>}
        />
    
  );
}

export default App;
