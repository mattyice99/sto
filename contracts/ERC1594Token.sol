pragma solidity ^0.4.24;

import "./ERC1594.sol";
import "./ERC20Detailed.sol";


contract ERC1594Token is ERC20Detailed, ERC1594 {
 
    constructor(string name, string symbol, uint8 decimals) 
    public
    ERC20Detailed(name, symbol, decimals)
    
    {
    
    
    }

    event IssuanceFinalized();

    function finalizeIssuance() external onlyOwner {
        require(issuance, "Issuance already closed");
        issuance = false;
        emit IssuanceFinalized();
    }

}
