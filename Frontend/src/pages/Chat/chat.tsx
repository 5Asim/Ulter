// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
// import { useState } from 'react';
// import { MessageDirection } from '@chatscope/chat-ui-kit-react/src/types/unions';

// export const Chat = () => {
//     const [chatMessages, setChatMessages] = useState([
//         {
//             message: "Hello, I am ChatGPT!",
//             sender: "ChatGPT",
//             direction: "incoming",  // Use a valid value for MessageDirection
//             position: "single",
//         },
//     ]);

// const handleUserMessage = async (userMessage: string) => {
// 	// Create a new user message object
// 	const newUserMessage = {
// 		message: userMessage,
// 		sender: "user",
// 		direction: "outgoing",
// 		position: "single", // Add the "position" property with a valid value
// 	};
       
// 	// Update chat messages state with the new user message
// 	const updatedChatMessages = [...chatMessages, newUserMessage];
// 	setChatMessages(updatedChatMessages);
// };

//     return (
// <div style={{ position: "relative", height: "100vh", width: "700px" }}>
// 	<MainContainer>
// 		<ChatContainer>
// 			<MessageList>
// 				{chatMessages.map((message, i) => (
// 					<Message
// 						key={i}
// 						model={{
// 							...message,
// 							direction: message.direction as MessageDirection,
// 							position: "single" // Change the value of the position property to a valid value
// 						}}
// 						style={message.direction === "incoming" ? { textAlign: "left" } : { textAlign: "right" }}
// 					/>
// 				))}
// 			</MessageList>
// 			<MessageInput placeholder='Type Message here' onSend={handleUserMessage}/>
// 		</ChatContainer>
// 	</MainContainer>
// </div>
//     );
// };
