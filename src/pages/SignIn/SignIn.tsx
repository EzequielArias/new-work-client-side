import { FcGoogle } from "react-icons/fc"
import { FormContainer, 
         FormBox,
         GoogleLogin,
         InputBox,
         InputField,
         ButtonLog,
         Line,
         ErrorWarning,
         AdviceSpan
        } from "../../styled-components"
import { useForm, useFetchAndLoad } from "../../hooks"
import { signIn } from "../../services"
import { useDispatch } from "react-redux"
import { signin } from '../../redux/states'
import { Navbar } from "../../components"
import { Link } from "react-router-dom"
import { UserForm } from "../../interfaces"

export const SignIn = () => {

    const dispatch = useDispatch()

    const initialState : UserForm = {
      email : "",
      password : ""
    }

    const { form, formChange, err, errs} = useForm<UserForm>(initialState)
    const { callEndpoint } = useFetchAndLoad()
    
    const handleSubmit = async () => {
        const { data } = await callEndpoint(signIn(form))
        errs(data)
        if(err.length > 0) return
        dispatch(signin(data))
        window.localStorage.setItem('current_user', JSON.stringify(data));
    }

  return (
    <>
    <Navbar/>
    <FormContainer>
    <FormBox>
        <GoogleLogin><FcGoogle/>Iniciar sesion con Google</GoogleLogin>
        <Line/>
        <InputBox>
            <InputField 
              placeholder="email" 
              type="email" 
              name="email" 
              value={form.email}
              onChange={formChange}
              />
            <InputField 
              placeholder="contraseña" 
              type="password" 
              name="password" 
              value={form.password}
              onChange={formChange}
              />
            {
              err.length > 0
                ?
                <>
                  {err.map((errors) => {
                    return (
                      <ErrorWarning>
                        {errors}
                      </ErrorWarning>
                    )
                  })}
                </>
                :
                ""
            }
        </InputBox>
        <ButtonLog onClick={handleSubmit}><b>Iniciar sesion</b></ButtonLog>
    </FormBox>
    <AdviceSpan>No tienes una cuenta ? <Link to={'/signup'}>Registrate</Link></AdviceSpan>
    </FormContainer>
    </>
    )
}

