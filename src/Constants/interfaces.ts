export const interfaces = {
    IERC721RewardLevel: [
        "function safeMint(address to) external",
        "function supportsInterface(bytes4 interfaceId) external",
        "function getSvg() external view returns(string memory _svgFront, string memory _svgBack)",
        `function getMetadas() external view returns(
            address front,
            address back,
            uint256 levelId,
            string memory type_,
            string memory title,
            string memory text
        )`,

        "function balanceOf(address owner) external view  returns (uint256)",
        "function ownerOf(uint256 tokenId) external view  returns (address)",
        "function name() external view  returns (string memory)",
        "function symbol() external view  returns (string memory)",
        "function approve(address to, uint256 tokenId) external",
        "function getApproved(uint256 tokenId) external view  returns (address)",
        "function setApprovalForAll(address operator, bool approved) external",
        "function isApprovedForAll(address owner, address operator) external view  returns (bool)",
        "function transferFrom(address from, address to, uint256 tokenId) external",
        "function safeTransferFrom(address from, address to, uint256 tokenId) external",

        "function tokenOfOwnerByIndex(address owner, uint256 index) external view  returns (uint256)",
        "function totalSupply() external view  returns (uint256)",
        "function tokenByIndex(uint256 index) external view  returns (uint256)",

        "function owner() external view returns (address)",
        "function renounceOwnership() external",
        "function transferOwnership(address newOwner) external",
    ],
    LevelLoupeFacet: [
        "function getAddress(uint256 levelId) external view returns (address addr)",
        "function getTitle(uint256 levelId) external view returns (string memory title)",
        "function getLevelDifficulty(uint256 levelId) external view returns (string memory title)",
        "function hasCompletedLevel(address account, uint256 levelId) external view returns (bool result)",
        "function hasClaimedLevel(address account, uint256 levelId) external view returns (bool result)",
        "function getRunningLevel(address account) external view returns (uint256 result)",
        "function getLevelInstanceByAddress(address account, uint256 levelId) external view returns (address result)",
        "function getFactoryLevel(uint256 levelId, uint8 pos) external view returns (address result)",
        " function getTokensLevel(uint256 levelId) external view returns (address[] memory result)",
    ],
    IToken: [
        "function deployToken(string memory name, string memory ticker) external returns(address)",
        `function deployTokenWithFixedSupply(
            string memory name, 
            string memory ticker, 
            uint256 totalSupply, 
            address to
            ) external returns(address)`,
        "function mint(address to, uint256 amount) external",
        "function name() external view returns (string memory)",
        "function symbol() external view returns (string memory)",
        "function decimals() external view returns (uint8)",
        "function totalSupply() external view returns (uint)",
        "function balanceOf(address owner) external view returns (uint)",
        "function allowance(address owner, address spender) external view returns (uint)",
        "function approve(address spender, uint value) external returns (bool)",
        "function transfer(address to, uint value) external returns (bool)",
        "function transferFrom(address from, address to, uint value) external returns (bool)",
        "function transferOwnership(address newOwner) external"
    ],
    IFactory: [
        "function INIT_CODE_HASH() external returns(bytes32)",
        "function feeTo() external returns(address)",
        "function feeToSetter() external returns(address)",
        "function getPair(address, address) external returns(address)",
        "function allPairs(uint) external returns(address)",
        "function allPairsLength() external view returns (uint)", 
        "function deployFactory(address player) external returns(address)",
        "function createPair(address, address) external returns (address)",
        "function setFeeTo(address) external",
        "function setFeeToSetter(address) external",
        "function getInitCodeHash() external pure returns(bytes32)",
    ],
    IPair: [
        "function name() external pure returns (string memory)",
        "function symbol() external pure returns (string memory)",
        "function decimals() external pure returns (uint8)",
        "function totalSupply() external view returns (uint)",
        "function balanceOf(address owner) external view returns (uint)",
        "function allowance(address owner, address spender) external view returns (uint)",
        "function approve(address spender, uint value) external returns (bool)",
        "function transfer(address to, uint value) external returns (bool)",
        "function transferFrom(address from, address to, uint value) external returns (bool)",
        "function DOMAIN_SEPARATOR() external view returns (bytes32)",
        "function PERMIT_TYPEHASH() external pure returns (bytes32)",
        "function nonces(address owner) external view returns (uint)",
        "function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external",
        "function MINIMUM_LIQUIDITY() external pure returns (uint)",
        "function factory() external view returns (address);",
        "function token0() external view returns (address)",
        "function token1() external view returns (address)",
        "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
        "function price0CumulativeLast() external view returns (uint)",
        "function price1CumulativeLast() external view returns (uint)",
        "function kLast() external view returns (uint)",
        "function mint(address to) external returns (uint liquidity)",
        "function burn(address to) external returns (uint amount0, uint amount1)",
        "function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external",
        "function skim(address to) external",
        "function sync() external",
        "function burn(address to) external returns (uint amount0, uint amount1)",
    ],
    IRouter: [
        `function addLiquidity(
            address tokenA,
            address tokenB,
            uint amountADesired,
            uint amountBDesired,
            uint amountAMin,
            uint amountBMin,
            address to,
            uint deadline,
            address factory
        ) external returns (uint amountA, uint amountB, uint liquidity)`,
        `function addLiquidityETH(
            address token,
            uint amountTokenDesired,
            uint amountTokenMin,
            uint amountETHMin,
            address to,
            uint deadline,
            address factory
        ) external payable returns (uint amountToken, uint amountETH, uint liquidity)`,
        `function removeLiquidity(
            address tokenA,
            address tokenB,
            uint liquidity,
            uint amountAMin,
            uint amountBMin,
            address to,
            uint deadline,
            address factory
        ) external returns (uint amountA, uint amountB)`,
        `function removeLiquidityETH(
            address token,
            uint liquidity,
            uint amountTokenMin,
            uint amountETHMin,
            address to,
            uint deadline,
            address factory
        ) external returns (uint amountToken, uint amountETH)`,
        `function removeLiquidityWithPermit(
            address tokenA,
            address tokenB,
            uint liquidity,
            uint amountAMin,
            uint amountBMin,
            address to,
            bool approveMax, uint8 v, bytes32 r, bytes32 s,
            address factory
        ) external returns (uint amountA, uint amountB)`,
        `function removeLiquidityETHWithPermit(
            address token,
            uint liquidity,
            uint amountTokenMin,
            uint amountETHMin,
            address to,
            uint deadline,
            bool approveMax, uint8 v, bytes32 r, bytes32 s,
            address factory
        ) external returns (uint amountToken, uint amountETH)`,
        `function removeLiquidityETHSupportingFeeOnTransferTokens(
            address token,
            uint liquidity,
            uint amountTokenMin,
            uint amountETHMin,
            address to,
            uint deadline,
            address factory
        ) external returns (uint amountETH)`,
        `function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
            address token,
            uint liquidity,
            uint amountTokenMin,
            uint amountETHMin,
            address to,
            uint deadline,
            bool approveMax, uint8 v, bytes32 r, bytes32 s,
            address factory
        ) external returns (uint amountETH)`,
        `function swapExactTokensForTokens(
            uint amountIn,
            uint amountOutMin,
            address[] calldata path,
            address to,
            uint deadline,
            address factory
        ) external returns (uint[] memory amounts)`,
        `function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline, address factory)
            external payable returns (uint[] memory amounts)`,
        `function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline, address factory)
            external returns (uint[] memory amounts)`,
        `function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline, address factory)
            external payable returns (uint[] memory amounts)`,
        `function swapExactTokensForTokensSupportingFeeOnTransferTokens(
            uint amountIn,
            uint amountOutMin,
            address[] calldata path,
            address to,
            uint deadline,
            address factory
        ) external`,
        `function swapExactETHForTokensSupportingFeeOnTransferTokens(
            uint amountOutMin,
            address[] calldata path,
            address to,
            uint deadline,
            address factory
        ) external payable`,
        `function swapExactTokensForETHSupportingFeeOnTransferTokens(
            uint amountIn,
            uint amountOutMin,
            address[] calldata path,
            address to,
            uint deadline,
            address factory
        ) external`,
        `function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB)`,
        `function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut)`,
        `function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn)`,
        `function getAmountsOut(uint amountIn, address[] memory path, address factory) external view returns (uint[] memory amounts)`,
        `function getAmountsIn(uint amountOut, address[] memory path, address factory) external view returns (uint[] memory amounts)`
    ],
    ILevel0Facet: [
        "function openL0Chest() external returns(address[] memory loots, uint[] memory amounts)"
    ],
    ILevel1Facet: [
        "function initLevel1() external",
        "function completeL1() external returns (bool)",
        "function openL1Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel2Facet: [
        "function initLevel2() external",
        "function completeL2() external returns (bool)",
        "function openL2Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel2Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function shipped() external view returns (bool)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",

        "function shipTokens() external",
    ],
    ILevel3Facet: [
        "function initLevel3() external",
        "function completeL3() external returns (bool)",
        "function openL3Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel3Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",

        "function factory() external view returns (address)",
        "function getPair() external returns(address pair)",
    ],
    ILevel4Facet: [
        "function initLevel4() external",
        "function completeL4() external returns (bool)",
        "function openL4Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel4Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",

        "function getPair() external returns(address pair)",
    ],
    ILevel5Facet: [
        "function initLevel5() external",
        "function completeL5() external returns (bool)",
        "function openL5Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel5Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",

        "function insertAddress(address guess_) external",
    ],
    ILevel6Facet: [
        "function initLevel6() external",
        "function completeL6() external returns (bool)",
        "function openL6Chest() external returns(address[] memory loots, uint[] memory amounts)",
        "function getTokens() external view returns(address[] memory)",
        "function getFactory() external view returns(address)",
        "function getPair(address token0, address token1) public returns(address pair)",
    ],
    ILevel7Facet: [
        "function initLevel7() external",
        "function completeL7() external returns (bool)",
        "function openL7Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel7Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
    ],
    ILevel8Facet: [
        "function initLevel8() external",
        "function completeL8() external returns (bool)",
        "function openL8Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel8Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
        "function getPair() external returns(address pair)",
    ],
    ILevel9Facet: [
        "function initLevel9() external",
        "function completeL9() external returns (bool)",
        "function openL9Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel9Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
        "function getPair() external returns(address pair)",
        "function deployTokenWithFixedSupply(string memory name, string memory ticker, uint256 totalSupply, address to) external",
    ],
    ILevel10Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
        "function getPair() external returns(address pair)",
    ],
    ILevel10Facet: [
        "function initLevel10() external",
        "function completeL10() external returns (bool)",
        "function openL10Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel11Facet: [
        "function initLevel11() external",
        "function completeL11() external returns (bool)",
        "function openL11Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel11Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
        "function getPair() external returns(address pair)",
        "function swap(uint amountIn, uint amountOutMin, address[] calldata path) public returns(bool)",
        "function getQuote() public returns(uint256 quote)",
    ],
    ILevel12Facet: [
        "function initLevel12() external",
        "function completeL12() external returns (bool)",
        "function openL12Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
    ILevel12Instance: [
        "function player() external view returns (address)", 
        "function tokens(uint) external view returns (address)",
        "function TOKENS_SYMBOL(uint) external view returns (string memory)",
        "function TOKENS_NAME(uint) external view returns (string memory)",
        "function getPair() external returns(address pair)",
    ],
    ILevel13Facet: [
        "function initLevel13() external",
        "function completeL13() external returns (bool)",
        "function openL13Chest() external returns(address[] memory loots, uint[] memory amounts)",
    ],
}