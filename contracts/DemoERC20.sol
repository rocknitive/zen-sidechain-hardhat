//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DemoERC20 is ERC20 {
    constructor() ERC20("Demo Token", "DEMO"){
        _mint(msg.sender, 10e18);
    }
}
