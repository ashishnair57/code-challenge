// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface ERC20Interface {
    function balanceOf(address account) external view returns (uint);
}

contract TokenBalance {
    struct Balance {
       address token;
       uint256 balance;
    }

    function getBalances(address walletAddress, address[] memory tokenAddress) public view returns(Balance[] memory) {
      Balance[] memory amount = new Balance[](tokenAddress.length);

      for(uint256 i = 0; i < tokenAddress.length; i++){
         address token = tokenAddress[i];
         uint256 balance = ERC20Interface(token).balanceOf(address(walletAddress));
         amount[i] = Balance(token, balance);
      }

      return amount;
    }
}