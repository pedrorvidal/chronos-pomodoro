import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <div>
      <Heading>
        Olá mundo from app 1
        <button>
          <TimerIcon size={24} />
        </button>
      </Heading>
      <Heading>Olá mundo from app 2</Heading>
      <Heading>Olá mundo from app 3</Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
        pariatur temporibus eius libero reprehenderit iure dolorum nihil facilis
        quas praesentium in obcaecati sequi illo. Ipsum cumque incidunt aliquam
        eveniet dolore.
      </p>
    </div>
  );
}
