import { useContext, useEffect } from 'react';
import { UserNameContext } from '../../provider/UserNameProvider';
import { useGetUserInfo } from '../../requestAPI';

const useLoginInfo = () => {
  const { userName, setUserName } = useContext(UserNameContext);
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const { refetch: refetchUserInfo } = useGetUserInfo(
    { userId: String(userId) },
    {
      enabled: false,
      onSuccess: ({ data }) => {
        const { NAME } = data.data.user;
        setUserName(NAME);
      },
    }
  );

  useEffect(() => {
    if (userId && userName === '') {
      refetchUserInfo();
    }
  }, [userId]);

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setUserName('');
  };

  return { userName, logout };
};

export default useLoginInfo;
