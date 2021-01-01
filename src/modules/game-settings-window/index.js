import { useSettingsSideMenu } from './state';
import SideMenu from './side-menu';
import CaretSetting from './caret';
import SettingsWindow from '../settings-window/layout';
import styles from './styles.module.scss';

const menuOptions = [
  {
    label: 'Caret'
  },
  {
    label: 'Theme/layout'
  }
];

const GameSettingsWindow = () => {
  const { selectedSettingIndex, setSelectedSettingIndex } = useSettingsSideMenu({ menuOptions });
  const currentSetting = menuOptions[selectedSettingIndex].label;

  return (
    <>
      <div className={styles.settingsWrapper}>
        <div className={styles.sideMenuWrapper}>
          {menuOptions.map((item, index) => (
            <SideMenu
              id={`side-tab-${index}`}
              item={item}
              selectedItem={currentSetting}
              key={index}
              onClick={() => setSelectedSettingIndex(index)}
            />
          ))}
        </div>
        {currentSetting === 'Caret' && <CaretSetting />}
        {currentSetting === 'Theme/layout' && <SettingsWindow />}
      </div>
    </>
  );
};

export default GameSettingsWindow;
