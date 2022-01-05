import './Agregar.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Agregar = () => {
    let producto = {}
    let [nombre, setNombre] = useState("")
    let [cantidad, setCantidad] = useState()
    let [precio, setPrecio] = useState()

    producto = {id: uuidv4(), nombre: nombre, cantidad: cantidad, precio: precio}

    //Lo guardo en local Storage
    const guardarDatos = (e) => {
        e.preventDefault()
        localStorage.setItem("producto", JSON.stringify(producto))
        setNombre("")
        setCantidad("")
        setPrecio("")
    }
    
    return (
        <div className='container mt-4'>
            <h2>Agregar producto</h2>

            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Cantidad</label>
                    <input type="number" className="form-control" onChange={(e) => setCantidad(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <input type="number" className="form-control" onChange={(e) => setPrecio(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={guardarDatos}>Guardar</button>
            </form>
        </div>
    );
}
 
export default Agregar;