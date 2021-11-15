require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv').config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// const result = dotenv.config();

// if (result.error) {
//   throw result.error;
// }

// console.log(result.parsed);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/b83ea6c96ae34a6f944fd855a1813266',
      accounts: [`0x${process.env.REACT_APP_ACCOUNT_KEY}`],
    },
  },
};
