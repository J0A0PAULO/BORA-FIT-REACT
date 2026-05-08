import { useNavigate } from "react-router";
import logoImage from "../../assets/academia.png";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Footer } from "../../components/Footer/Footer";
import styles from "../home/Home.module.css";
export function Home () {

  const navigate = useNavigate();

  return (
    <>
    <div className={styles.container}>
    <Container>
       <div className={styles.contentLogo}>
      <img src={logoImage} alt="logo" />
      <h2 className={styles.h2}>BORA FIT</h2>
    </div>
    </Container>

      <Container className={styles.animacao}>
      <Button className={styles.button} onClick={() => navigate("/treinos")}>Bem Vindo</Button>
    </Container>

    <Container>
         <Footer></Footer>
    </Container>   
    </div>
    </>
  )
}