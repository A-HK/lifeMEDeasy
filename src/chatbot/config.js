import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import HelpOptions from "./chatbotComponent/helpOption";
import Options from "./chatbotComponent/option";
import Ans from "./chatbotComponent/ansOption";
import AnsPatients from "./chatbotComponent/ansPatients";
const config = {
  botName: "Hospital Guide",
   customStyles: {
    botMessageBox: {
      backgroundColor: "#11BD02"
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(`Hello. Please give your description`, {
      widget: "options",
    }),
    createChatBotMessage(`If you need some help from us please type 'help me' in the chat.`)
  ],
   widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "answers",
        widgetFunc: (props)=><Ans {...props}/>,
      },
      {
        widgetName: "answersPatients",
        widgetFunc: (props)=><AnsPatients {...props}/>,
      },
      {
        widgetName: "help",
        widgetFunc: (props)=><HelpOptions {...props}/>,
      }
   ],
};

export default config;