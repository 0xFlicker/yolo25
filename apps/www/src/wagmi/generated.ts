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
// IVotingEscrow
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotingEscrowAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'allowedManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'artProxy',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'balanceOfNFT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_t', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOfNFTAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'canSplit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'checkpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct IVotingEscrow.Checkpoint',
        type: 'tuple',
        components: [
          { name: 'fromTimestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
          {
            name: 'delegatedBalance',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'delegatee', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
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
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_lockDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createLock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_lockDuration', internalType: 'uint256', type: 'uint256' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'createLockFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_to', internalType: 'address', type: 'address' }],
    name: 'createManagedLockFor',
    outputs: [{ name: '_mTokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'deactivated',
    outputs: [{ name: 'inactive', internalType: 'bool', type: 'bool' }],
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
    inputs: [
      { name: 'delegator', internalType: 'uint256', type: 'uint256' },
      { name: 'delegatee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegator', internalType: 'uint256', type: 'uint256' },
      { name: 'delegatee', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegator', internalType: 'uint256', type: 'uint256' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'depositFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_mTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'depositManaged',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'distributor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'escrowType',
    outputs: [
      {
        name: '',
        internalType: 'enum IVotingEscrow.EscrowType',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factoryRegistry',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'forwarder',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'idToManaged',
    outputs: [
      { name: 'managedTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_lockDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseUnlockTime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
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
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'lockPermanent',
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
        internalType: 'struct IVotingEscrow.LockedBalance',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'managedToFree',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'managedToLocked',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'uint256', type: 'uint256' },
      { name: '_to', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'merge',
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
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ownerToNFTokenIdList',
    outputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [{ name: '_loc', internalType: 'uint256', type: 'uint256' }],
    name: 'pointHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IVotingEscrow.GlobalPoint',
        type: 'tuple',
        components: [
          { name: 'bias', internalType: 'int128', type: 'int128' },
          { name: 'slope', internalType: 'int128', type: 'int128' },
          { name: 'ts', internalType: 'uint256', type: 'uint256' },
          { name: 'blk', internalType: 'uint256', type: 'uint256' },
          {
            name: 'permanentLockBalance',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_allowedManager', internalType: 'address', type: 'address' },
    ],
    name: 'setAllowedManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
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
      { name: '_mTokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_state', internalType: 'bool', type: 'bool' },
    ],
    name: 'setManagedState',
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
    inputs: [
      { name: '_voter', internalType: 'address', type: 'address' },
      { name: '_distributor', internalType: 'address', type: 'address' },
    ],
    name: 'setVoterAndDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'slopeChanges',
    outputs: [{ name: '', internalType: 'int128', type: 'int128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'uint256', type: 'uint256' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'split',
    outputs: [
      { name: '_tokenId1', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId2', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
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
    inputs: [],
    name: 'team',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_account', internalType: 'address', type: 'address' },
      { name: '_bool', internalType: 'bool', type: 'bool' },
    ],
    name: 'toggleSplit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
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
    inputs: [{ name: '_t', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupplyAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unlockPermanent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userPointEpoch',
    outputs: [{ name: '_epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_loc', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userPointHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IVotingEscrow.UserPoint',
        type: 'tuple',
        components: [
          { name: 'bias', internalType: 'int128', type: 'int128' },
          { name: 'slope', internalType: 'int128', type: 'int128' },
          { name: 'ts', internalType: 'uint256', type: 'uint256' },
          { name: 'blk', internalType: 'uint256', type: 'uint256' },
          { name: 'permanent', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
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
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'voted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'voter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_voted', internalType: 'bool', type: 'bool' },
    ],
    name: 'voting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'managedTokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'weights',
    outputs: [{ name: 'weight', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawManaged',
    outputs: [],
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
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
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
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_mTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_lockedManagedReward',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_freeManagedReward',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CreateManaged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newBalance',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'depositType',
        internalType: 'enum IVotingEscrow.DepositType',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'locktime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
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
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_mTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DepositManaged',
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
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'LockPermanent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_from',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: '_to', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: '_amountFrom',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_amountTo',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_amountFinal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_locktime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Merge',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_allowedManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'SetAllowedManager',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_tokenId1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_tokenId2',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_splitAmount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_splitAmount2',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_locktime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Split',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'prevSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'supply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Supply',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
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
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'UnlockPermanent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'provider',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdraw',
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
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_mTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_weight',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: '_ts', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'WithdrawManaged',
  },
  { type: 'error', inputs: [], name: 'AlreadyVoted' },
  { type: 'error', inputs: [], name: 'AmountTooBig' },
  { type: 'error', inputs: [], name: 'ERC721ReceiverRejectedTokens' },
  {
    type: 'error',
    inputs: [],
    name: 'ERC721TransferToNonERC721ReceiverImplementer',
  },
  { type: 'error', inputs: [], name: 'InvalidManagedNFTId' },
  { type: 'error', inputs: [], name: 'InvalidNonce' },
  { type: 'error', inputs: [], name: 'InvalidSignature' },
  { type: 'error', inputs: [], name: 'InvalidSignatureS' },
  { type: 'error', inputs: [], name: 'LockDurationNotInFuture' },
  { type: 'error', inputs: [], name: 'LockDurationTooLong' },
  { type: 'error', inputs: [], name: 'LockExpired' },
  { type: 'error', inputs: [], name: 'LockNotExpired' },
  { type: 'error', inputs: [], name: 'NoLockFound' },
  { type: 'error', inputs: [], name: 'NonExistentToken' },
  { type: 'error', inputs: [], name: 'NotApprovedOrOwner' },
  { type: 'error', inputs: [], name: 'NotDistributor' },
  { type: 'error', inputs: [], name: 'NotEmergencyCouncilOrGovernor' },
  { type: 'error', inputs: [], name: 'NotGovernor' },
  { type: 'error', inputs: [], name: 'NotGovernorOrManager' },
  { type: 'error', inputs: [], name: 'NotLockedNFT' },
  { type: 'error', inputs: [], name: 'NotManagedNFT' },
  { type: 'error', inputs: [], name: 'NotManagedOrNormalNFT' },
  { type: 'error', inputs: [], name: 'NotNormalNFT' },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'NotPermanentLock' },
  { type: 'error', inputs: [], name: 'NotTeam' },
  { type: 'error', inputs: [], name: 'NotVoter' },
  { type: 'error', inputs: [], name: 'OwnershipChange' },
  { type: 'error', inputs: [], name: 'PermanentLock' },
  { type: 'error', inputs: [], name: 'SameAddress' },
  { type: 'error', inputs: [], name: 'SameNFT' },
  { type: 'error', inputs: [], name: 'SameState' },
  { type: 'error', inputs: [], name: 'SignatureExpired' },
  { type: 'error', inputs: [], name: 'SplitNoOwner' },
  { type: 'error', inputs: [], name: 'SplitNotAllowed' },
  { type: 'error', inputs: [], name: 'TooManyTokenIDs' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  { type: 'error', inputs: [], name: 'ZeroBalance' },
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
// VeVaultStake
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const veVaultStakeAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'veNFTAddress', internalType: 'address', type: 'address' },
      { name: 'yoloAddress', internalType: 'address', type: 'address' },
      { name: 'renderer', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
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
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'batchDepositFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'batchRedeemTo',
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
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'depositFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'generateSeed',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
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
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'largestLock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'lockForTokenId',
    outputs: [
      {
        name: '',
        internalType: 'struct IVeVaultLock.Lock',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'start', internalType: 'uint64', type: 'uint64' },
          { name: 'end', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'locked',
    outputs: [
      { name: 'currentValue', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lock',
        internalType: 'struct IVeVaultLock.Lock',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'start', internalType: 'uint64', type: 'uint64' },
          { name: 'end', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'metadataUpdateRole',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
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
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
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
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redeemTo',
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
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'isApproved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
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
    name: 'updateAllMetadata',
    outputs: [],
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
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
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
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isApproved',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
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
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AccountBalanceOverflow' },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'BalanceQueryForZeroAddress' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'NotOwnerNorApproved' },
  { type: 'error', inputs: [], name: 'NotSupported' },
  { type: 'error', inputs: [], name: 'TokenAlreadyExists' },
  { type: 'error', inputs: [], name: 'TokenDoesNotExist' },
  { type: 'error', inputs: [], name: 'TransferFromIncorrectOwner' },
  { type: 'error', inputs: [], name: 'TransferToNonERC721ReceiverImplementer' },
  { type: 'error', inputs: [], name: 'TransferToZeroAddress' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
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
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
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
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
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
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
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
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
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
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
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
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
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
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
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
  { type: 'error', inputs: [], name: 'Locked' },
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
    name: '_BURNER_ROLE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__
 */
export const useReadIVotingEscrow = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"CLOCK_MODE"`
 */
export const useReadIVotingEscrowClockMode =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'CLOCK_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"allowedManager"`
 */
export const useReadIVotingEscrowAllowedManager =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'allowedManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"artProxy"`
 */
export const useReadIVotingEscrowArtProxy = /*#__PURE__*/ createUseReadContract(
  { abi: iVotingEscrowAbi, functionName: 'artProxy' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIVotingEscrowBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"balanceOfNFT"`
 */
export const useReadIVotingEscrowBalanceOfNft =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'balanceOfNFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"balanceOfNFTAt"`
 */
export const useReadIVotingEscrowBalanceOfNftAt =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'balanceOfNFTAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"canSplit"`
 */
export const useReadIVotingEscrowCanSplit = /*#__PURE__*/ createUseReadContract(
  { abi: iVotingEscrowAbi, functionName: 'canSplit' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"checkpoints"`
 */
export const useReadIVotingEscrowCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'checkpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"clock"`
 */
export const useReadIVotingEscrowClock = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'clock',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"deactivated"`
 */
export const useReadIVotingEscrowDeactivated =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'deactivated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIVotingEscrowDecimals = /*#__PURE__*/ createUseReadContract(
  { abi: iVotingEscrowAbi, functionName: 'decimals' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"delegates"`
 */
export const useReadIVotingEscrowDelegates =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'delegates',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"distributor"`
 */
export const useReadIVotingEscrowDistributor =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'distributor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"epoch"`
 */
export const useReadIVotingEscrowEpoch = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'epoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"escrowType"`
 */
export const useReadIVotingEscrowEscrowType =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'escrowType',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"factoryRegistry"`
 */
export const useReadIVotingEscrowFactoryRegistry =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'factoryRegistry',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"forwarder"`
 */
export const useReadIVotingEscrowForwarder =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'forwarder',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadIVotingEscrowGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"getPastTotalSupply"`
 */
export const useReadIVotingEscrowGetPastTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'getPastTotalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"getPastVotes"`
 */
export const useReadIVotingEscrowGetPastVotes =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'getPastVotes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"idToManaged"`
 */
export const useReadIVotingEscrowIdToManaged =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'idToManaged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIVotingEscrowIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"locked"`
 */
export const useReadIVotingEscrowLocked = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'locked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"managedToFree"`
 */
export const useReadIVotingEscrowManagedToFree =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'managedToFree',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"managedToLocked"`
 */
export const useReadIVotingEscrowManagedToLocked =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'managedToLocked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"name"`
 */
export const useReadIVotingEscrowName = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIVotingEscrowNonces = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"numCheckpoints"`
 */
export const useReadIVotingEscrowNumCheckpoints =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'numCheckpoints',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadIVotingEscrowOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"ownerToNFTokenIdList"`
 */
export const useReadIVotingEscrowOwnerToNfTokenIdList =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'ownerToNFTokenIdList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"permanentLockBalance"`
 */
export const useReadIVotingEscrowPermanentLockBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'permanentLockBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"pointHistory"`
 */
export const useReadIVotingEscrowPointHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'pointHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"slopeChanges"`
 */
export const useReadIVotingEscrowSlopeChanges =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'slopeChanges',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"supply"`
 */
export const useReadIVotingEscrowSupply = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'supply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIVotingEscrowSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIVotingEscrowSymbol = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"team"`
 */
export const useReadIVotingEscrowTeam = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'team',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"token"`
 */
export const useReadIVotingEscrowToken = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"tokenId"`
 */
export const useReadIVotingEscrowTokenId = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'tokenId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadIVotingEscrowTokenUri = /*#__PURE__*/ createUseReadContract(
  { abi: iVotingEscrowAbi, functionName: 'tokenURI' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIVotingEscrowTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"totalSupplyAt"`
 */
export const useReadIVotingEscrowTotalSupplyAt =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'totalSupplyAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"userPointEpoch"`
 */
export const useReadIVotingEscrowUserPointEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'userPointEpoch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"userPointHistory"`
 */
export const useReadIVotingEscrowUserPointHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: iVotingEscrowAbi,
    functionName: 'userPointHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"version"`
 */
export const useReadIVotingEscrowVersion = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"voted"`
 */
export const useReadIVotingEscrowVoted = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'voted',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"voter"`
 */
export const useReadIVotingEscrowVoter = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'voter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"weights"`
 */
export const useReadIVotingEscrowWeights = /*#__PURE__*/ createUseReadContract({
  abi: iVotingEscrowAbi,
  functionName: 'weights',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__
 */
export const useWriteIVotingEscrow = /*#__PURE__*/ createUseWriteContract({
  abi: iVotingEscrowAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIVotingEscrowApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useWriteIVotingEscrowCheckpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createLock"`
 */
export const useWriteIVotingEscrowCreateLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createLockFor"`
 */
export const useWriteIVotingEscrowCreateLockFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'createLockFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createManagedLockFor"`
 */
export const useWriteIVotingEscrowCreateManagedLockFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'createManagedLockFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"delegate"`
 */
export const useWriteIVotingEscrowDelegate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useWriteIVotingEscrowDelegateBySig =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"depositFor"`
 */
export const useWriteIVotingEscrowDepositFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"depositManaged"`
 */
export const useWriteIVotingEscrowDepositManaged =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'depositManaged',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const useWriteIVotingEscrowIncreaseAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const useWriteIVotingEscrowIncreaseUnlockTime =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"isApprovedOrOwner"`
 */
export const useWriteIVotingEscrowIsApprovedOrOwner =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'isApprovedOrOwner',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"lockPermanent"`
 */
export const useWriteIVotingEscrowLockPermanent =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'lockPermanent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"merge"`
 */
export const useWriteIVotingEscrowMerge = /*#__PURE__*/ createUseWriteContract({
  abi: iVotingEscrowAbi,
  functionName: 'merge',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIVotingEscrowSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setAllowedManager"`
 */
export const useWriteIVotingEscrowSetAllowedManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setAllowedManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIVotingEscrowSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useWriteIVotingEscrowSetArtProxy =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setManagedState"`
 */
export const useWriteIVotingEscrowSetManagedState =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setManagedState',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setTeam"`
 */
export const useWriteIVotingEscrowSetTeam =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setTeam',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setVoterAndDistributor"`
 */
export const useWriteIVotingEscrowSetVoterAndDistributor =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'setVoterAndDistributor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"split"`
 */
export const useWriteIVotingEscrowSplit = /*#__PURE__*/ createUseWriteContract({
  abi: iVotingEscrowAbi,
  functionName: 'split',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"toggleSplit"`
 */
export const useWriteIVotingEscrowToggleSplit =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'toggleSplit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIVotingEscrowTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"unlockPermanent"`
 */
export const useWriteIVotingEscrowUnlockPermanent =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'unlockPermanent',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"voting"`
 */
export const useWriteIVotingEscrowVoting = /*#__PURE__*/ createUseWriteContract(
  { abi: iVotingEscrowAbi, functionName: 'voting' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteIVotingEscrowWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"withdrawManaged"`
 */
export const useWriteIVotingEscrowWithdrawManaged =
  /*#__PURE__*/ createUseWriteContract({
    abi: iVotingEscrowAbi,
    functionName: 'withdrawManaged',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__
 */
export const useSimulateIVotingEscrow = /*#__PURE__*/ createUseSimulateContract(
  { abi: iVotingEscrowAbi },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIVotingEscrowApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useSimulateIVotingEscrowCheckpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createLock"`
 */
export const useSimulateIVotingEscrowCreateLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createLockFor"`
 */
export const useSimulateIVotingEscrowCreateLockFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'createLockFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"createManagedLockFor"`
 */
export const useSimulateIVotingEscrowCreateManagedLockFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'createManagedLockFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"delegate"`
 */
export const useSimulateIVotingEscrowDelegate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'delegate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"delegateBySig"`
 */
export const useSimulateIVotingEscrowDelegateBySig =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'delegateBySig',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"depositFor"`
 */
export const useSimulateIVotingEscrowDepositFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"depositManaged"`
 */
export const useSimulateIVotingEscrowDepositManaged =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'depositManaged',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const useSimulateIVotingEscrowIncreaseAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const useSimulateIVotingEscrowIncreaseUnlockTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"isApprovedOrOwner"`
 */
export const useSimulateIVotingEscrowIsApprovedOrOwner =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'isApprovedOrOwner',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"lockPermanent"`
 */
export const useSimulateIVotingEscrowLockPermanent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'lockPermanent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"merge"`
 */
export const useSimulateIVotingEscrowMerge =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'merge',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIVotingEscrowSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setAllowedManager"`
 */
export const useSimulateIVotingEscrowSetAllowedManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setAllowedManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIVotingEscrowSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useSimulateIVotingEscrowSetArtProxy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setManagedState"`
 */
export const useSimulateIVotingEscrowSetManagedState =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setManagedState',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setTeam"`
 */
export const useSimulateIVotingEscrowSetTeam =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setTeam',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"setVoterAndDistributor"`
 */
export const useSimulateIVotingEscrowSetVoterAndDistributor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'setVoterAndDistributor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"split"`
 */
export const useSimulateIVotingEscrowSplit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'split',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"toggleSplit"`
 */
export const useSimulateIVotingEscrowToggleSplit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'toggleSplit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIVotingEscrowTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"unlockPermanent"`
 */
export const useSimulateIVotingEscrowUnlockPermanent =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'unlockPermanent',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"voting"`
 */
export const useSimulateIVotingEscrowVoting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'voting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateIVotingEscrowWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `functionName` set to `"withdrawManaged"`
 */
export const useSimulateIVotingEscrowWithdrawManaged =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iVotingEscrowAbi,
    functionName: 'withdrawManaged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__
 */
export const useWatchIVotingEscrowEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: iVotingEscrowAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIVotingEscrowApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIVotingEscrowApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchIVotingEscrowBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"CreateManaged"`
 */
export const useWatchIVotingEscrowCreateManagedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'CreateManaged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"DelegateChanged"`
 */
export const useWatchIVotingEscrowDelegateChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'DelegateChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"DelegateVotesChanged"`
 */
export const useWatchIVotingEscrowDelegateVotesChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'DelegateVotesChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchIVotingEscrowDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"DepositManaged"`
 */
export const useWatchIVotingEscrowDepositManagedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'DepositManaged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"LockPermanent"`
 */
export const useWatchIVotingEscrowLockPermanentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'LockPermanent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Merge"`
 */
export const useWatchIVotingEscrowMergeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Merge',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchIVotingEscrowMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"SetAllowedManager"`
 */
export const useWatchIVotingEscrowSetAllowedManagerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'SetAllowedManager',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Split"`
 */
export const useWatchIVotingEscrowSplitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Split',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Supply"`
 */
export const useWatchIVotingEscrowSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Supply',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIVotingEscrowTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"UnlockPermanent"`
 */
export const useWatchIVotingEscrowUnlockPermanentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'UnlockPermanent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchIVotingEscrowWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link iVotingEscrowAbi}__ and `eventName` set to `"WithdrawManaged"`
 */
export const useWatchIVotingEscrowWithdrawManagedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: iVotingEscrowAbi,
    eventName: 'WithdrawManaged',
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__
 */
export const useReadVeVaultStake = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadVeVaultStakeBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: veVaultStakeAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"generateSeed"`
 */
export const useReadVeVaultStakeGenerateSeed =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'generateSeed',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadVeVaultStakeGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"hasAllRoles"`
 */
export const useReadVeVaultStakeHasAllRoles =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'hasAllRoles',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"hasAnyRole"`
 */
export const useReadVeVaultStakeHasAnyRole =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'hasAnyRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadVeVaultStakeIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"largestLock"`
 */
export const useReadVeVaultStakeLargestLock =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'largestLock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"lockForTokenId"`
 */
export const useReadVeVaultStakeLockForTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'lockForTokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"locked"`
 */
export const useReadVeVaultStakeLocked = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'locked',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"metadataUpdateRole"`
 */
export const useReadVeVaultStakeMetadataUpdateRole =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'metadataUpdateRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"name"`
 */
export const useReadVeVaultStakeName = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useReadVeVaultStakeOnErc721Received =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"owner"`
 */
export const useReadVeVaultStakeOwner = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadVeVaultStakeOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadVeVaultStakeOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"rolesOf"`
 */
export const useReadVeVaultStakeRolesOf = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'rolesOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadVeVaultStakeSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: veVaultStakeAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadVeVaultStakeSymbol = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadVeVaultStakeTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: veVaultStakeAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__
 */
export const useWriteVeVaultStake = /*#__PURE__*/ createUseWriteContract({
  abi: veVaultStakeAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteVeVaultStakeApprove = /*#__PURE__*/ createUseWriteContract(
  { abi: veVaultStakeAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"batchDepositFor"`
 */
export const useWriteVeVaultStakeBatchDepositFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'batchDepositFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"batchRedeemTo"`
 */
export const useWriteVeVaultStakeBatchRedeemTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'batchRedeemTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteVeVaultStakeCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteVeVaultStakeCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"depositFor"`
 */
export const useWriteVeVaultStakeDepositFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useWriteVeVaultStakeGrantRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'grantRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"redeemTo"`
 */
export const useWriteVeVaultStakeRedeemTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'redeemTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteVeVaultStakeRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useWriteVeVaultStakeRenounceRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'renounceRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteVeVaultStakeRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useWriteVeVaultStakeRevokeRoles =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'revokeRoles',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteVeVaultStakeSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteVeVaultStakeSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteVeVaultStakeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteVeVaultStakeTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"updateAllMetadata"`
 */
export const useWriteVeVaultStakeUpdateAllMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: veVaultStakeAbi,
    functionName: 'updateAllMetadata',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__
 */
export const useSimulateVeVaultStake = /*#__PURE__*/ createUseSimulateContract({
  abi: veVaultStakeAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateVeVaultStakeApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"batchDepositFor"`
 */
export const useSimulateVeVaultStakeBatchDepositFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'batchDepositFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"batchRedeemTo"`
 */
export const useSimulateVeVaultStakeBatchRedeemTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'batchRedeemTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateVeVaultStakeCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateVeVaultStakeCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"depositFor"`
 */
export const useSimulateVeVaultStakeDepositFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"grantRoles"`
 */
export const useSimulateVeVaultStakeGrantRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'grantRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"redeemTo"`
 */
export const useSimulateVeVaultStakeRedeemTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'redeemTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateVeVaultStakeRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"renounceRoles"`
 */
export const useSimulateVeVaultStakeRenounceRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'renounceRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateVeVaultStakeRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"revokeRoles"`
 */
export const useSimulateVeVaultStakeRevokeRoles =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'revokeRoles',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateVeVaultStakeSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateVeVaultStakeSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateVeVaultStakeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateVeVaultStakeTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link veVaultStakeAbi}__ and `functionName` set to `"updateAllMetadata"`
 */
export const useSimulateVeVaultStakeUpdateAllMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: veVaultStakeAbi,
    functionName: 'updateAllMetadata',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__
 */
export const useWatchVeVaultStakeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: veVaultStakeAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchVeVaultStakeApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchVeVaultStakeApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchVeVaultStakeBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchVeVaultStakeOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchVeVaultStakeOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchVeVaultStakeOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"RolesUpdated"`
 */
export const useWatchVeVaultStakeRolesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
    eventName: 'RolesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link veVaultStakeAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchVeVaultStakeTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: veVaultStakeAbi,
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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link yoloAbi}__ and `functionName` set to `"_BURNER_ROLE"`
 */
export const useReadYoloBurnerRole = /*#__PURE__*/ createUseReadContract({
  abi: yoloAbi,
  functionName: '_BURNER_ROLE',
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
