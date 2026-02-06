import './style.css'
import Navbar from '../../components/navbar/Navbar'
import Table from '../../components/table/Table'

export default function Main(){
    return(
        <div className="containerMain">
            <Navbar/>
            <Table/>
        </div>
    )
}