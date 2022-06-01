import { Outlet, Navigate } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <main className="">
            <Outlet />
        </main>
    )
}

export default RutaProtegida