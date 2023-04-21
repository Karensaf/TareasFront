import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

const Login = () => {

  const [fromData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = fromData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user,isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  useEffect(()=> {
    
    if(isError) {
      toast.error(message)
    }

    if(isSuccess) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch ])


  //?La funcion onChance hace que se 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = { email, password}
    dispatch(login(userData))
    
  }

  if(isLoading) {
    return <Spinner />
  }


  return (
    <>
    
      <section className="heading"> 
        <h4>
          <FaSignInAlt /> Login
        </h4>
        <p>Por favor teclea tus credenciales</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
            className="form-control" 
            type="text" 
            name="email" 
            id="email" 
            value={email} 
            placeholder="Escribe tu email" 
            onChange={onChange} />
          </div>
          <div className="form-group">
            <input 
            className="form-control" 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            placeholder="Escribe tu password" 
            onChange={onChange} />
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login