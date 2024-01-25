"use client"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/components/Providers/AuthProvider"

const Navbar = () => {
  const { user } = useAuth()
  return (
    <nav className="container mx-auto flex h-20 w-full max-w-7xl items-center justify-between p-5">
      <div className="p-5">
        <h1 className="h1">Marketplace.</h1>
      </div>

      {user ? <Button>account</Button> : <Button>connect wallet</Button>}
    </nav>
  )
}

export default Navbar
