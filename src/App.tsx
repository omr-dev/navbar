import styles from './App.module.css';
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa';

function App() {

  return (
    <div className="App">
<nav className={styles.nav}>
    <div className={styles.navHeader}>
        <img src={logo} alt={"logo"} className={styles.logo}/>
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
  )
}

export default App
