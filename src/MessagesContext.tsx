import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


interface Messages {
  id: string;
  name: string;
  message: string;
  messageType: number;
  created_at: Date;
}

type MessageInput = Omit<Messages, 'id' | 'created_at'>;

interface MessagesProviderProps {
  children: ReactNode;
}

interface MessagesContextData {
  messages: Messages[];
  createMessage: (message: MessageInput) => Promise<void>;
}

export const MessagesContext = createContext<MessagesContextData>({} as MessagesContextData);


export function MessagesProvider({ children }: MessagesProviderProps) {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [validator, setValidator] = useState('');

  useEffect(() => {
    api.get('message')
      .then(response => setMessages(response.data));
  }, [validator]);

  async function createMessage(messageInput: MessageInput) {
    const { data } = await api.post('message', messageInput);

    if (validator === '') {
      setValidator(data.message);

    } else {
      setValidator('');
    }

  }

  return (
    <MessagesContext.Provider value={{ messages, createMessage }}>
      {children}
    </MessagesContext.Provider>
  );

}