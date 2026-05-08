
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ContainerApp } from "../../components/ContainerApp/ContainerApp";
import { Footer } from "../../components/Footer/Footer";
import styles from "../criarTreino/CriarTreino.module.css";
import { Container } from './../../components/Container/Container';


export function CriarTreino () {

  const navigate = useNavigate()

  return (
    <>
      <div className={styles.container}>
        <ContainerApp></ContainerApp>
        <Container className={styles.content}>
          <h3 className={styles.h3}>QUAL TREINO GOSTARIA DE CRIAR</h3>
          <Button className={styles.button} onClick={() => navigate('/formTreinos')}>TREINO A</Button>
          <Button className={styles.button}>TREINO B</Button>
          <Button className={styles.button}>TREINO C</Button>
          <Button className={styles.button} onClick={() => navigate('/treinos')}>VOLTAR</Button>
        </Container>
        <Footer></Footer>
      </div>
    </>
  )
}