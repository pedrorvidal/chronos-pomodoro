import { Container } from './components/Container';
import { Countdown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formrow">
            <label htmlFor="input">Task</label>
            <input type="text" name="" id="input" />
          </div>

          <div className="formrow">
            <p>Elit fuga velit optio aut</p>
          </div>

          <div className="formrow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <div className="formrow">
            <button>Enviar</button>
          </div>

        </form>
      </Container>
    </>
  );
}
