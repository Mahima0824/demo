import React from 'react'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const [lang, setLang] = React.useState('EN')

    const toggle = () => setOpen((v) => !v)
    const selectLang = (l) => {
        setLang(l)
        setOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className=" px-7 py-3 backdrop-blur-2xl md:py-5 bg-transparent">
                <div className="flex  items-center justify-between">
                    <div className="md:flex hidden items-center gap-8 text-xs tracking-widest">
                        <a href="#contact" className="text-[#f8f9fb] text-xs hover:text-white transition-colors">CONTACT</a>
                        <a href="#linkedin" className="text-[#f8f9fb] text-xs hover:text-white transition-colors">LINKEDIN</a>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <a href="/" className="text-white"><svg width="128" height="31" viewBox="0 0 128 31" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M25.6615 22.9553H3.92281L0.779297 30.1458H25.92C33.3985 30.1458 39.4615 24.0827 39.4615 16.6043V15.1199C39.4615 7.64145 33.3985 1.57843 25.92 1.57843H0.779297L3.92281 8.76642H25.6591C29.2334 8.76642 32.1307 11.6638 32.1307 15.2381V16.4837C32.1307 20.058 29.2334 22.9553 25.6591 22.9553" fill="currentColor"></path><path d="M65.1591 2.60493L62.6507 0.145752L60.1398 2.60493C52.4989 10.0932 46.682 19.6149 43.3096 30.1458H50.9037C53.5697 22.7756 57.5698 16.0209 62.6507 10.3591C67.7315 16.0209 71.7292 22.7756 74.3976 30.1458H81.9918C78.6193 19.6149 72.8025 10.0932 65.1615 2.60493" fill="currentColor"></path><path d="M118.63 1.58081C115.986 7.49367 112.357 12.924 107.897 17.5667C103.436 12.924 99.8055 7.49367 97.1617 1.58081H88.541V30.1457H95.7709V13.4804C98.5525 17.6972 101.819 21.5816 105.531 25.0033L107.897 27.1868L110.263 25.0033C113.96 21.5939 117.217 17.7242 119.991 13.5247V30.1432H127.221V1.58081H118.63Z" fill="currentColor"></path></svg></a>
                    </div>

                    <div className="md:relative md:block hidden w-24">
                        <button
                            type="button"
                            onClick={toggle}
                            aria-haspopup="menu"
                            aria-expanded={open}
                            className="flex flex-row justify-between items-center gap-4 rounded-[3px] bg-[rgba(248,249,251,0.1)] px-4 py-2 text-xs font-medium text-white/90 cursor-pointer w-full backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/15"
                        >
                            {lang}
                            <svg
                                width={12}
                                height={6}
                                viewBox="0 0 12 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transform transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                            >
                                <path d="M1 0.5L6 5.5L11 0.5" stroke="currentColor" strokeLinejoin="bevel" />
                            </svg>

                        </button>

                        {open && (
                            <div
                                role="menu"
                                className="absolute left-0 top-full mt-2 w-full origin-top-right rounded-md bg-neutral-900/90 backdrop-blur ring-1 ring-white/10 shadow-lg focus:outline-none z-50"
                            >
                                <ul className="py-1 text-sm text-gray-200">
                                    {['EN', 'ES', 'FR', 'DE'].map((l) => (
                                        <li key={l}>
                                            <button
                                                onClick={() => selectLang(l)}
                                                className="w-full text-left px-3 py-1.5 hover:bg-white/10"
                                            >
                                                {l}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar