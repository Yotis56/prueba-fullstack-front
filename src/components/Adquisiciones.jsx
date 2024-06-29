import { useState } from 'react'
import closeIcon from '../assets/icons/closeicon.svg'
import '../styles/adquisiciones.css'

// eslint-disable-next-line react/prop-types
const Adquisiciones = ({setViewModal}) => {    

    const [adquisicion, setAdquisicion] = useState({presupuesto: '',
        unidad: '',
        tipo: '',
        cantidad: '',
        valorunitario: '',
        fechaadquisicion: '',
        proveedor: '',
        documentacion: ''})

    
    const handleClose = () => {
        setViewModal(false)
    }
    const handleChange = (event) => {
        const target = event.target.name
        setAdquisicion({
            ...adquisicion, 
            [target]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:3000/requerimientos/',{
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(adquisicion)
        })
        console.log(response)
        handleClose()
        window.alert('Se Agregó el requerimiento con éxito')
        window.location.reload()
    }

    return (
        <div className="container">
            <img className='close-icon' src={closeIcon} alt="" onClick={handleClose}/>
            <form className='adquisicion_form group' noValidate>
                <div className="flex justify-around">
                    <div className="form-column">
                        <div className="input-container">
                            <label htmlFor="presupuesto">Presupuesto Total ($):</label>
                            <input name='presupuesto' id='presupuesto' type="number" placeholder='' required onChange={handleChange} value={adquisicion.presupuesto} className='invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500' pattern="\d{2,}"/>
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Ingrese un presupuesto</span>
                        </div>
                        <div className="input-container">
                            <label htmlFor="unidad">Unidad Responsable:</label>
                            <input name='unidad' id='unidad' type="text" placeholder='' required onChange={handleChange} value={adquisicion.unidad}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="tipo">Tipo de Bien o Servicio:</label>
                            <input id='tipo' name='tipo' type="text" placeholder='' required onChange={handleChange} value={adquisicion.tipo}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="cantidad">Cantidad (Unidades):</label>
                            <input name='cantidad' id='cantidad'  type="number" placeholder='' required onChange={handleChange} value={adquisicion.cantidad}/>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="input-container">
                            <label htmlFor="valorunitario">Valor Unitario ($):</label>
                            <input name='valorunitario' id='valorunitario'  type="number" placeholder='' required onChange={handleChange} value={adquisicion.valorunitario}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="">Valor Total ($):</label>
                            <input type="number" placeholder='' value={adquisicion.cantidad * adquisicion.valorunitario} readOnly/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="fechaadquisicion">Fecha de Adquisición:</label>
                            <input name='fechaadquisicion' id='fechaadquisicion'  type="date" placeholder='' required onChange={handleChange} value={adquisicion.fechaadquisicion}/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="proveedor">Proveedor:</label>
                            <input name='proveedor' id='proveedor'  type="text" placeholder='' required onChange={handleChange} value={adquisicion.proveedor}/>
                        </div>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor="documentacion">Documentación:</label>
                    <input name='documentacion' id='documentacion' type="text" placeholder='' required onChange={handleChange} value={adquisicion.documentacion}/>
                    <span className='text-sm'>Indique la documentación presentada, separada por punto y coma</span>
                </div>
                <div className="input-container">
                    <button type='submit' onClick={handleSubmit} className="mt-5 py-3 rounded-md text-white group-invalid:pointer-events-none group-invalid:opacity-30">Registrar</button>
                </div>

            </form>
        </div>
    )
}


export { Adquisiciones }