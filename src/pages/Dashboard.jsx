import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import TareaForm from "../components/TareaForm"

const Dashboard = () => {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth )
  
  useEffect(() => {

    if(!user) {
      navigate('/login')
    }

  }, [user, navigate])

  return (
    <>
      <section className="heading">
        <h4>Bienvenido {user && user.name}</h4>
        <p>Dashboard de Tareas</p>
      </section>
      <TareaForm />
    </>
  )
}

export default Dashboard