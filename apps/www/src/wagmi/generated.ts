import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokeId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IYolo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iYoloAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VotingEscrow
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votingEscrowAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'adminBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'int128', type: 'int128' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'adminMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'canSplit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'dataPoint',
    outputs: [
      { name: 'amount', internalType: 'int128', type: 'int128' },
      { name: 'end', internalType: 'uint256', type: 'uint256' },
      { name: 'isPermanent', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'grantRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasAllRoles',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasAnyRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isApprovedOrOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forwarder', internalType: 'address', type: 'address' }],
    name: 'isTrustedForwarder',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lockTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'locked',
    outputs: [
      {
        name: '',
        internalType: 'struct VotingEscrow.LockedBalance',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'int128', type: 'int128' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
          { name: 'isPermanent', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ownerToNFTokenIdList',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'permanentLockBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'roles', internalType: 'uint256', type: 'uint256' }],
    name: 'renounceRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'revokeRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'rolesOf',
    outputs: [{ name: 'roles', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_proxy', internalType: 'address', type: 'address' }],
    name: 'setArtProxy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'int128', type: 'int128' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setLockedBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_team', internalType: 'address', type: 'address' }],
    name: 'setTeam',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'slopeChanges',
    outputs: [{ name: '', internalType: 'int128', type: 'int128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'supply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlockTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'userPointEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'roles',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'RolesUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'ERC721ReceiverRejectedTokens' },
  {
    type: 'error',
    inputs: [],
    name: 'ERC721TransferToNonERC721ReceiverImplementer',
  },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'NotApprovedOrOwner' },
  { type: 'error', inputs: [], name: 'NotManagedOrNormalNFT' },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'NotVoter' },
  { type: 'error', inputs: [], name: 'SameAddress' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Yolo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const yoloAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_VAULT_ROLE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'grantRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasAllRoles',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasAnyRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'roles', internalType: 'uint256', type: 'uint256' }],
    name: 'renounceRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'roles', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'revokeRoles',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'user', internalType: 'address', type: 'address' }],
    name: 'rolesOf',
    outputs: [{ name: 'roles', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'roles',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'RolesUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AllowanceOverflow' },
  { type: 'error', inputs: [], name: 'AllowanceUnderflow' },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidPermit' },
  { type: 'error', inputs: [], name: 'NameCallFailed' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'Permit2AllowanceIsFixedAtInfinity' },
  { type: 'error', inputs: [], name: 'PermitExpired' },
  { type: 'error', inputs: [], name: 'SymbolCallFailed' },
  { type: 'error', inputs: [], name: 'TotalSupplyOverflow' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useReadIerc721 = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIerc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadIerc721Name = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIerc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadIerc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadIerc721TokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIerc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIerc721TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: ierc721Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWriteIerc721 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteIerc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIerc721TransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: ierc721Abi, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useSimulateIerc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIerc721Approve =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIerc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const useWatchIerc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIerc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIerc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iYoloAbi}__
 */
export const useReadIYolo = /*#__PURE__*/ createUseReadContract({
  abi: iYoloAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIYoloAllowance = /*#__PURE__*/ createUseReadContract({
  abi: iYoloAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIYoloBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: iYoloAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIYoloTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: iYoloAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__
 */
export const useWriteIYolo = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIYoloApprove = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIYoloBurn = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteIYoloMint = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIYoloTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIYoloTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: iYoloAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__
 */
export const useSimulateIYolo = /*#__PURE__*/ createUseSimulateContract({
  abi: iYoloAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIYoloApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: iYoloAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIYoloBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: iYoloAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateIYoloMint = /*#__PURE__*/ createUseSimulateContract({
  abi: iYoloAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIYoloTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: iYoloAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iYoloAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIYoloTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iYoloAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iYoloAbi}__
 */
export const useWatchIYoloEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: iYoloAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iYoloAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIYoloApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iYoloAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iYoloAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIYoloTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iYoloAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__
 */
export const useReadVotingEscrow = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadVotingEscrowClockMode = /*#__PURE__*/ createUseReadContract(
  { abi: votingEscrowAbi, functionName: 'CLOCK_MODE' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadVotingEscrowBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: votingEscrowAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"canSplit"`
 */
export const useReadVotingEscrowCanSplit = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'canSplit',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"clock"`
 */
export const useReadVotingEscrowClock = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"dataPoint"`
 */
export const useReadVotingEscrowDataPoint = /*#__PURE__*/ createUseReadContract(
  { abi: votingEscrowAbi, functionName: 'dataPoint' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadVotingEscrowDecimals = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"epoch"`
 */
export const useReadVotingEscrowEpoch = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'epoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadVotingEscrowGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"hasAllRoles"`
 */
export const useReadVotingEscrowHasAllRoles =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'hasAllRoles',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"hasAnyRole"`
 */
export const useReadVotingEscrowHasAnyRole =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'hasAnyRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadVotingEscrowIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"isApprovedOrOwner"`
 */
export const useReadVotingEscrowIsApprovedOrOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'isApprovedOrOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"isTrustedForwarder"`
 */
export const useReadVotingEscrowIsTrustedForwarder =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'isTrustedForwarder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"locked"`
 */
export const useReadVotingEscrowLocked = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'locked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"name"`
 */
export const useReadVotingEscrowName = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVotingEscrowOwner = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadVotingEscrowOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"ownerToNFTokenIdList"`
 */
export const useReadVotingEscrowOwnerToNfTokenIdList =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'ownerToNFTokenIdList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadVotingEscrowOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"permanentLockBalance"`
 */
export const useReadVotingEscrowPermanentLockBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'permanentLockBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"rolesOf"`
 */
export const useReadVotingEscrowRolesOf = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'rolesOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"slopeChanges"`
 */
export const useReadVotingEscrowSlopeChanges =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'slopeChanges',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"supply"`
 */
export const useReadVotingEscrowSupply = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'supply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadVotingEscrowSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadVotingEscrowSymbol = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadVotingEscrowTokenByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'tokenByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadVotingEscrowTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadVotingEscrowTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadVotingEscrowTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"userPointEpoch"`
 */
export const useReadVotingEscrowUserPointEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: votingEscrowAbi,
    functionName: 'userPointEpoch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"version"`
 */
export const useReadVotingEscrowVersion = /*#__PURE__*/ createUseReadContract({
  abi: votingEscrowAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__
 */
export const useWriteVotingEscrow = /*#__PURE__*/ createUseWriteContract({
  abi: votingEscrowAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"adminBurn"`
 */
export const useWriteVotingEscrowAdminBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'adminBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"adminMint"`
 */
export const useWriteVotingEscrowAdminMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'adminMint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteVotingEscrowApprove = /*#__PURE__*/ createUseWriteContract(
  { abi: votingEscrowAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteVotingEscrowCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteVotingEscrowCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useWriteVotingEscrowGrantRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'grantRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"lockTokens"`
 */
export const useWriteVotingEscrowLockTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'lockTokens',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteVotingEscrowRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useWriteVotingEscrowRenounceRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'renounceRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteVotingEscrowRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useWriteVotingEscrowRevokeRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'revokeRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteVotingEscrowSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteVotingEscrowSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useWriteVotingEscrowSetArtProxy =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setLockedBalance"`
 */
export const useWriteVotingEscrowSetLockedBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'setLockedBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setTeam"`
 */
export const useWriteVotingEscrowSetTeam = /*#__PURE__*/ createUseWriteContract(
  { abi: votingEscrowAbi, functionName: 'setTeam' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteVotingEscrowTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVotingEscrowTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"unlockTokens"`
 */
export const useWriteVotingEscrowUnlockTokens =
  /*#__PURE__*/ createUseWriteContract({
    abi: votingEscrowAbi,
    functionName: 'unlockTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__
 */
export const useSimulateVotingEscrow = /*#__PURE__*/ createUseSimulateContract({
  abi: votingEscrowAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"adminBurn"`
 */
export const useSimulateVotingEscrowAdminBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'adminBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"adminMint"`
 */
export const useSimulateVotingEscrowAdminMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'adminMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateVotingEscrowApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateVotingEscrowCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateVotingEscrowCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useSimulateVotingEscrowGrantRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'grantRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"lockTokens"`
 */
export const useSimulateVotingEscrowLockTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'lockTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateVotingEscrowRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useSimulateVotingEscrowRenounceRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'renounceRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateVotingEscrowRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useSimulateVotingEscrowRevokeRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'revokeRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateVotingEscrowSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateVotingEscrowSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useSimulateVotingEscrowSetArtProxy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setLockedBalance"`
 */
export const useSimulateVotingEscrowSetLockedBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'setLockedBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"setTeam"`
 */
export const useSimulateVotingEscrowSetTeam =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'setTeam',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateVotingEscrowTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVotingEscrowTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link votingEscrowAbi}__ and `functionName` set to `"unlockTokens"`
 */
export const useSimulateVotingEscrowUnlockTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: votingEscrowAbi,
    functionName: 'unlockTokens',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__
 */
export const useWatchVotingEscrowEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: votingEscrowAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchVotingEscrowApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchVotingEscrowApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchVotingEscrowOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchVotingEscrowOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVotingEscrowOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"RolesUpdated"`
 */
export const useWatchVotingEscrowRolesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'RolesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link votingEscrowAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchVotingEscrowTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: votingEscrowAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__
 */
export const useReadYolo = /*#__PURE__*/ createUseReadContract({ abi: yoloAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadYoloDomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"_VAULT_ROLE"`
 */
export const useReadYoloVaultRole = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: '_VAULT_ROLE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadYoloAllowance = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadYoloBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadYoloDecimals = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"hasAllRoles"`
 */
export const useReadYoloHasAllRoles = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'hasAllRoles',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"hasAnyRole"`
 */
export const useReadYoloHasAnyRole = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'hasAnyRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"name"`
 */
export const useReadYoloName = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadYoloNonces = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"owner"`
 */
export const useReadYoloOwner = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadYoloOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: yoloAbi,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"rolesOf"`
 */
export const useReadYoloRolesOf = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'rolesOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadYoloSymbol = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadYoloTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__
 */
export const useWriteYolo = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteYoloApprove = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteYoloBurn = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteYoloCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: yoloAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteYoloCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: yoloAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useWriteYoloGrantRoles = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'grantRoles',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteYoloMint = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteYoloPermit = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteYoloRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: yoloAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useWriteYoloRenounceRoles = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'renounceRoles',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteYoloRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: yoloAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useWriteYoloRevokeRoles = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'revokeRoles',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteYoloTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteYoloTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: yoloAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteYoloTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: yoloAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__
 */
export const useSimulateYolo = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateYoloApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateYoloBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateYoloCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateYoloCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useSimulateYoloGrantRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'grantRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateYoloMint = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateYoloPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateYoloRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useSimulateYoloRenounceRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'renounceRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateYoloRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useSimulateYoloRevokeRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'revokeRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateYoloTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: yoloAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateYoloTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateYoloTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: yoloAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__
 */
export const useWatchYoloEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: yoloAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchYoloApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchYoloOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchYoloOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchYoloOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"RolesUpdated"`
 */
export const useWatchYoloRolesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'RolesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link yoloAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchYoloTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: yoloAbi,
    eventName: 'Transfer',
  })
