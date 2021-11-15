//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OGAToken is ERC20 {
    constructor() ERC20("OG Ace", "OGA") {
        _mint(msg.sender, 100000 * (10 ** 18));
    }
}