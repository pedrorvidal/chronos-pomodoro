import { Container } from '../../components/Container';
import { Countdown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { MainTemplate } from '../../templates/MainTemplate';

type homeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home(props: homeProps) {
  console.log(props);
  return (
    <>
      <MainTemplate>
        <Container>
          <Countdown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}
