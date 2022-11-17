import { FormEventHandler, useContext, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { usePostLogin } from '../../requestAPI';
import { validateId, validateInputs, validatePassword } from '../../utilities/validator';
import { useRouter } from 'next/router';
import { UserNameContext } from '../../provider/UserNameProvider';

const useLoginPage = () => {
  const router = useRouter();
  const { setUserName } = useContext(UserNameContext);
  const loginId = useInput('', validateId);
  const loginPassword = useInput('', validatePassword);
  const { mutate: mutatePostLogin } = usePostLogin({
    onSuccess: ({ data }) => {
      const {
        accessToken,
        user: { ID, NAME },
      } = data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userId', ID);
      setUserName(NAME);
      router.push('/');
    },
  });

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/');
    }
  });

  const isValidLogin = validateInputs([loginId, loginPassword]);

  const login: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutatePostLogin({ id: loginId.value, password: loginPassword.value });
  };

  return { loginId, loginPassword, isValidLogin, login };
};

export default useLoginPage;
