"use client"

import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [openWallet, setOpenWallet] = useState(false)
  const [nfts, setNfts] = useState([])
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        openWallet,
        setOpenWallet,
        nfts,
        setNfts,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
