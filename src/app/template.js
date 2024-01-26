"use client"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"
const Template = ({ children }) => {
  return (
    <>
      <ProgressBar
        height="5px"
        color={"linear-gradient(to right, #00b4db, #0083b0)"}
        options={{ showSpinner: false }}
      />
      {children}
    </>
  )
}

export default Template
