import {
  ILayoutRestorer, JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  IMainMenu
} from '@jupyterlab/mainmenu';



import '../style/index.css';


/**
 * Initialization data for the jupyterlab_warren extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_warren',
  autoStart: true,
  requires: [IMainMenu, ICommandPalette, ILayoutRestorer],

  activate: (app: JupyterLab, mainMenu: IMainMenu, palette: ICommandPalette, restorer: ILayoutRestorer) => {
    console.log('Jupyterlab_Warren layout stripdown!');

    // Get display currently active menus
    console.log(mainMenu);

    // Dispose of what we don't need
    mainMenu.editMenu.dispose();
    mainMenu.fileMenu.dispose();
    mainMenu.runMenu.dispose();
    mainMenu.kernelMenu.dispose();
    mainMenu.tabsMenu.dispose();
    mainMenu.settingsMenu.dispose();
    mainMenu.helpMenu.dispose();
    
    // Confirm the changes of mainMenu object are in effect
    console.log(mainMenu);

    
  }
};

export default extension;
