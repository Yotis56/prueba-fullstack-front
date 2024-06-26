import { useState } from 'react'
import '../styles/adquisiciones.css'

const Adquisiciones = ( ) => {
    const [adquisicion, setAdquisicion] = useState({
        presupuesto: '',
        unidad: '',
        tipo: '',
        cantidad: 0,
        valorunitario: 0,
        fechaadquisicion: '',
        proveedor: '',
        documentacion: ''
    })
    
    const handleChange = (event) => {
        const target = event.target.name

        setAdquisicion({
            ...adquisicion, 
            [target]: event.target.value
        })
    }
    const handleSubmit = () => {

    }
    return (
        <div className="container">
            <p>En este formulario Ud. puede ingresar la información de la adquisición a registrar.</p>
            <form action="">
                <div className="input-container">
                    <label htmlFor="presupuesto">Presupuesto Total ($):</label>
                    <input name='presupuesto' id='presupuesto' type="number" placeholder='' required onChange={handleChange} value={adquisicion.presupuesto}/>
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
                <div className="input-container">
                    <label htmlFor="documentacion">Documentación:</label>
                    <input name='documentacion' id='documentacion' type="text" placeholder='' required onChange={handleChange} value={adquisicion.documentacion}/>
                </div>
                <div className="input-container">
                    <button onSubmit={handleSubmit}>Registrar</button>
                </div>

            </form>
        </div>
    )
}


export { Adquisiciones }