import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export function App(){
  return (
    <>
      <Header/>
      <Main>
            <h3>Conteúdo</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam perspiciatis, ullam reprehenderit voluptates voluptatem, assumenda quibusdam, earum soluta nesciunt iusto autem odit libero perferendis doloribus enim beatae iure vel quasi.</p> 
      </Main>
      <Footer autor="Lauber" ano="2024"></Footer>
    </>
  )
}

