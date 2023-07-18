import { FcGoogle } from "react-icons/fc"
import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line } from "../../styled-components"

export const SignIn = () => {
  return (
    <FormContainer>
    <FormBox>
        <GoogleLogin><FcGoogle/>Iniciar sesion con Google</GoogleLogin>
        <Line/>
        <InputBox>
            <InputField placeholder="email"/>
            <InputField placeholder="contraseña"/>
        </InputBox>
        <ButtonLog><b>Iniciar sesion</b></ButtonLog>
    </FormBox>
</FormContainer>
    )
}

