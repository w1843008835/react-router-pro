import { Outlet,Link } from "react-router-dom"

const Layout = () =>{
    return (
    <div>
        layout
        <Link to='/'>board</Link>
        <Link to='/about'>about</Link>
        {/**二级路由出口 */}
        <Outlet/>

    </div>)
}

export default Layout