import { FaFacebookF, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className=" flex min-h-20 items-center bg-slate-200 p-5 ">
      <div className="container mx-auto flex h-full max-w-7xl flex-col items-center justify-between gap-3 md:flex-row">
        <div className="mx-auto flex-grow">
          <p className="h2">markertplace.</p>
        </div>
        <div className="flex items-center gap-2">
          <FaFacebookF className="footer-icons" />
          <FaTwitter className="footer-icons" />
          <FaDiscord className="footer-icons" />
          <FaInstagram className="footer-icons" />
        </div>
      </div>
    </footer>
  )
}
export default Footer
