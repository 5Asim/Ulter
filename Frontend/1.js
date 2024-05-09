// import ollama from 'ollama';

// const handleAIResponse = async (userMessage) => {
//   try {
//     const response = await ollama.chat({
//       model: 'zeart/farmvision_openorca', // Replace with the appropriate model
//       messages: [{ role: 'user', content: userMessage }],
//     });

//     const aiMessage = {
//       message: response.message.content,
//       sender: 'AI', // or any other name you prefer
//       direction: 'incoming',
//       position: 'single',
//     };

//     // Update the chat messages state with the AI response
//     setChatMessages([...chatMessages, aiMessage]);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };
// // import ollama from 'ollama'

// // const response = await ollama.chat({
// //   model: 'zeart/farmvision_openorca',

// //   messages: [{ role: 'user', content: 'If I have a weather forecast of Ideal harvesting time and' }],
// // })
// // console.log(response.message.content)