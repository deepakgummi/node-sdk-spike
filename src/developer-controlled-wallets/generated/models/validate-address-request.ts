/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Blockchain } from "./blockchain";

/**
 *
 * @export
 * @interface ValidateAddressRequest
 */
export interface ValidateAddressRequest {
  /**
   * The blockchain address generated upon wallet creation.
   * @type {string}
   * @memberof ValidateAddressRequest
   */
  address: string;
  /**
   *
   * @type {Blockchain}
   * @memberof ValidateAddressRequest
   */
  blockchain: Blockchain;
}
