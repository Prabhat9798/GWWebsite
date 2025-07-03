import React, { useState } from 'react';
import logo from "../../assets/Navbar/logo.png"
// import PopupForm from '../Hero/PopupForm';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [showForm, setShowForm] = useState(false);
    
    const Navlinks = [
        { id: 1, links: "Home", targetId: "home" },
        { id: 2, links: "Features", targetId: "features" },
        { id: 3, links: "Services", targetId: "services" },
        { id: 4, links: "Reviews", targetId: "reviews" }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const handleDemoClick = () => {
        setShowForm(true);
        setIsMenuOpen(false); // Close mobile menu if open
    };

    return (
        <>
            <nav className='min-h-[85px] flex items-center justify-center w-full bg-white lg:px-16 sticky top-0 z-50'>
                <div className='container mx-auto px-6 sm:px-6 lg:px-8 py-2'>
                    {/* Main Navbar Content */}
                    <div className='flex items-center justify-between'>
                        {/* Logo Section */}
                        <div className="cursor-pointer " onClick={() => scrollToSection('home')}>
                            <img 
                                src={logo} 
                                alt="Logo" 
                                className='w-48 h-16 object-cover' // Adjusted dimensions
                            />
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center lg:justify-center gap-8">
                            <ul className='flex gap-6'>
                                {Navlinks.map((link) => (
                                    <li 
                                        key={link.id} 
                                        className={`cursor-pointer font-medium relative group ${activeLink === link.targetId ? 'text-orange-600' : 'text-black'}`}
                                        onClick={() => {
                                            scrollToSection(link.targetId);
                                            setActiveLink(link.targetId);
                                        }}
                                        onMouseEnter={() => setActiveLink(link.targetId)}
                                        onMouseLeave={() => setActiveLink(null)}
                                    >
                                        {link.links}
                                        <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full ${activeLink === link.targetId ? 'w-full' : ''}`}></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='hidden lg:flex items-center lg:justify-center gap-8'>
                            <button 
                                onClick={handleDemoClick}
                                className='px-6 py-2 text-white rounded-lg hover:opacity-90 transition-colors' 
                                style={{
                                    background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                                    borderRadius: "10px 0 10px 0",
                                }}
                            >
                                Call for Demo
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className='lg:hidden p-2 focus:outline-none'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className='lg:hidden bg-yellow-100 p-4 mt-2 rounded-lg'>
                            <ul className='flex flex-col gap-4'>
                                {Navlinks.map((link) => (
                                    <li 
                                        key={link.id}
                                        className={`cursor-pointer font-medium p-2 ${activeLink === link.targetId ? 'text-blue-600' : 'text-black'}`}
                                        onClick={() => {
                                            scrollToSection(link.targetId);
                                            setActiveLink(link.targetId);
                                        }}
                                    >
                                        {link.links}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                onClick={handleDemoClick}
                                className='mt-4 px-6 py-2 text-white rounded-lg w-full hover:opacity-90'
                                style={{
                                    background: "linear-gradient(91.44deg, #FF9422 17.06%, #D63715 52.08%)",
                                    borderRadius: "10px 0 10px 0",
                                }}
                            >
                                Call for Demo
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Popup Form */}
            {/* <PopupForm isOpen={showForm} onClose={() => setShowForm(false)} /> */}
        </>
    );
};

export default Navbar;