
import academiaMenor from "../../assets/academiaMenor.png";
import styles from '../ContainerApp/ContainerApp.module.css';

export function ContainerApp () {

  const data = new Date();

  const dataFormatada = () => {
    return data.toLocaleDateString('pt-br', {
      day : "numeric",
      month : "numeric",
      year : "numeric"
    })
  }
  
  const horarioFormatado = () => {
    return data.toLocaleTimeString('pt-br', {
      second : '2-digit',
      minute : '2-digit',
      hour : '2-digit'
    })
  }

  return(
    <>
    <div className={styles.container}>
          <h4 className={styles.h1}>{dataFormatada()}</h4>
          <h4 className={styles.h1}>{horarioFormatado()}</h4>
          <img src={academiaMenor} alt="foto"/>
          <h1 className={styles.h1}>BORA FIT</h1>
        </div>
    </>
  )
}