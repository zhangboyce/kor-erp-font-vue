import getEasyUIComboboxData from './getEasyUIComboboxData'
import comboBoxYear from './comboBoxYear'
import comboBoxSeason from './comboBoxSeason'
import listCurrentInventory from './listCurrentInventory'
import listNotification from './listNotification'
import contract from './contract'

import wrapper from './wrapper';
const mock = wrapper();

export default function () {
    console.log('[mock] init.');
    mock(/\/api\/GetEasyUIComboboxData(\?.*)?/, getEasyUIComboboxData);
    mock(/\/api\/combobox\/year(\?.*)?/, comboBoxYear);
    mock(/\/api\/combobox\/season(\?.*)?/, comboBoxSeason);
    mock(/\/api\/currentInventory\/list(\?.*)?/, listCurrentInventory);
    mock(/\/api\/notification\/list(\?.*)?/, listNotification);
    mock(/\/api\/contract\/list(\?.*)?/, contract.list);
    mock(/\/api\/contract\/add(\?.*)?/, 'post', contract.add);
    mock(/\/api\/contract\/edit(\?.*)?/, 'post', contract.edit);
    mock(/\/api\/contract\/delete(\?.*)?/, 'post', contract.delete);
};
