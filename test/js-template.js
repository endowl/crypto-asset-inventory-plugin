import CryptoAssetInventoryForm from '../templates/CryptoAssetInventory.template.js'
import data from './test-data.json'
import {set} from "backtickify/dataStore"

set(data)

const filled = CryptoAssetInventoryForm(data)

console.log(filled)