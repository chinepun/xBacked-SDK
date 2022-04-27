import { Account, Vault, VAULT_IDS} from '@xbacked-dao/xbacked-sdk';
import dotenv from 'dotenv';
dotenv.config();

const account = new Account({network: "TestNet", mnemonic: process.env.SEED_PHRASE});

//Select the vault you want to use
const algoToxUSDVault = new Vault({id: VAULT_IDS.TestNet.algo});
console.log("Address = ", await account.getAddress());

const vaultInfo = await account.getUserInfo({
    vault: algoToxUSDVault,
    address: await account.getAddress()
});
console.log(vaultInfo)

if (!vaultInfo.vaultFound){

//Let's opt into the xUSD asset
    const xUSD = 62281549;
    await account.optIntoToken(xUSD);

    const isVaultCreated = await account.createVault({
        collateral: 180,
        mintAmount: 105,
        vault: algoToxUSDVault
    });
        if (!vaultInfo.vaultFound){

//Let's opt into the xUSD asset
    const xUSD = 62281549;
    await account.optIntoToken(xUSD);

    const isVaultCreated = await account.createVault({
        collateral: 180,
        mintAmount: 105,
        vault: algoToxUSDVault
    });
        
}

}

const vaultState = await algoToxUSDVault.getState({account: account})
console.log(vaultState)
