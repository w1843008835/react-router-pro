import { Link,useNavigate } from "react-router-dom"


const Login = () =>{
    const navigate = useNavigate()
    return(
       <div>
         i am login
         {/*申明式写法*/}
            <Link to='/article'>to article</Link>
             {/*命令式写法*/}
            <button onClick={()=>navigate('/article')}>to article</button>
            <button onClick={()=>navigate('/article?id=111&name=jack')}>passParameter</button>
            <button onClick={()=>navigate('/article/1111/tom')}>params</button>
        </div>
    )
}
export default Login