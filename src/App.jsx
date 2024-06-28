import { useEffect, useState } from 'react'
import AdresLogo from './assets/logo-adres.svg'
import { Modal } from './components/Modal'
import { Adquisiciones } from './components/Adquisiciones'
import { AdquisicionItem } from './components/AdquisicionItem'
import './App.css'
import { EditarAdquisición } from './components/EditarAdquisicion'
// const dataFake = [
//   {
//     id: 1,
//     createdAt: '',
//     updatedAt: '',
//     presupuesto: 50000,
//     unidad: 'Dirección de medicamentos',
//     tipo: 'Medicamentos',
//     cantidad: 500, 
//     valorUnitario: 1000,
//     fechaAdquisición: '',
//     proveedor: 'Bayer',
//     documentacion: [
//       'orden de compra 2023-07-20-001',
//       'Factura 2023-07-20-001'
//     ]
//   },
//   {
//     id: 2,
//     createdAt: '22-06-2024',
//     updatedAt: '22-06-2024',
//     presupuesto: 50000,
//     unidad: 'Dirección de medicamentos',
//     tipo: 'Medicamentos',
//     cantidad: 500, 
//     valorUnitario: 1000,
//     fechaAdquisición: '',
//     proveedor: 'Bayer',
//     documentacion: [
//       'orden de compra 2023-07-20-001',
//       'Factura 2023-07-20-001'
//     ]
//   },
// ]

function App() {
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
        <header>
          <img  className='logo' src={AdresLogo} alt="" />
          <div>
            <h1 className='font-bold underline' >Aplicativo para la Gestion de Adquisiciones</h1>
            <p>mediante este aplicativo ud podrá gestionar los requerimientos de adquisiciones </p>
          </div>
        </header>
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
                {
                  data.map( item => {
                  return <AdquisicionItem key={item.id} adquisicion={item} setIsEdit={setIsEdit} setItemToEdit={setItemToEdit} setViewModal={setViewModal}/> })
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

export { App }
