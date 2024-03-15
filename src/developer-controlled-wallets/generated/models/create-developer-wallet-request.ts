/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { AccountType } from "./account-type";
// May contain unused imports in some cases
// @ts-ignore
import { Blockchain } from "./blockchain";
// May contain unused imports in some cases
// @ts-ignore
import { WalletMetadata } from "./wallet-metadata";

/**
 *
 * @export
 * @interface CreateDeveloperWalletRequest
 */
export interface CreateDeveloperWalletRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests. To create a UUIDv4 go to [uuidgenerator.net](https://www.uuidgenerator.net). If the same key is reused, it will be treated as the same request and the original response will be returned.
   * @type {string}
   * @memberof CreateDeveloperWalletRequest
   */
  idempotencyKey: string;
  /**
   *
   * @type {AccountType}
   * @memberof CreateDeveloperWalletRequest
   */
  accountType?: AccountType;
  /**
   * Blockchain(s) the requested wallets will be created on.
   * @type {Array<Blockchain>}
   * @memberof CreateDeveloperWalletRequest
   */
  blockchains: Array<Blockchain>;
  /**
   * Number of wallets that will be created per specified blockchain.
   * @type {number}
   * @memberof CreateDeveloperWalletRequest
   */
  count?: number;
  /**
   * A base64 string expression of the entity secret ciphertext. The entity secret should be encrypted by the entity public key. Circle mandates that the entity secret ciphertext is unique for each API request.
   * @type {string}
   * @memberof CreateDeveloperWalletRequest
   */
  entitySecretCiphertext: string;
  /**
   * List of metadata fields to associate with the corresponding wallet. If count is specified, the amount of items in the array should match the count field.
   * @type {Array<WalletMetadata>}
   * @memberof CreateDeveloperWalletRequest
   */
  metadata?: Array<WalletMetadata>;
  /**
   * Unique system generated identifier of the wallet\'s parent wallet set. under.
   * @type {string}
   * @memberof CreateDeveloperWalletRequest
   */
  walletSetId: string;
}