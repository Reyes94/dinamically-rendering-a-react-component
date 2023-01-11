import {useState} from "react";

const Form = ({setColaborator, colaborator}) => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [error, setError] = useState("")

    function calculateID(arrayID) {
        const jobs = arrayID.sort((x, y) => x.id - y.id)   //ordena de menor a mayor
        if (jobs.length > 0) {
            return jobs[jobs.length - 1].id + 1  //  luego saca el último id y le suma 1
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("")
        if (!name.trim() || !mail.trim()) {
            return setError("Llena todos los campos");
        } 
        
        const newColaborator = {
            nombre: name,
            correo: mail,
            id: calculateID(colaborator),
        }

        setColaborator([...colaborator, newColaborator])
        setName("")
        setMail("")

    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
                <label className="form-label">Nombre del colaborador</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Ingresa el nombre del colaborador" />
            </div>
            <div className="form-group mt-3">
                <label className="form-label">Correo del colaborador</label>
                <input onChange={(e) => setMail(e.target.value)} type="email" value={mail} className="form-control" placeholder="Ingresa correo del colaborador" />
            </div>
            <button type="submit" className="btn btn-primary mt-4">Agregar colaborador</button>
            <p className="error mt-2">{error}</p>
        </form>
    )
}


export default Form