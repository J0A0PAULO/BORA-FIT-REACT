import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ContainerApp } from "../../components/ContainerApp/ContainerApp";
import { Footer } from "../../components/Footer/Footer";
import styles from '../treinos/Treinos.module.css';
import { Container } from './../../components/Container/Container';


export function Treinos () {
  const navigate = useNavigate();
  
  return (
    <>
      <div className={styles.container}>
        <ContainerApp></ContainerApp>
        <div className={styles.row2}>
        <Container className={styles.content}>
            <h3 className={styles.h3}>ESCOLHA SEU TREINO</h3>
          <Button className={styles.button} onClick={() => navigate('/criarTreino')} >Crie seu Treino</Button>
          <Button className={styles.button} onClick={() => navigate('/treinoA')}>TREINO A</Button>
          <Button className={styles.button} onClick={()=> navigate('/treinoB')} >TREINO B </Button>
          <Button className={styles.button} onClick={()=> navigate('./treinoC')}>TREINO C </Button>
          
        </Container>
          </div>
      
        <Footer></Footer>
      </div>
    </>
  )
}