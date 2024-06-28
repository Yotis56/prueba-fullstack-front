import { useOutlet } from 'react-router-dom'
import AdresLogo from '../assets/logo-adres.svg'

const Layout = () => {
    const outlet = useOutlet()
    return (
        <>
            <header>
                <img  className='logo' src={AdresLogo} alt="" />
                <div>
                    <h1 className='font-bold underline' >Aplicativo para la Gestion de Adquisiciones</h1>
                    <p>Mediante este Aplicativo usted podrá gestionar las solicitudes de adquisiciones para la ADRES</p>
                </div>
            </header>
            {outlet}
        </>
    )
}

export { Layout }