import { useEffect, useState } from 'react'
import { Modal } from '../components/Modal'
import { Adquisiciones } from '../components/Adquisiciones'
import { AdquisicionItem } from '../components/AdquisicionItem'
import { EditarAdquisición } from '../components/EditarAdquisicion'
import '../App.css'

const Home = () => {
    const [viewModal, setViewModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [itemToEdit, setItemToEdit] = useState()
    const [data, setData] = useState([])
  
    useEffect( () => {
        const retrieveData = async () => {
            const response = await fetch('http://localhost:3000/requerimientos')
            const responseJson = await response.json()
            setData(responseJson)
        }
        retrieveData()
    }, [])

    const handleClick = () => {
        setViewModal(true)
    }

    return (
        <>
        <div className="app-container">
            <main className=''>
                <div className="control w-full border rounded border-slate-500">
                    <div className="filtros">
                    <label htmlFor="ordenar">Ordenar por</label>
                    <select name="ordenar" id="ordenar">
                        <option value="dateLow">Fecha (más reciente primero)</option>
                        <option value="dateHigh">Fecha (más reciente último)</option>
                        <option value="montoLow">Monto (mayor a menor)</option>
                        <option value="montoHigh">Monto (menor a mayor)</option>
                    </select>
                    </div>
                    <button className='agregar-btn' onClick={handleClick}>Agregar adquisición</button>
                </div>
                <div className="content">
                    <ul>
                        { data.length > 0?
                        data.map( item => {
                        return <AdquisicionItem key={item.id} adquisicion={item} setIsEdit={setIsEdit} setItemToEdit={setItemToEdit} setViewModal={setViewModal}/> })
                        : 
                        <p>No hay registros almacenados.</p>
                        }
                    </ul>
                    
                </div> 
            </main>
        </div>
        {
            (viewModal && !isEdit) && 
            <Modal setViewModal={setViewModal}>
            <Adquisiciones setViewModal={setViewModal} />
            </Modal>
        }
        {
            (viewModal && isEdit) && 
            <Modal setViewModal={setViewModal} isEdit={isEdit} setIsEdit={setIsEdit}>
            <EditarAdquisición setViewModal={setViewModal} setIsEdit={setIsEdit} itemToEdit={itemToEdit} />
            </Modal>
        }
        </>
    )
}

export { Home }