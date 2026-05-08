import styles from "../Footer/Footer.module.css";

import { useNavigate } from 'react-router';

export function Footer () {
  const navigate = useNavigate();
  return(
    <>
      <div className={styles.container}>
      <a className={styles.content} href="" onClick={(e) => {e.preventDefault(); navigate("/sobreNos")}}>PROJETO BORA-FIT - SAIBA MAIS</a>
      </div>
    
    
    </>
  )
}