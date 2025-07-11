import { useState } from 'react';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import './styles/global.css';
import './styles/theme.css';
import type { TaskStateModel } from './models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {

  return <Home />;
}
