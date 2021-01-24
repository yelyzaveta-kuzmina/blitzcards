import startPage from '../../assets/images/tutorial/start-page.png';
import settingsCarret from '../../assets/images/tutorial/settings-carret.png';
import settingsLayout from '../../assets/images/tutorial/settings-layout.png';
import preGame from '../../assets/images/tutorial/pre-game.png';
import gameMode from '../../assets/images/tutorial/game-mode.png';

const tutorialSteps = [
  {
    title: 'Start page',
    description: 'Here is a start page where you can ... blah blah',
    pics: [startPage]
  },
  {
    settingsPage: 'Settings page',
    description: 'Here is a Settings page where you can ... blah blah',
    pics: [settingsCarret, settingsLayout]
  },
  {
    settingsPage: 'Add new language/category/word',
    description: 'Here you can add ... blah blah',
    pics: [preGame]
  },
  {
    settingsPage: 'Pre-game menu',
    description: 'Here you can add/manage ... blah blah',
    pics: [preGame]
  },
  {
    settingsPage: 'Game itself',
    description: 'Here you can play ... blah blah',
    pics: [gameMode]
  },
  {
    settingsPage: 'Important info',
    description: 'All data is stored in local storage, if cleaning you will loose it',
    pics: ['somePicImport']
  }
];

export default tutorialSteps;
