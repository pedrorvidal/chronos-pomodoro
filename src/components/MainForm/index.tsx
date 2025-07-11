import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import type { homeProps } from '../../pages/Home';


export function MainForm({ state }: homeProps) {
  return (
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
        <p>Próximo intervalo: {state.config.workTime}min</p>
      </div>

      <div className="formrow">
        <Cycles />
      </div>

      <div className="formrow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
