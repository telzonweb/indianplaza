import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SiteLogo from "./site-logo";
import MainNav from "./main-nav"
import { DarkModeSwitch } from "../dark-mode-switch"
import { mainNav } from "../../config/site"
import { cn } from "../../lib/utils"
import { MobileNav } from "./mobile-nav"

const Header = () => {
  const [stickyClass, setStickyClass] = useState("")

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)

    return () => {
      window.removeEventListener("scroll", stickyHeader)
    }
  }, [])

  const stickyHeader = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 10 ? setStickyClass("bg-white dark:bg-slate-900 lg:py-3 py-3") : setStickyClass("")
    }
  }

  return (
    <>
      <header className="fixed top-0 z-20 w-full">
        <div className={cn("flex items-center px-4 py-5 transition-all lg:py-12 xl:px-20", stickyClass)}>
          <Link to="/" className="mr-12 shrink-0">
            <SiteLogo
              width={123}
              height={39}
              lightClasses="w-4/5 dark:hidden lg:w-auto"
              darkClasses="hidden w-4/5 dark:block lg:w-auto"
            />
          </Link>

          <div className="relative flex w-full items-center justify-end lg:justify-start lg:bg-transparent">
            <MainNav items={mainNav} />
            <DarkModeSwitch />
            <MobileNav mainNavItems={mainNav} />

            <div className="hidden lg:ml-auto lg:inline-block">
              <a
                href="tel:63-995-3959"
                className="inline-block rounded-md bg-gradient-to-l from-primary to-tertiary px-4 py-2.5 text-center font-bold text-white"
              >
                <span className="block text-xxs">Call us for Free</span>
                <span className="text-md">63-995-3959</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
