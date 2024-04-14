// import './styles.css'

// function Footer() {
//     return (
//         <footer className="footer">
//             <p>© 2024 My Portfolio. All rights reserved.</p>
//         </footer>
//     );
// }

// export default Footer;


import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './styles.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/DaneLarsen1" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/dane-larsen-7975042ab" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://twitter.com/fuduebsudjbd" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
            </div>
            <p>© 2024 My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;

