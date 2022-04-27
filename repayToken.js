import { Account, Vault, VAULT_IDS} from '@xbacked-dao/xbacked-sdk';
import dotenv from 'dotenv';
dotenv.config();
const account = new Account({network: "TestNet", mnemonic: process.env.SEED_PHRASE});

//Select the vault you want to use
const algoToxUSDVault = new Vault({id: VAULT_IDS.TestNet.algo});

const isxUSDReturned = await account.returnVaultDebt({
    amount: 50,
    vault: algoToxUSDVault
});
