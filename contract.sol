// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UniqueCryptocurrency {
    mapping(address => uint256) private balances;

    event TokensMoved(address indexed from, address indexed to, uint256 amount);

    function addTokens(uint256 amount) public {
        balances[msg.sender] += amount;
        emit TokensMoved(address(0), msg.sender, amount);
    }

    function removeTokens(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Not enough tokens");
        balances[msg.sender] -= amount;
        emit TokensMoved(msg.sender, address(0), amount);
    }

    function checkBalance(address account) public view returns (uint256) {
        return balances[account];
    }
}
