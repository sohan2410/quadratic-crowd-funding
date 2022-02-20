<h1 align="center">Welcome to Qrowd Lab 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>
# Team Members
👤 **Sohan Bandary, Swahim Namdev**

### Sohan Bandary (2020IMG-016)
* Github: [@sohan2410](https://github.com/sohan2410)
* LinkedIn: [@sohan-bandary](https://linkedin.com/in/sohan-bandary)
* Gmail: [mail](mailto:bandarysohan24@gmail.com)
* Instagram: [@sohan24.py](https://www.instagram.com/sohan24.py/)

### Swahim Namdev (2020IMG-063)
* Github: [@swahim](https://github.com/swahim)
* LinkedIn: [@swahimnamdev](https://www.linkedin.com/in/swahimnamdev/)
* Gmail: [mail](mailto:swahimn@gmail.com)
* Instagram: [@swahim_n](https://www.instagram.com/swahim_n/)

# Project Description
> Quadratic Crowd Funding Platform

* QrowdLab is a Quadratic CrowdFunding Platform, a decentralized platform that enables community funding for projects. 
* Through Quadratic Funding, we give the community the power to take the best project forward!  A matching pool is raised by sponsors and then a crowdfunding campaign is matched according to the QF algorithm.
* Here, the number of contributors matters more than the amount funded which creates more democracy in public goods/projects funding decisions.

# Features Implemented

# Technologies/Libraries/Packages Used
| Packages | README |
| ------ | ------ |
|Solidity| For writing smart contracts |
|Truffle| To develop DApps |
| Web3 | To interact with an Ethereum node  |
|Ganache| Setting up a personal Ethereum Blockchain for testing Solidity contracts|
|React| To develop front-end application |
|Redux| To store the state centrally |
|Cloudinary| For storing images |
|Bootstrap| CSS Framework |
|MUI| CSS Framework |
# Thought Behind The Project
We aim to provide a trustful and transparent platform for crowdfunding projects that needs financial help using blockchain technology. Also, we help sponsors put their money rightly using a quadratic crowdfunding system. A greater ratio of sponsors' money is given to projects that have received more contributions from people and not just more amount from few people. Thus, we think of bringing the best projects forward.
# Instruction for local setup
1. [Clone the repository](https://github.com/sohan2410/aasf-website-backend.git)
```sh
git clone https://github.com/sohan2410/aasf-website-backend.git
```
2. Install truffle package globally
```sh
npm install -g truffle
```
3. Deploy contract
```sh
cd blockchain && truffle migrate
```
Note that Ganache should be open
4. Copy and paste blockchain/build/contracts/Sponsors.json in client/src/contracts
5. Install the front-end packages
```sh
cd client && npm i
```
6. Run front-end in development mode
```sh
npm start
```

## Test it
Run the mocha unit test
```sh
cd blockchain && truffle test
```



### Built With
React Redux Solidity
## Show your support

Give a ⭐️ if this project helped you!
