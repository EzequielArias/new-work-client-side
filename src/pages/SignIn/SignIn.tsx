import { FcGoogle } from "react-icons/fc"
import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line } from "../../styled-components"
import { useForm, useFetchAndLoad } from "../../hooks"
import { signIn } from "../../services"
import { useDispatch } from "react-redux"
import { signin } from '../../redux/states'

export const SignIn = () => {

    const dispatch = useDispatch()

    const { user, userChange} = useForm()
    const { callEndpoint } = useFetchAndLoad()
    
    const handleSubmit = async () => {
        const { data } = await callEndpoint(signIn(user))
        dispatch(signin(data))
    }

  return (
    <FormContainer>
    <FormBox>
        <GoogleLogin><FcGoogle/>Iniciar sesion con Google</GoogleLogin>
        <Line/>
        <InputBox>
            <InputField 
              placeholder="email" 
              type="email" 
              name="email" 
              value={user.email}
              onChange={userChange}
              />
            <InputField 
              placeholder="contraseña" 
              type="password" 
              name="password" 
              value={user.password}
              onChange={userChange}
              />
        </InputBox>
        <ButtonLog onClick={handleSubmit}><b>Iniciar sesion</b></ButtonLog>
    </FormBox>
    </FormContainer>
    )
}

