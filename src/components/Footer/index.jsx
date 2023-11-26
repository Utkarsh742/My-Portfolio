import Link from 'next/link';
import './Footer.css';
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <span>
                <div className="social">

                    <Link href="https://www.instagram.com/ut_dwivedi/" target='_blank'><FaInstagram aria-hidden="true" className='fa'/></Link>
                    <Link href="https://www.linkedin.com/in/utkarshdwivedi742/" target='_blank'><FaLinkedin aria-hidden="true" className='fa'/></Link>
                    <Link href="https://github.com/Utkarsh742" target='_blank'><FaGithub aria-hidden="true" className='fa'/></Link>
                </div>
            </span>

            <span>Created By <a>Utkarsh Dwivedi</a></span>
        </footer>
    );
};

export default Footer;
