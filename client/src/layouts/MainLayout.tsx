import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='layout'>
      <nav className='nav-bar'>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-wilder" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"} >Nouveau wilder</NavLink>
          </li>
          <li>
            <NavLink to="/scores" className={({ isActive }) => isActive ? "nav-active nav-link" : "nav-link"} >Evaluations</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default MainLayout