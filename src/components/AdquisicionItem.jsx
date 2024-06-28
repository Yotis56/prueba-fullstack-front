/* eslint-disable react/prop-types */
import '../styles/adquisicionItem.css'
import editIcon from '../assets/icons/editicon.svg'
import historyIcon from '../assets/icons/historyicon.svg'
import deleteIcon from '../assets/icons/deleteicon.svg'

const AdquisicionItem = ({adquisicion, setIsEdit, setItemToEdit, setViewModal}) => {
    const handleEdit = () => {
        setViewModal(true)
        setIsEdit(true)
        setItemToEdit(adquisicion)
    }

    const fechaAdquisicion = new Date(adquisicion.fechaadquisicion)
    const fecha = fechaAdquisicion.toLocaleDateString('es-Co', {month: 'long' , day: 'numeric' ,year: 'numeric',  })
    return (
        <li className='adquisicion_container'>
            <div className="info_container">
                <div className="item">
                    <span className='item_title'>Presupuesto</span>
                    <p className='item_content'>{adquisicion.presupuesto}</p>
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
                    <p className='item_content'>{adquisicion.cantidad}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Unitario</span>
                    <p className='item_content'>{adquisicion.valorunitario}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Total</span>
                    <p className='item_content'>{adquisicion.valorunitario * adquisicion.cantidad}</p>
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
                            adquisicion.documentacion.map( documento =>{
                                return <small className='item_content' key={documento}>{documento}</small>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="buttons_container">
                <img src={editIcon} width='50px' alt="" onClick={handleEdit}/>
                <img src={historyIcon} width='50px' alt="" />
                <img src={deleteIcon} width='50px' alt="" />
            </div>
        </li>
    )
}

export { AdquisicionItem }