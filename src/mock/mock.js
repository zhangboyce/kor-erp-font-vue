import getEasyUIComboboxData from './getEasyUIComboboxData'
import listCurrentInventory from './listCurrentInventory'
import listNotification from './listNotification'

import wrapper from './wrapper';
const mock = wrapper();

export default function () {
    console.log('[mock] init.');
    mock(/\/api\/GetEasyUIComboboxData(\?.*)?/, getEasyUIComboboxData);
    mock(/\/api\/currentInventory\/list(\?.*)?/, listCurrentInventory);
    mock(/\/api\/notification\/list(\?.*)?/, listNotification);
};
