/* ServiceNow Resource: /scripts/classes/doctype/js_includes_listv2_doctype.js */

/**
 * JavaScript class used to customize (v2) lists.
 * @class GlideList2
 * @description The g_list variable is not available to the related lists form link UI action. It is available to the lists form link UI action.
 * ServiceNow Resource: /scripts/classes/doctype/GlideList2.js
 */
declare abstract class GlideList2 {
    /**
     * Adds a single term to the list query filter.
     * @param {string} filter - Query string condition to add.
     * @memberof GlideList2
     */
    addFilter(filter: string): void;
    /**
     * Returns the GlideList2 object for the list that contains the specified item.
     * @param {string} id - The list or DOM Element ID for which you want the GlideList2 object.
     * @returns {(GlideList2 | null)}
     * @memberof GlideList2
     */
    get(id: string): GlideList2 | null;
    /**
     * Returns a comma-separated list of the sys_ids for the items that are checked in the list.
     * @returns {string} Comma-separated list of the sys_ids for the items that are checked in the list. Does not check to determine that the items returned are allowed to be executed.
     * @memberof GlideList2
     */
    getChecked(): string;
    /**
     * Returns the sysparm_fixed query.
     * @returns {string} The fixed query string for the list.
     * @memberof GlideList2
     * @description A fixed query is the part of the query that cannot be removed from the breadcrumb (i.e., it is fixed for the user). It is specified by including a sysparm_fixed_query parameter for the application module.
     */
    getFixedQuery(): string;
    /**
     * Returns the field or comma-separated list of fields that are used to group the list.
     * @returns {string} The field or comma-separated list of fields that are used to group the list.
     * @memberof GlideList2
     */
    getGroupBy(): string;
    /**
     * Returns the name of the list, which is usually the table name.
     * @returns {string} The list name (usually the table name).
     * @memberof GlideList2
     */
    getListName(): string;
    /**
     * Returns the first field used to order the list.
     * @returns {string} The field used for order, or a blank.
     * @memberof GlideList2
     */
    getOrderBy(): string;
    /**
     * Returns the name of the parent table for a related list (the table associated with the form).
     * @type {string} he parent table name.
     * @memberof GlideList2
     */
    getParentTable(): string;
    /**
     * Returns the encoded query string for the list.
     * @param {boolean} [orderBy] - If true, includes the orderBy in the encoded query string.
     * @param {boolean} [groupBy] - If true, includes the groupBy in the encoded query string.
     * @param {boolean} [fixed] - If true, includes fixed query in the encoded query string.
     * @param {boolean} [all] - If true, includes orderBy, groupBy, and fixed query.
     * @returns {string} Encoded query string for the list.
     * @memberof GlideList2
     */
    getQuery(orderBy?: boolean, groupBy?: boolean, fixed?: boolean, all?: boolean): string;
    /**
     * Returns the related list field that associates the related list to the parent form.
     * @returns {string} Field that connects the list to the parent form.
     * @memberof GlideList2
     */
    getRelated(): string;
    /**
     * Returns the table name for the list.
     * @returns {string} Returns the table name for the list.
     * @memberof GlideList2
     */
    getTableName(): string;
    /**
     * Returns the list title.
     * @returns {string} The list title.
     * @memberof GlideList2
     */
    getTitle(): string;
    /**
     * Returns the view used to display the list.
     * @returns {string} The name of the view.
     * @memberof GlideList2
     */
    getView(): string;
    /**
     * Returns true if the list has been personalized by the user by choosing the list mechanic and changing the list layout.
     * @returns {boolean} True if the list layout has been changed.
     * @memberof GlideList2
     */
    isUserList(): boolean;
    /**
     * Refreshes the list.
     * @param {number} [firstRow] - The first row to appear in the list. If not specified, the first row of the current is used.
     * @param {string} [additionalParms] - name-value pairs that are submitted with the list refresh request.
     * @memberof GlideList2
     * @description The orderBy part of the list filter is ignored so that the list uses its natural ordering when it is refreshed.
     */
    refresh(firstRow?: number, additionalParms?: string): void;
    /**
     * Refreshes the list.
     * @param {number} [firstRow] - The first row to appear in the list.
     * @param {string} [description] - name=value pairs that are submitted with the list refresh request.
     * @memberof GlideList2
     * @description The orderBy part of the list filter is included if it is specified for the list.
     */
    refreshWithOrderBy(firstRow?: number, description?: string): void;
    /**
     * Sets the encoded query string for the list, ignoring the orderBy and groupBy parts of the query string.
     * @param {string} filter - Encoded query string.
     * @memberof GlideList2
     */
    setFilter(filter: string): void;
    /**
     * Sets the encoded query string for the list, including the orderBy and groupBy if specified, and then refreshes the list using the new filter.
     * @param {string} filter - Encoded query string.
     * @memberof GlideList2
     */
    setFilterAndRefresh(filter: string): void;
    /**
     * Sets the first row that appears in the list when the list is refreshed.
     * @param {number} rowNum - Row number of the first row to display.
     * @memberof GlideList2
     */
    setFirstRow(rowNum: number): void;
    /**
     * Sets the groupBy criteria for the list, for a single field or multiple fields.
     * @param {string} groupBy - The groupBy criteria for the list.
     * @memberof GlideList2
     * @description For a single field, use field or groupByField. The groupBy prefix is optional. For multiple fields, use field1^field2^field3 or groupByField1^groupByField2^groupByField3.
     */
    setGroupBy(groupBy: string): void;
    /**
     * Sets the orderBy criteria for the list.
     * @param {string} orderBy - Single or multiple order by fields.
     * @memberof GlideList2
     * @description For a single order by field use orderBy field or orderByDescField. For multiple fields, use orderByField1^orderByField2^orderByField3. orderBy specifies ascending order and orderByDesc specifies descending. These prefix strings are optional. If not specified orderBy is assumed.
     */
    setOrderBy(orderBy: string): void;
    /**
     * Sets the number of rows per page to display.
     * @param {number} rows - The number of rows to display
     * @memberof GlideList2
     */
    setRowsPerPage(rows: number): void;
    /**
     * Shows or hides all the groups within the list and saves the current collapsed/expanded state of the groups as a user preference.
     * @param {boolean} showFlag - If true, shows the groups within the list.
     * @memberof GlideList2
     */
    showHideGroups(showFlag: boolean): void;
    /**
     * Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference.
     * @param {boolean} showFlag - If true, displays the list.
     * @memberof GlideList2
     */
    showHideList(showFlag: boolean): void;
    /**
     * Sorts the list in ascending order and saves the choice.
     * @param {string} field - Specifies the field used to sort the list.
     * @memberof GlideList2
     */
    sort(field: string): void;
    /**
     * Sorts the list in descending order and saves the choice.
     * @param {string} field - Specifies the field used to sort the list.
     * @param {number} [amount] - 
     * @memberof GlideList2
     */
    sortDescending(field: string, amount?: number): void;
    /**
     * Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference.
     * @memberof GlideList2
     */
    toggleList(): void;
    /**
     * Toggles the display of the list but does not save the current collapsed/expanded state of the list as a user preference.
     * @memberof GlideList2
     */
    toggleListNoPref(): void;
}

declare var g_list: GlideList2 | null | undefined;