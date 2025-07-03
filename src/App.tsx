import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Countdown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/global.css';
import './styles/theme.css';
import { Footer } from './components/Footer';

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
            <DefaultInput
              labelText={'Task'}
              placeholder="Digite algo"
              type="text"
              id="meuId"
              name="testeName"
            />
          </div>

          <div className="formrow">
            <p>Elit fuga velit optio aut</p>
          </div>

          <div className="formrow">
            <Cycles />
          </div>

          <div className="formrow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>

          <div className="formrow">
            <Footer />
          </div>
        </form>
      </Container>
    </>
  );
}
