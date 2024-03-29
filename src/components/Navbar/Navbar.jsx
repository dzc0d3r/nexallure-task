"use client"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/components/Providers/AuthProvider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { WalletSheet } from "@/components/Wallet"

const Navbar = () => {
  const pathname = usePathname()

  const { user } = useAuth()
  return (
    <nav
      className={` sticky top-0 z-40 min-h-20 w-full items-center p-3 md:p-5 ${pathname == "/wallet" ? "bg-slate-200" : "bg-white"}`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between">
        <div className="p-5">
          <h1 className="h1">
            <Link href="/">Marketplace.</Link>
          </h1>
        </div>

        {user ? (
          <Sheet close={false}>
            <SheetTrigger>
              <Button variant="primary">account</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <WalletSheet />
            </SheetContent>
          </Sheet>
        ) : (
          <Link href="wallet">
            <Button>connect wallet</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
