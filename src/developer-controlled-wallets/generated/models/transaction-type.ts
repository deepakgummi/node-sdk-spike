/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @enum {string}
 */

export const TransactionType = {
  Inbound: "INBOUND",
  Outbound: "OUTBOUND",
} as const;

export type TransactionType =
  typeof TransactionType[keyof typeof TransactionType];