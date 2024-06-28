/* eslint-disable react/prop-types */
import '../styles/HistorialItem.css'

const HistorialItem = ({item}) => {
    const fechaAdquisicion = new Date(item.fechaadquisicion)
    const fecha = fechaAdquisicion.toLocaleDateString('es-Co', {month: 'long' , day: 'numeric' ,year: 'numeric',  })
    return (
        <div className="adquisicion_container mx-8"> 
            <div className="fecha_container">
                <p className='fecha_title'>Fecha de modificación:</p>
                <p className='fecha_content'>Jueves, 25 de Noviembre de 2023. 12:45 </p>
            </div>
            <div className="info_container ml-8">
                <div className="item">
                    <span className='item_title'>Presupuesto</span>
                    <p className='item_content'>{item.presupuesto}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Unidad Encargada</span>
                    <p className='item_content'>{item.unidad}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Tipo de Elemento</span>
                    <p className='item_content'>{item.tipo}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Cantidad</span>
                    <p className='item_content'>{item.cantidad}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Unitario</span>
                    <p className='item_content'>{item.valorunitario}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Valor Total</span>
                    <p className='item_content'>{item.valorunitario * item.cantidad}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Fecha de Adquisición</span>
                    <p className='item_content'>{fecha}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Proveedor</span>
                    <p className='item_content'>{item.proveedor}</p>
                </div>
                <div className="item">
                    <span className='item_title'>Documentación</span>
                    <div className="">
                    {
                        item.documentacion.map( (documento, index) =>{
                            return <small className='item_content' key={index}>{documento}</small>
                        })
                    }
                    </div>
                </div> 

            </div>
        </div>
    )
}
export { HistorialItem }

{/* 
*/}