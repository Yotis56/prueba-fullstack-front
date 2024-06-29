/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import editIcon from '../assets/icons/editicon.svg'
import historyIcon from '../assets/icons/historyicon.svg'
import deleteIcon from '../assets/icons/deleteicon.svg'
import '../styles/adquisicionItem.css'

const AdquisicionItem = ({adquisicion, setIsEdit, setItemToEdit, setViewModal}) => {
    const handleEdit = () => {
        setViewModal(true)
        setIsEdit(true)
        setItemToEdit(adquisicion)
    }
    const handleDelete = async () => {
        const confirm = window.confirm('¿Está seguro que desea eliminar la solicitud de Adquisición?')
        if (confirm){
            try {
                await fetch(`http://localhost:3000/requerimientos/${adquisicion.id}`,{
                    method: "DELETE",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    referrerPolicy: "no-referrer",
                })
                window.alert('Se eliminó el requerimiento con éxito')
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        }
    }

    const fechaAdquisicion = new Date(adquisicion.fechaadquisicion)
    const fecha = fechaAdquisicion.toLocaleDateString('es-Co', {month: 'long' , day: 'numeric' ,year: 'numeric',  })
    const currencyFormat = new Intl.NumberFormat('es-Co', { style: 'currency', currency: 'COP', maximumSignificantDigits: 1})
    const quantityFormat = new Intl.NumberFormat('es-CO', {style: 'decimal'})
    return (
        <li className='adquisicion_container'>
            <div className="info_container">
                <div className="item">
                    <span className='item_title'>Presupuesto</span>
                    <p className='item_content'>{currencyFormat.format(adquisicion.presupuesto)}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Unidad Encargada</span>
                    <p className='item_content'>{adquisicion.unidad}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Tipo de Elemento</span>
                    <p className='item_content'>{adquisicion.tipo}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Cantidad</span>
                    <p className='item_content'>{quantityFormat.format(adquisicion.cantidad)}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Unitario</span>
                    <p className='item_content'>{currencyFormat.format(adquisicion.valorunitario)}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Total</span>
                    <p className='item_content'>{currencyFormat.format(adquisicion.valorunitario * adquisicion.cantidad)}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Fecha de Adquisición</span>
                    <p className='item_content'>{fecha}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Proveedor</span>
                    <p className='item_content'>{adquisicion.proveedor}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Documentación</span>
                    <div className="">
                        {
                            adquisicion.documentacion.map( (documento, index) =>{
                                return <small className='item_content' key={index}>{documento}</small>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="buttons_container">
                <img src={editIcon} width='50px' alt="" onClick={handleEdit}/>
                <Link to={`/adquisiciones/${adquisicion.id}`}>
                    <img src={historyIcon} width='50px' alt="" />
                </Link>
                <img src={deleteIcon} width='50px' alt="" onClick={handleDelete}/>
            </div>
        </li>
    )
}

export { AdquisicionItem }