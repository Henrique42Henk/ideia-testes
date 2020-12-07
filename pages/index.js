import { useState} from 'react';

function Home(){

    return (
        <>
            <h1>Home</h1>
            <h2>Add</h2>
            <Contador />
        </>
    )
}

function Contador(){
    const [contador,setContador] = useState(1);

    function AdicionarContador(){
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>
        </div>

    )

}

export default Home