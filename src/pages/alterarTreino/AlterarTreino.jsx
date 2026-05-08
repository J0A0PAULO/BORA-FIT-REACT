
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { ContainerApp } from "../../components/ContainerApp/ContainerApp";
import { Footer } from "../../components/Footer/Footer";
import styles from "../alterarTreino/AlterarTreino.module.css";


export function AlterarTreino () {
  return (
    <>
      <div className={styles.container}>
        <ContainerApp></ContainerApp>
            <Container className={styles.containerInput}>
              <h3>ALTERAR TREINO</h3>
            <input type="text" placeholder="DIGITE SEU EXERCICIO " className={styles.input}/>
            <input type="text" placeholder="DIGITE  RETICAO EXEMPOLO 4X10"  className={styles.input}/>
            <input type="text" placeholder="DIGITE TEMO DE PAUSA EXEMPLO  30"  className={styles.input}/>
            <Button className={styles.button}>ALTERAR</Button>
          </Container>
        <Footer></Footer>
      </div>
    </>
  )
}