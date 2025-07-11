import { Container } from '../../components/Container';
import { Countdown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

export type homeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home(props: homeProps) {

  return (
    <>
      <MainTemplate>
        <Container>
          <Countdown {...props} />
        </Container>
        <Container>
          <MainForm {...props} />
        </Container>
      </MainTemplate>
    </>
  );
}
