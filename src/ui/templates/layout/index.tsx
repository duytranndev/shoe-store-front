import AppRouting from '../../../share/routing'
import AppBar from '../../organisms/appbar'
import SideBar from '../../organisms/sidebar'

const AppLayout = (): JSX.Element => {
  return (
    //   header
    <div className='template'>
      <AppBar />
      <SideBar />
      <div className='container content'>
        <AppRouting />
      </div>
      <div className='footer'>
        <div className='container-footer'></div>
      </div>
    </div>
    //footer
  )
}
export default AppLayout
