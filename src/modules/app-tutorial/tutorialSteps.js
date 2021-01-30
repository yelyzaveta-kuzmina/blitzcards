import startPage from '../../assets/images/tutorial/start-page.gif';
import settingsCaret from '../../assets/images/tutorial/settings-page.gif';
import preGame from '../../assets/images/tutorial/pre-game.gif';
import gameMenu from '../../assets/images/tutorial/game-menu.gif';
import game from '../../assets/images/tutorial/game.gif';

const tutorialSteps = [
  {
    title: 'Start page',
    description:
      'Here is a start page where where the whole journey starts - just click a button in the middle. Besides that you can see a thunder on the top left corner that can bring you to a start page does not matter where you are. On the right top corner you find settings.',
    pics: [startPage]
  },
  {
    title: 'Settings page',
    description:
      'In settings you can play a little bit with the layout - just use your creativity :)',
    pics: [settingsCaret]
  },
  {
    title: 'Add new language/category/word',
    description:
      'It is a road you need to go through to start playing. The algorithm and needed actions are very simple. Do you know already what language you wanna learn? Then just create a container that will keep all words you want to remember which calls "category", but in the end it can be named however you wish.',
    pics: [preGame]
  },
  {
    title: 'Game menu',
    description:
      'Once you have at least one word in your category container you can start a game. You can manage the category by adding and removing words, also you can select a desired direction of translation during the game.',
    pics: [gameMenu]
  },
  {
    title: 'Game',
    description:
      'And let the game begin! Good luck with the expansion of vocabulary. When the game finished you will see how many points you have got and how quick you were. Not satisfied with results - give it another try :)',
    pics: [game]
  }
];

export default tutorialSteps;
