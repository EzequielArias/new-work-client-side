import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line } from "../../styled-components"
import { FcGoogle } from 'react-icons/fc'

export const Signup = () => {
  return (
    <FormContainer>
        <FormBox>
            <GoogleLogin><FcGoogle/>Registrarse con Google</GoogleLogin>
            <Line/>
            <InputBox>
                <InputField placeholder="email"/>
                <InputField placeholder="contraseña"/>
            </InputBox>
            <ButtonLog><b>Registrarse</b></ButtonLog>
        </FormBox>
    </FormContainer>
  )
}

