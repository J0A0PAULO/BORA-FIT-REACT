import logoImage from "../../assets/academia.png"
import { Container } from "../../components/Container/Container"
import styles from "../home/Home.module.css"
export function Home () {
  return (
    <>
   <Container>
    <div className={styles.contentLogo}>
    <Container>
      <img src={logoImage} alt="logo" />
    </Container>
    </div>
   </Container>
    </>
  )
}