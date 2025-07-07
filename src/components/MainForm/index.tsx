import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
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
        <p>Elit fuga velit optio aut</p>
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
