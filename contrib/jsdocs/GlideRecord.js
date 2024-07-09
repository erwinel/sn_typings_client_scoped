/**
 * API for database operations.
 * @class GlideRecord
 */
/**
 * Creates an instance of the GlideRecord class for the specified table.
 * @param {string} tableName - The table to be used.
 * @memberof GlideRecord
 * @constructor
 */
/**
 * Adds a column to order by in the query.
 * @param {string} column - The column by which to order the result set.
 * @method addOrderBy
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return records using an encoded query string.
 * @param {QueryOperator} query - An encoded query string.
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Adds a query to return records where the specified field name is equal to a specified value (or is in a list of values).
 * @param {string} name - Name of the field to check.
 * @param {*} value - Value on which to query (not case-sensitive).
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return records where the field meets the specified condition (field, operator, value).
 * @param {string} name - Name of the field to check.
 * @param {QueryOperator} operator - Query operator.
 * @param {*} value - Value on which to query (not case-sensitive).
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Deletes the current record.
 * @param {GlideAjaxResultCallback<boolean>} [responseFunction] - The response function for the Ajax callback.
 * @returns {boolean} True if the record was deleted. False if no record was found to delete.
 * @method deleteRecord
 * @memberof GlideRecord
 */
/**
 * Executes a GlideRecord query for a record with the specified sys_id.
 * @param {string} sys_id - The sys_id of the record to be found.
 * @returns {boolean} True if one or more matching records was found. False if no records were found.
 * @method get
 * @memberof GlideRecord
 * @description This method is expected to be used to query for single records, so a next operation is performed before returning.
 */
/**
 * Gets the value of the specified column.
 * @param {string} column - The column name.
 * @returns {string}
 * @method getValue
 * @memberof GlideRecord
 */
/**
 * Retrieves the query condition of the current result set as an encoded query string.
 * @returns {string}
 * @method getEncodedQuery
 * @memberof GlideRecord
 */
/**
 * Returns the limit for records to be returned by the GlideRecord query.
 * @returns {number}
 * @method getLimit
 * @memberof GlideRecord
 */
/**
 * Retrieves the name of the table associated with this GlideRecord.
 * @returns {string}
 * @method getTableName
 * @memberof GlideRecord
 */
/**
 * Determines if there are any more records in the GlideRecord.
 * @returns {boolean} True if there are more records in the query set.
 * @method hasNext
 * @memberof GlideRecord
 */
/**
 * Initialize the GlideRecord as a new record.
 * @method initialize
 * @memberof GlideRecord
 */
/**
 * Inserts a new record using the field values that have been set for the current record.
 * @returns {string | null} - The sys_id of the inserted record, or null if the record was not inserted.
 * @method insert
 * @memberof GlideRecord
 */
/**
 * Inserts a new record using the field values that have been set for the current record.
 * @param {GlideAjaxResultCallback<string>} responseFunction - The response function.
 * @method insert
 * @memberof GlideRecord
 */
/**
 * Moves to the next record in the GlideRecord.
 * @returns {boolean} False if there are no more records in the query set.
 * @method next
 * @memberof GlideRecord
 */
/**
 * Specifies an orderBy column. May be called more than once to order by multiple columns.
 * @param {string} column - The column name to be used to order the result set.
 * @method orderBy
 * @memberof GlideRecord
 */
/**
 * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
 * @method query
 * @memberof GlideRecord
 */
/**
 * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
 * @param {Function} responseFunction - The response function for the Ajax callback.
 * @method query
 * @memberof GlideRecord
 */
/**
 * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
 * @param {string} name - The response function for the Ajax callback.
 * @param {string} value - The response function for the Ajax callback.
 * @param {Function} [responseFunction] - The response function for the Ajax callback.
 * @method query
 * @memberof GlideRecord
 */
/**
 * Sets the limit for how many records are in the GlideRecord.
 * @param {number} [maxQuery] - The limit for the number of records to retrieve.
 * @method setLimit
 * @memberof GlideRecord
 */
