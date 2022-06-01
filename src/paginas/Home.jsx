import Navbar from "../components/Navbar";

import '../css/Home.css';

function Home() {

    document.body.style.backgroundColor = "#e1e1e1";
    document.body.style.backgroundImage = "none";

    return (
        
        <>
        <Navbar value={true}></Navbar>
        <div>Home</div>
        </>
    )
}

export default Home