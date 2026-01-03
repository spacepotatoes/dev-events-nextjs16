'use client'
import Link from "next/link"
import Image from "next/image";
import posthog from "posthog-js";

const NavBar = () => {
  const handleLogoClick = () => {
    posthog.capture('logo_clicked', {
      nav_element: 'logo',
    });
  };

  const handleNavClick = (navItem: string) => {
    posthog.capture(`nav_${navItem.toLowerCase().replace(' ', '_')}_clicked`, {
      nav_element: navItem,
    });
  };

  return (
    <header>
        <nav>
            <Link href="/" className="logo" onClick={handleLogoClick}>
                <Image src="/icons/logo.png" alt="logo" width={24} height={24}></Image>
                <p>DevEvent</p>
            </Link>
            <ul>
                <Link href="/" onClick={() => handleNavClick('home')}>Home</Link>
                <Link href="/" onClick={() => handleNavClick('events')}>Events</Link>
                <Link href="/" onClick={() => handleNavClick('create_events')}>Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar