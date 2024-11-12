 pragma solidity^0.4.17;

 contract communityChest{
       function withdraw()public{
            msg.sender.transfer(ownerAddressOnly(0xEd70927F4E2Cdd3000cd20Db57fFe2E3e9683159).balance);
            }
            function deposit(uint256 amount) payable public {
                require(msg.value==amount);
                }
                function getBalance() public view returns (uint256) {
                    return address((0xEd70927F4E2Cdd3000cd20Db57fFe2E3e9683159).balance;
                    }
                }
