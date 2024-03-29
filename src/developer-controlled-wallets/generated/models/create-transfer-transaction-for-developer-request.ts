/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FeeLevel } from "./fee-level";

/**
 *
 * @export
 * @interface CreateTransferTransactionForDeveloperRequest
 */
export interface CreateTransferTransactionForDeveloperRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests. To create a UUIDv4 go to [uuidgenerator.net](https://www.uuidgenerator.net). If the same key is reused, it will be treated as the same request and the original response will be returned.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  idempotencyKey: string;
  /**
   * Transfer amount in decimal number format.
   * @type {Array<string>}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  amounts?: Array<string>;
  /**
   * The destination blockchain address for the transaction.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  destinationAddress: string;
  /**
   * A base64 string expression of the entity secret ciphertext. The entity secret should be encrypted by the entity public key. Circle mandates that the entity secret ciphertext is unique for each API request.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  entitySecretCiphertext: string;
  /**
   *
   * @type {FeeLevel}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  feeLevel?: FeeLevel;
  /**
   * The maximum units of gas to be used for the transaction. Required if `feeLevel` is not provided. Estimates for this limit can be obtained through the estimate fee API call.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  gasLimit?: string;
  /**
   * For blockchains with EIP-1559 support, the maximum price of gas, in gwei, to be used per each unit of gas (see `gasLimit`). Requires `gasLimit`. Cannot be used with `feeLevel`, `priorityFee`, or `maxFee`. Estimates for this fee can be obtained through the estimate fee API call.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  gasPrice?: string;
  /**
   * The maximum price per unit of gas (see `gasLimit`), in gwei. Requires `priorityFee`, and `gasLimit` to be present. Cannot be used with `feeLevel` or `gasPrice`. Estimates for this fee can be obtained through the estimate fee API call.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  maxFee?: string;
  /**
   * The “tip”, in gwei, to be added to the base fee as an incentive for validators.  Please note that the `maxFee` and `gasLimit` parameters are required alongside the `priorityFee`. The `feeLevel` and `gasPrice` parameters cannot be used with the `priorityFee`. Estimations for this fee can be obtained through the estimate fee API call.  The base fee represents the minimum fee required for a transaction to be included in a block on the blockchain. It is measured in gwei and compensates for the computational resources validators consume to process the transaction. The base fee is supplemented by a separate \"tip\" called the priority fee, which acts as an extra incentive for validators to prioritize the transaction. The priority fee is added to the base fee to calculate the final transaction fee.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  priorityFee?: string;
  /**
   * NftTokenIDs specify the nft ID list to be transferred/batchTransferred for NFT withdrawal. Note. Only erc1155 supports safeBatchTransferFrom.
   * @type {Array<string>}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  nftTokenIds?: Array<string>;
  /**
   * Optional reference or description used to identify the transaction.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  refId?: string;
  /**
   * The unique system generated identifier associated with the token.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  tokenId: string;
  /**
   * Unique system generated identifier of the wallet. Required when source Address and blockchain is not provided. Mutually exclusive. For contract deploys this wallet ID will be used as the source.
   * @type {string}
   * @memberof CreateTransferTransactionForDeveloperRequest
   */
  walletId: string;
}
