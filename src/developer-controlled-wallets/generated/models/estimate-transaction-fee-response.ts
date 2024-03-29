/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { EstimatedTransactionFee } from "./estimated-transaction-fee";

/**
 *
 * @export
 * @interface EstimateTransactionFeeResponse
 */
export interface EstimateTransactionFeeResponse {
  /**
   *
   * @type {EstimatedTransactionFee}
   * @memberof EstimateTransactionFeeResponse
   */
  high?: EstimatedTransactionFee;
  /**
   *
   * @type {EstimatedTransactionFee}
   * @memberof EstimateTransactionFeeResponse
   */
  low?: EstimatedTransactionFee;
  /**
   *
   * @type {EstimatedTransactionFee}
   * @memberof EstimateTransactionFeeResponse
   */
  medium?: EstimatedTransactionFee;
  /**
   * One of ERC-4337 gas fields. The amount of gas to allocate for the main execution call. Only in smart contract account estimation response.
   * @type {string}
   * @memberof EstimateTransactionFeeResponse
   */
  callGasLimit?: string;
  /**
   * One of ERC-4337 gas fields. The amount of gas to allocate for the verification step. Only in smart contract account estimation response.
   * @type {string}
   * @memberof EstimateTransactionFeeResponse
   */
  verificationGasLimit?: string;
  /**
   * One of ERC-4337 gas fields. The amount of gas to pay to compensate the bundler for pre-verification execution and call data. Only in smart contract account estimation response.
   * @type {string}
   * @memberof EstimateTransactionFeeResponse
   */
  preVerificationGas?: string;
}
