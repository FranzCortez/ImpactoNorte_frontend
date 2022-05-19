import { useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Login = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ alerta, setAlerta ] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if([email, password].includes('')){
            setAlerta({
                msg: 'Correo y/o Contraseña invalidos',
                error: true
            });
            return;
        }

        try {

            const { data } = await clienteAxios.post('/usuario/login', {email, password});

            localStorage.setItem('token', data.token);
            
            
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    } 

    const { msg } = alerta;

    return (


        <>

            <div className="logo"></div>


            <div className="bg-zinc-200 rounded lg:m-auto ml-10 mr-10 h-auto p-5 shadow-md shadow-gray-600 lg:max-w-2xl lg:h-96 lg:grid lg:items-center">

                { msg && <Alerta alerta={alerta} />} 

                <form className="" onSubmit={handleSubmit}>
                    <div className="grid justify-items-center items-center md:justify-items-start md:justify-around lg:gap-3">
                        <label htmlFor="correo" className='uppercase text-gray-600 block text-xl font-bold'>Correo:</label>
                        <input type="email" id="correo" placeholder="Su Correo" 
                            className='border w-11/12 p-3 bg-gray-50 rounded-xl row-start-2 col-span-2'
                            value={email} onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="grid justify-items-center items-center md:justify-items-start md:justify-around lg:mt-5 lg:gap-3">
                        <label htmlFor="password" className='uppercase text-gray-600 block text-xl font-bold'>Contraseña</label>
                        <input type="password" id="password" placeholder="Su Contraseña"
                            className='border w-11/12 p-3 bg-gray-50 rounded-xl row-start-2 col-span-2'
                            value={password} onChange={e => setPassword(e.target.value)}    
                        />
                    </div>

                    <div className="flex justify-center">
                        <input type="submit" value="Iniciar Sesión" 
                            className="p-5 m-5 bg-slate-500 rounded-md text-white uppercase font-bold text-xl hover:bg-slate-600 cursor-pointer"
                        />
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Login