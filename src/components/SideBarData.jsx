import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as TbIcons from "react-icons/tb";

const SideBarData = [
    {
        title: 'Clientes',
        path: '/',
        icon: <FaIcons.FaUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Ingreso',
        path: '/',
        icon: <GiIcons.GiNotebook />,
        cName: 'nav-text'
    },
    {
        title: 'Cotización',
        path: '/',
        icon: <FaIcons.FaFileInvoiceDollar />,
        cName: 'nav-text'
    },
    {
        title: 'Facturación',
        path: '/',
        icon: <FaIcons.FaDollarSign />,
        cName: 'nav-text'
    },
    {
        title: 'Herramientas',
        path: '/',
        icon: <FaIcons.FaTools />,
        cName: 'nav-text'
    },
    {
        title: 'Informe',
        path: '/',
        icon: <TbIcons.TbReport />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    }
]

export default SideBarData;