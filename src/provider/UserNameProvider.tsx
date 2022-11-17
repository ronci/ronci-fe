import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';

interface UserNameContextProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

export const UserNameContext = createContext<UserNameContextProps>({
  userName: '',
  setUserName: () => {},
});

export const UserNameProvider = ({ children }: PropsWithChildren<{}>) => {
  const [userName, setUserName] = useState('');

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
};
