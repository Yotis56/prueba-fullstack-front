import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { HistorialItem } from "../components/HistorialItem"
import '../styles/adquisicionHistorial.css'

const AdquisicionHistorial = () => {
    const [data, setData] = useState([])
    const params = useParams()
    useEffect( () => {
        const getData = async () => {
            const response = await fetch(`http://localhost:3000/requerimientos/${params.id}`)
            const responseJson = await response.json()
            setData(responseJson)
        }
        getData()
    }, [])

    return (
        <div className="historial_container">
            <h2>Historial de modificaciones</h2>
            {
                data.map( item => {
                    return <HistorialItem key={item.id} item={item}/> 
                })
            }
        </div>
    )
}

export { AdquisicionHistorial }