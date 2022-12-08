import styles from './App.module.css';
import logo from './logo.svg';
import {FaBars, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

function App() {

    return (
        <div className="App">
            <nav className={styles.nav}>
                <div className={styles.navHeader}>
                    <img src={logo} alt={"logo"} className={styles.logo}/>
                    <div className={styles.linksBar}>
                        <ul className={styles.linksBarList}>
                            <li className={styles.linkBarItem + " " + styles.active}><a href="#">Home</a></li>
                            <li className={styles.linkBarItem}><a href="#">About</a></li>
                            <li className={styles.linkBarItem}><a href="#">Projects</a></li>
                            <li className={styles.linkBarItem}><a href="#">Contact</a></li>
                            <li className={styles.linkBarItem}><a href="#">Profile</a></li>
                        </ul>
                    </div>
                    <div className={styles.socialLinks}>
                        <a className={styles.socialLinkItem} href="http://www.facebook.com"><FaFacebook/></a>
                        <a className={styles.socialLinkItem} href="http://www.twitter.com"><FaTwitter/></a>
                        <a className={styles.socialLinkItem} href="http://www.linkedin.com"><FaLinkedin/></a>
                    </div>
                    <button className={styles.btnMenu}>

                        <FaBars/>
                    </button>
                </div>
                <div className={styles.linkContainer}>
                    <ul className={styles.linkList}>
                        <li className={styles.linkItem}><a href="#">Home</a></li>
                        <li className={styles.linkItem}><a href="#">About</a></li>
                        <li className={styles.linkItem}><a href="#">Projects</a></li>
                        <li className={styles.linkItem}><a href="#">Contact</a></li>
                        <li className={styles.linkItem}><a href="#">Profile</a></li>
                    </ul>
                </div>

            </nav>

        </div>
    );
}

export default App;
