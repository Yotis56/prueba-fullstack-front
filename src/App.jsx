import AdresLogo from './assets/logo-adres.svg'
import './App.css'
const data = [
  {
    id: 1,
    createdAt: '',
    updatedAt: '',
    presupuesto: 50000,
    unidad: 'Dirección de medicamentos',
    tipo: 'Medicamentos',
    cantidad: 500, 
    valorUnitario: 1000,
    fechaAdquisición: '',
    proveedor: 'Bayer',
    documentacion: [
      'orden de compra 2023-07-20-001',
      'Factura 2023-07-20-001'
    ]
  },
  {
    id: 2,
    createdAt: '22-06-2024',
    updatedAt: '22-06-2024',
    presupuesto: 50000,
    unidad: 'Dirección de medicamentos',
    tipo: 'Medicamentos',
    cantidad: 500, 
    valorUnitario: 1000,
    fechaAdquisición: '',
    proveedor: 'Bayer',
    documentacion: [
      'orden de compra 2023-07-20-001',
      'Factura 2023-07-20-001'
    ]
  },
]

function App() {

  return (
    <div className="app-container">
      <header>
        <img  className='logo' src={AdresLogo} alt="" />
        <div>
          <h1 className='font-bold underline' >Aplicativo para la Gestion de Adquisiciones</h1>
          <p>mediante este aplicativo ud podrá gestionar los requerimientos de adquisiciones </p>
        </div>
      </header>
      <main className='border rounded border-slate-500'>
        <div className="control w-full">
          <div className="filtros">
            <label htmlFor="ordenar">Ordenar por</label>
            <select name="ordenar" id="ordenar">
              <option value="dateLow">Fecha (más reciente primero)</option>
              <option value="dateHigh">Fecha (más reciente último)</option>
              <option value="montoLow">Monto (mayor a menor)</option>
              <option value="montoHigh">Monto (menor a mayor)</option>
            </select>
          </div>
          <button className='agregar-btn'>Agregar adquisición</button>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>fecha de creación</th>
                <th>Bien o servicio</th>
                <th>Presupuesto</th>
                <th>Detalles</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-200'>
              {data.map( item => {
                return (
                  <tr key={item.id}>
                    <td>{item.createdAt}</td>
                    <td>{item.tipo}</td>
                    <td>{item.presupuesto}</td>
                    <td><a href="#">ver más...</a></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div> 
      </main>
    </div>
  )
}

export { App }
