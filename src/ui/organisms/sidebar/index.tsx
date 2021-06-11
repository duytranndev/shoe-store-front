import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../../components/context'
import Image from '../../atoms/image'
import { links } from './data'
import logo from './logo.svg'

const SideBar = (): JSX.Element => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext()
  console.log(`isSideBarOpen`, isSideBarOpen)
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <Image src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSidebar} color='red' style={{ float: 'right' }}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default SideBar
