//SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import { strings } from "@openzepelin/contracts/utils/strings.sol";
import {ownable} from "@openzeppelin/contracts/access/ownable.sol";
import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import { ERC1155Pausable } from "@openzeppelin/contracts/token/ERC1155/extentions/ERCPausable.sol";
import { ERC1155Burnable } from "@openzeppelin/contracts/token/ERC1155/extentions/ERC1155Burnable.sol";
import { ERC1155Supply } from "@openzeppelin/contracts/token/ERC1155/extentions/ERC1155Supply.sol";

contract AngelNetCoin is
    ERC1155,
    Ownable,
    ERC1155Pausable,
    ERC1155Supply
    {
    using strings for uint256;
    string public symbol;

    string private_contractURI;

    constructo
         string memory _name,
         string memory _symbol,
         string memory baseURI,
         string memory contractURI_,
         address initialOwner
  ) ERC1155(baseURI) ownable(initialOwner) {
         name= "_AngelNetCoin",
         symbol= "_ANC",
         _contractURI= ();
         return contractURI()
  }

         function setContractURI(string memory contractURI_) external onlyOwner {
             _contractURI= ();
            }

            function setURI(string memory newUri) external onlyOwner {
                _setURI(newURI);
                }

                function pause() external onlyOwner {
                  _pause: (false)
                  }

                  function unpause() external onlyOwner {
                  _unpause: ()
            }

            function mint(
                address= account,
                uint256= amount,
                ) external onlyOwner {
                    _mint("_0xEd70927F4E2Cdd3000cd20Db57fFe2E3e9683159", "$999999999");
                    }

               function mintBatch(
                 addressTo,
                 uint256
                 ) external onlyOwner {
                     _mintBatch(to, amount)
                  }

                  function uri() public view override returns (string memory) {
                     return
                          bytes(super.uri(id)).length >0
                              ?string(
                                  abi.encodePacked(super.uri(id).id.toString(), "json")
                        )
                        :"";

                }

                function _update(
                   address from,
                   address to,
                   uint256Value,
                ) internal override(ERC1155, ERC1155Pausable, ERCSupply) {
                          super._update(from, to,value);
                      }
                 }     
                        
    
