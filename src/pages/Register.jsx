import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {

  const [fromData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = fromData
  
  //?La funcion onChance hace que se 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    
      <section className="heading"> 
        <h4>
          <FaUser /> Registrar
        </h4>
        <p>Por favor crea una cuenta</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input 
            className="form-control" 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            placeholder="Escribe tu nombre" 
            onChange={onChange} />
          </div>
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
            <input 
            className="form-control" 
            type="password" 
            name="password2" 
            id="password2" 
            value={password2} 
            placeholder="Confirma tu password" 
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

export default Register