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
    const [filtros, setFiltros] = useState([])
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
    const handleChange = (event) => {
        const target = event.target.name
        const value = event.target.value
        setFiltros({
            ...filtros, 
            [target]: value
        })
    }
    const handleFiltrar = async (event) => {
        event.preventDefault()
        let query = `http://localhost:3000/requerimientos?`
        if (Object.keys(filtros).length < 1 ) {
            return
        }
        if (filtros.presupuestoLow){
            query += `presupuesto_min=${filtros.presupuestoLow}&`
        }
        if (filtros.presupuestoHigh){
            query += `presupuesto_max=${filtros.presupuestoHigh}&`
        }
        if (filtros.dateLow){
            query += `date_min=${filtros.dateLow}&`
        }
        if (filtros.dateHigh){
            query += `date_max=${filtros.dateLow}&`
        }
        if (filtros.ordenar) {
            if (filtros.ordenar === 'dateLow') {
                query += `sort=date-low-to-high&`
            } else if (filtros.ordenar === 'dateHigh') {
                query += `sort=date-high-to-low&`
            } else if (filtros.ordenar === 'presupuestoLow') {
                query += `sort=presupuesto-low-to-high&`
            } else if (filtros.ordenar === 'presupuestoHigh') {
                query += `sort=presupuesto-high-to-low&`
            }
        }
        query = query.slice(0,-1)
        const filteredData = await fetch(query)
        const responseJson = await filteredData.json()
        setData(responseJson)
    }
    return (
        <>
        <div className="app-container">
            <main className=''>
                <div className="control w-full border rounded border-slate-500">
                    <form className="filtros" onChange={handleChange}>
                        <div className="filtros_item">
                            <label htmlFor="ordenar">Ordenar por:</label>
                            <select name="ordenar" id="ordenar">
                                <option value="" default></option>
                                <option value="dateHigh">Fecha Adquisición (más reciente primero)</option>
                                <option value="dateLow">Fecha Adquisición (más reciente último)</option>
                                <option value="presupuestoHigh">Presupuesto (mayor a menor)</option>
                                <option value="presupuestoLow">Presupuesto (menor a mayor)</option>
                            </select>
                        </div>
                        <div className="filtros_item">
                            <span>Presupuesto:</span>
                            <div className="filtros_inputs">
                                <div>
                                    <label htmlFor="presupuestoLow">Desde:</label>
                                    <input id='presupuestoLow' name='presupuestoLow' type="number" className='' />
                                </div>
                                <div className="div">
                                    <label htmlFor="presupuestoHigh">Hasta:</label>    
                                    <input type="number" name="presupuestoHigh" id="presupuestoHigh" />
                                </div>
                            </div>
                        </div>
                        <div className="filtros_item">
                            <span>Fecha de adquisición:</span>
                            <div className="filtros_inputs">
                                <div>
                                    <label htmlFor="dateLow">Desde:</label>
                                    <input type="date" name="dateLow" id="dateLow" className='' />
                                </div>
                                <div>
                                    <label htmlFor="dateHigh">Hasta:</label>    
                                    <input type="date" name="dateHigh" id="dateHigh" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='filtro-btn' onClick={handleFiltrar}>Filtrar</button>
                    </form>
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