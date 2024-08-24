pragma solidity ^0.8.0;

contract Fundraiser {
    function donate() external payable {
         //Ether is received and stored in the contract's balance;
         //10% of Ether received is sent to AngelNetCoin's value in address 0xEd70927F4E2Cdd3000cd20Db57fFe2E3e9683159 to be staked in the AngelNetCoin to add value to it for our nonprofits;
    }
}
>>Adding Value to AngelNetCoin with Ether
 "tocontract": () in wallet: "0xEd70927F4E2Cdd3000cd20Db57fFe2E3e9683159"
        "value": "0xb1a2bc2ec50000", // 1 ether
        "data": "0xd0e30db0" // deposit()
        //public return bool 
        "getAngelNetCoinContractAddress": "returnContractAddress" "forAngelNetCoin" ()
function deposit() payable external {
  //
  }
receive() external payable {
  // 
  //
  }
mapping(address => uint) balances:

function deposit() payable external {
     // deposit sizes are not restricted
     require(msg.value == () ether);
     // an address can deposit multiple times
     require(balances[msg.sender] == 0);
     balances[msg.sender] += msg.value;
  }
  





    
