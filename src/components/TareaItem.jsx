

const TareaItem = ({ tarea }) => {
  return (
    <div className="tarea">
        <div>
            {new Date(tarea.createdAt).toLocaleString('es-MX')}
            <h4>{tarea.texto}</h4>
        </div>
    </div>
  )
}

export default TareaItem