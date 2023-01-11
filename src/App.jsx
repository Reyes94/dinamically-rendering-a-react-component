import {useState} from "react"
import {BaseColaboradores} from "./components/Data"
import Navbar from "./components/Navbar";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

const App = () => {

    const [colaborator, setColaborator] = useState(BaseColaboradores)
    const [search, setSearch] = useState("")

    return (
        <>
           <Navbar setSearch={setSearch}/>

            <div className="container mt-5">
                <Form setColaborator={setColaborator} colaborator={colaborator}/>
            </div>

            <div className="container pd-4 mt-5">
                <hr/>
                <h5 className="mt-3">Listado de Colaboradores</h5>
                <List colaborator={colaborator} search={search}></List>
            </div>
        </>
    )
}

export default App
