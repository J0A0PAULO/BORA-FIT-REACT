
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
          </Container>
        <Footer></Footer>
      </div>
    </>
  )
}