import { createContext, ReactNode, useContext, useState } from 'react'

type AppProviderProps = {
  children: ReactNode
}

const AppContext = createContext<any>({} as any)

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openSidebar = () => {
    setIsSideBarOpen(true)
  }
  const closeSidebar = () => {
    console.log(isSideBarOpen)

    setIsSideBarOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSideBarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
      }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
