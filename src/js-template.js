import CryptoAssetInventoryForm from '../templates/CryptoAssetInventory.template.js'
import data from '../unprocessed-data.json'

const filled = CryptoAssetInventoryForm(data)

console.log(filled)