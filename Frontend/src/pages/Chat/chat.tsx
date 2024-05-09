// import ollama from 'ollama';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
// import { useState } from 'react';
// import { MessageDirection } from '@chatscope/chat-ui-kit-react/src/types/unions';
// import './chatApp.css'

// export const Chat = () => {
//   const [chatMessages, setChatMessages] = useState([
//     {
//       message: "Hello, I am Ulter",
//       sender: "Ulter",
//       direction: "incoming",
//       position: "single",
//     },
//   ]);

//   const handleUserMessage = async (userMessage: string) => {
//     const newUserMessage = {
//       message: userMessage,
//       sender: "user",
//       direction: "outgoing",
//       position: "single",
//     };

//     // Immediately update chat with user message
//     setChatMessages(prevMessages => [...prevMessages, newUserMessage]);

//     // Call the handleAIResponse function with the user's message
//     await handleAIResponse(userMessage);
//   };

//   const handleAIResponse = async (userMessage: string) => {
//     try {
//       const response = await ollama.chat({
//         model: 'zeart/farmvision_openorca', // Replace with the appropriate model
//         messages: [{ role: 'user', content: userMessage }],
//       });

//       const aiMessage = {
//         message: response.message.content,
//         sender: 'AI',
//         direction: 'incoming',
//         position: 'single',
//       };

//       // Update the chat messages state with the AI response using functional update
//       setChatMessages(prevMessages => [...prevMessages, aiMessage]);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
	
// 		<div style={{height: '80vh'}}>
// 		<MainContainer>
// 			<ChatContainer>
// 			<MessageList>
// 			{chatMessages.map((message, index) => (
// 			<Message
// 				key={index}
// 				model={{
// 				...message,
// 				direction: message.direction as MessageDirection,
// 				position: "single",
// 				}}
// 				style={message.direction === "incoming" ? { textAlign: "left" } : { textAlign: "right" }}
// 			/>
// 			))}
// 			</MessageList>
// 			<MessageInput placeholder='Type Message here' onSend={handleUserMessage} />
// 			</ChatContainer>
// 		</MainContainer>
// 		</div>
	
//   );
// };
