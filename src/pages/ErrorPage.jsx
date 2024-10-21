import { Link } from "react-router-dom"

function ErrorPage (){
    return <div style={{backgroundColor: "gray", width: "100vw", height: "100vh", textAlign: "center", color: "white"}}>Você não deveria estar aqui em <br/>🤨<Link to="https://th.bing.com/th/id/R.e1b42f6e5bed8fdb0cfa3ca559572540?rik=f%2bRPqQKYopxtmw&pid=ImgRaw&r=0">Clica aqui para voltar</Link></div>
}

export default ErrorPage