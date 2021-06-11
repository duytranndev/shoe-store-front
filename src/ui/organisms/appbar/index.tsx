import { FaBars, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../../components/context'

const AppBar = (): JSX.Element => {
  const { openSidebar } = useGlobalContext()
  return (
    <div className='header'>
      <ul className='nav'>
        <li className='btn'>
          <button onClick={openSidebar} className='sidebar-toggle'>
            <FaBars />
          </button>
        </li>
        <li>
          <FaHome />
          <Link to=''>Home</Link>
        </li>
        <li>
          <Link to=''>About</Link>
        </li>
        <li>
          <Link to=''>Shop</Link>
        </li>
      </ul>
    </div>
  )
}
export default AppBar
