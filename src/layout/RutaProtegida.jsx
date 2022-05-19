import { Outlet, Navigate } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <main className="container mx-auto mt-10">
            <Outlet />
        </main>
    )
}

export default RutaProtegida