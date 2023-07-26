import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line } from "../../styled-components"
import { FcGoogle } from 'react-icons/fc'
import { useForm, useFetchAndLoad } from "../../hooks"
import { useEffect } from "react";
import { signUp } from '../../services'
import { useDispatch } from "react-redux";
import { signup } from "../../redux/states";

export const Signup = () => {

  const dispatch = useDispatch()

  const { user, userChange } = useForm();
  const { loading, callEndpoint } = useFetchAndLoad()

  const handleSubmit = async () => {
    const data = await callEndpoint(signUp(user))
    dispatch(signup(data))
  }

  useEffect(() => {
      return () => {

      }
    }, [userChange])

  return (
    <FormContainer>
      <FormBox>
        <GoogleLogin><FcGoogle />Registrarse con Google</GoogleLogin>
        <Line />
        <InputBox>
          <InputField placeholder="email" name="email" type="email" onChange={userChange} value={user.email} />
          <InputField placeholder="contraseña" name="password" type="password" onChange={userChange} value={user.password} />
        </InputBox>
        <ButtonLog onClick={handleSubmit}>Registrarse</ButtonLog>
      </FormBox>
    </FormContainer>
  )
}

