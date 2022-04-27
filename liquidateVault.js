import { getOpenVaults, calcCollateralRatio, Account, Vault, VAULT_IDS} from '@xbacked-dao/xbacked-sdk';
import dotenv from 'dotenv';
dotenv.config();
const account = new Account({network: "TestNet", mnemonic: process.env.SEED_PHRASE});

//Select the vault you want to use
const algoToxUSDVault = new Vault({id: VAULT_IDS.TestNet.algo});


const availableVaults = await getOpenVaults({account: account,vault: algoToxUSDVault})

const vaultState = await account.getVaultState({vault: algoToxUSDVault})
console.log("CollateralPrice = ", vaultState.collateralPrice);


 for (let i = 0; i < availableVaults.length; i++){
    const currentVault = await algoToxUSDVault.getUserInfo({account: account, address: availableVaults[i]})

    if (currentVault.collateralRatio < vaultState.liquidationCollateralRatio && currentVault.liquidating ){

        await account.liquidateVault({address: availableVaultsi, debtAmount: 2 , vault: algoToxUSDVault})
        
        console.log("New Collateral Ratio = ", calcCollateralRatio(vaultInfo.collateral, vaultState.collateralPrice, vaultInfo.vaultDebt))

        console.log(vaultInfo)
        break;
    }
}