import { FormContainer, FormBox, GoogleLogin, InputBox, InputField, ButtonLog, Line, ErrorWarning, AdviceSpan } from "../../styled-components"
import { FcGoogle } from 'react-icons/fc'
import { useForm, useFetchAndLoad } from "../../hooks"
import { useEffect } from "react";
import { signUp } from '../../services'
import { useDispatch } from "react-redux";
import { signup } from "../../redux/states";
import { Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { UserForm } from "../../interfaces";

export const Signup = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const initialState : UserForm = {
    email : "",
    password : ""
  }

  const { form, formChange, errs, err } = useForm<UserForm>(initialState);
  const { callEndpoint } = useFetchAndLoad()

  const successFullLog = () => navigate('/feed');

  const handleSubmit = async () => {
    const { data } = await callEndpoint(signUp(form))
    errs(data)
    if(err.length > 0) return
    dispatch(signup(data))
    localStorage.setItem('current_user', JSON.stringify(data.payload.tokens));
    successFullLog()
  }

  useEffect(() => {
    return () => {

    }
  }, [formChange])

  return (
    <>
      <Navbar />
      <FormContainer>
        <FormBox id="form-signup">
          <GoogleLogin><FcGoogle />Registrarse con Google</GoogleLogin>
          <Line />
          <InputBox>
            <InputField
              placeholder="email"
              name="email"
              type="email"
              onChange={formChange}
              value={form.email}
            />
            <InputField
              placeholder="contraseña"
              name="password"
              type="password"
              onChange={formChange}
              value={form.password}
            />
            {
              err.length > 0
                ?
                <>
                  {err.map((errors, index) => {
                    return (
                      <ErrorWarning key={index}>
                        {errors}
                      </ErrorWarning>
                    )
                  })}
                </>
                :
                ""
            }
          </InputBox>
          <ButtonLog onClick={handleSubmit} type="button" form="form-signup">Registrarse</ButtonLog>
        </FormBox>
        <AdviceSpan>Tienes una cuenta ? <Link to={'/signin'}>Iniciar Sesion</Link></AdviceSpan>
      </FormContainer>
    </>
  )
}

