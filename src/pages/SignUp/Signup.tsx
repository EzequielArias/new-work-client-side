import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line, ErrorWarning, AdviceSpan } from "../../styled-components"
import { FcGoogle } from 'react-icons/fc'
import { useForm, useFetchAndLoad } from "../../hooks"
import { useEffect } from "react";
import { signUp } from '../../services'
import { useDispatch } from "react-redux";
import { signup } from "../../redux/states";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";

export const Signup = () => {

  const dispatch = useDispatch()

  const { user, userChange, errs, err } = useForm();
  const { loading, callEndpoint } = useFetchAndLoad()

  const handleSubmit = async () => {
    const { data } = await callEndpoint(signUp(user))
    errs(data)
    if(err.length > 0) return
    dispatch(signup(data))
    window.localStorage.setItem('current_user', JSON.stringify(data));
  }

  useEffect(() => {
    return () => {

    }
  }, [userChange])

  return (
    <>
      <Navbar />
      <FormContainer>
        <FormBox>
          <GoogleLogin><FcGoogle />Registrarse con Google</GoogleLogin>
          <Line />
          <InputBox>
            <InputField
              placeholder="email"
              name="email"
              type="email"
              onChange={userChange}
              value={user.email}
            />
            <InputField
              placeholder="contraseña"
              name="password"
              type="password"
              onChange={userChange}
              value={user.password}
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
          <ButtonLog onClick={handleSubmit}>Registrarse</ButtonLog>
        </FormBox>
        <AdviceSpan>Tienes una cuenta ? <Link to={'/signin'}>Iniciar Sesion</Link></AdviceSpan>
      </FormContainer>
    </>
  )
}

