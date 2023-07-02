import { GameController, Barricade } from "@phosphor-icons/react";
import './projetos.css'

function Projetos() {
    return (
      <section className='projetos'>
        <h2>
          <GameController size={32} />
          {' '}
          Projetos
          {' '}
          <GameController size={32} />
        </h2>
        <div>
          <div className="projetosImg">
            <h3>
              Jogo da Velha
            </h3>
            <a href="https://danilobertolini.github.io/Jogo-da-Velha/">
              <img src="./jogodavelha.png" alt="jogo da velha" />
            </a>
          </div>
          <div className="projetosImg">
            <h3>
              Construção
              <Barricade size={32} />
            </h3>
          </div>
          <div className="projetosImg">
            <h3>
              Construção
              <Barricade size={32} />
            </h3>
          </div>
          {/* <h3>
            Intermediário
            <br></br>
            <Barricade size={32} />
          </h3>
          <h3>
            Avançado
            <br></br>
            <Barricade size={32} />
          </h3> */}
        </div>
      </section>
    )
}

export default Projetos;