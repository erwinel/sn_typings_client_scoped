/**
 * Add listener for top window render event.
 *
 * @param {TimerHandler} cb Callback to invoke
 */
declare function addTopRenderEvent(cb: TimerHandler): void;
/**
 * Checks whether render event listener is registered.
 *
 * @param {Function} func The render event listener.
 * @returns {boolean} true if listener is registered; otherwise, false.
 */
declare function isRenderEventRegistered(func: Function): boolean;
declare function addRenderEvent(cb: TimerHandler): void;
declare function addLoadEvent(cb: TimerHandler): void;
declare function addLateLoadEvent(cb: TimerHandler): void;
declare function addAfterPageLoadedEvent(cb: TimerHandler): void;
declare function addUnloadEvent(cb: EventListener): void;
declare function getTopWindow(): Window;
declare function isTopWindow(): boolean;
declare function inFrame(): boolean;
declare function getMainWindow(): Window;
declare function getMainFormWindow(): Window;
declare function getNavWindow(): Window;
/**
 * Writes to the log.
 *
 * @param {*} msg The message to write.
 * @param {string} [src] The relative source URL.
 * @param {Date} [dateTime] The date/time of the event.
 */
declare function jslog(msg: any, src?: string, dateTime?: Date): void;
/**
 * Evaluates a script.
 *
 * @param {string} s The script to evaluate.
 * @param {boolean} [evalGlobal] If true, this evaluated globally (on the top window).
 * @returns {*} The return value of the script evaluation.
 */
declare function evalScript(s: string, evalGlobal?: boolean): any;
declare function htmlEscape(s: string): string;
declare function htmlEscapeQuote(s: string): string;
declare function htmlEscapeDoubleQuote(s: string): string;
declare function trim(s: string): string;
declare function hide(element: string | Element): void;
declare function show(element: string | Element): void;
declare function isHex(num: string): boolean;
declare function isEmailValid(value: string): boolean;
declare function isEmailValidWithReason(value: string): string;
declare function formatCurrency(num: number | string): string;
declare function formatNumber(num: number | string): string;
declare function formatCents(amount: number | string): string;
declare function formatDollar(amount: number | string): string;
declare function padLeft(value: any, width: number, fill: string): string;
declare function getDecimalSeparator(): string;
declare function getGroupingSeparator(): string;
declare function doubleDigitFormat(amount: number | string): string;
declare function tripleDigitFormat(amount: number | string): string;
declare function isNumber(test: any): boolean;
declare function isAlphaNum(test: any): boolean;
declare function isDigit(test: any): boolean;
declare function replaceAll(str: string, from: string, to: string): string;
declare function getHeight(el: Element): number;
declare function getWidth(el: Element): number;
declare function guid(l?: number): string;
declare function getFormattedDateAndTime(date?: Date): string;
declare function getFormattedDate(date?: Date): string;
declare function getFormattedTime(date?: Date): string;
declare function getBrowserWindowHeight(): number;
declare function getBrowserWindowWidth(): number;
declare function WindowSize(): { width: number; height: number; };
declare function getScrollBarWidthPx(): number;
declare function getDateFromFormat(val: any, format: string): Date;
declare function parseDate(val: any): Date | null;
declare function compareDates(date1: any, dateformat1: string, date2: any, dateformat2: string): number;
declare function isDate(val: any, format: string): boolean;
declare function getDurationString(ms: number): string;
declare function getUserDateTime(): Date;
declare function convertUtcTimeToUserTimeMs(utcTimeMs: number): number;
declare function convertUserTimeToUtcTimeMs(utcTimeMs: number): number;
declare function getActiveUser(): GlideUser;

/**
 * API for database operations.
 * @class GlideRecord
 */
declare class GlideRecord {
    /**
     * Creates an instance of the GlideRecord class for the specified table.
     * @param {string} tableName - The table to be used.
     * @memberof GlideRecord
     * @constructor
     */
    constructor(tableName: string);

    /**
     * Adds a column to order by in the query.
     * @param {string} column - The column by which to order the result set.
     * @memberof GlideRecord
     */
    addOrderBy(column: string): void;
    /**
     * Adds a filter to return records using an encoded query string.
     * @param {QueryOperator} query - An encoded query string.
     * @memberof GlideRecord
     */
    addQuery(query: string): void;
    /**
     * Adds a query to return records where the specified field name is equal to a specified value (or is in a list of values).
     * @param {string} name - Name of the field to check.
     * @param {*} value - Value on which to query (not case-sensitive).
     * @memberof GlideRecord
     */
    addQuery(name: string, value: any): void;
    /**
     * Adds a filter to return records where the field meets the specified condition (field, operator, value).
     * @param {string} name - Name of the field to check.
     * @param {QueryOperator} operator - Query operator.
     * @param {*} value - Value on which to query (not case-sensitive).
     * @memberof GlideRecord
     */
    addQuery(name: string, operator: QueryOperator, value: any): void;
    /**
     * Deletes the current record.
     * @param {GlideAjaxResultCallback<boolean>} [responseFunction] - The response function for the Ajax callback.
     * @returns {boolean} True if the record was deleted. False if no record was found to delete.
     * @memberof GlideRecord
     */
    deleteRecord(responseFunction?: GlideAjaxResultCallback<boolean>): boolean;
    /**
     * Executes a GlideRecord query for a record with the specified sys_id.
     * @param {string} sys_id - The sys_id of the record to be found.
     * @returns {boolean} True if one or more matching records was found. False if no records were found.
     * @memberof GlideRecord
     * @description This method is expected to be used to query for single records, so a next operation is performed before returning.
     */
    get(sys_id: string): boolean;
    /**
     * Gets the value of the specified column.
     * @param {string} column - The column name.
     * @returns {string}
     * @memberof GlideRecord
     */
    getValue(column: string): string;
    /**
     * Retrieves the query condition of the current result set as an encoded query string.
     * @returns {string}
     * @memberof GlideRecord
     */
    getEncodedQuery(): string;
    /**
     * Returns the limit for records to be returned by the GlideRecord query.
     * @returns {number}
     * @memberof GlideRecord
     */
    getLimit(): number;
    /**
     * Retrieves the name of the table associated with this GlideRecord.
     * @returns {string}
     * @memberof GlideRecord
     */
    getTableName(): string;
    /**
     * Determines if there are any more records in the GlideRecord.
     * @returns {boolean} True if there are more records in the query set.
     * @memberof GlideRecord
     */
    hasNext(): boolean;
    /**
     * Initialize the GlideRecord as a new record.
     * @memberof GlideRecord
     */
    initialize(): void;
    /**
     * Inserts a new record using the field values that have been set for the current record.
     * @returns {string | null} - The sys_id of the inserted record, or null if the record was not inserted.
     * @memberof GlideRecord
     */
    insert(): string | null;
    /**
     * Inserts a new record using the field values that have been set for the current record.
     * @param {GlideAjaxResultCallback<string>} responseFunction - The response function.
     * @memberof GlideRecord
     */
    insert(responseFunction: GlideAjaxResultCallback<string | null>): void;
    /**
     * Moves to the next record in the GlideRecord.
     * @returns {boolean} False if there are no more records in the query set.
     * @memberof GlideRecord
     */
    next(): boolean;
    /**
     * Specifies an orderBy column. May be called more than once to order by multiple columns.
     * @param {string} column - The column name to be used to order the result set.
     * @memberof GlideRecord
     */
    orderBy(column: string): void;
    /**
     * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
     * @memberof GlideRecord
     */
    query(): void;
    /**
     * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
     * @param {Function} responseFunction - The response function for the Ajax callback.
     * @memberof GlideRecord
     */
    query(responseFunction: Function): void;
    /**
     * Runs the query against the table based on the addQuery() filter. This queries the GlideRecord table as well as any references of the table.
     * @param {string} name - The response function for the Ajax callback.
     * @param {string} value - The response function for the Ajax callback.
     * @param {Function} [responseFunction] - The response function for the Ajax callback.
     * @memberof GlideRecord
     */
    query(name: string, value: string, responseFunction?: Function): void;
    /**
     * Sets the limit for how many records are in the GlideRecord.
     * @param {number} [maxQuery] - The limit for the number of records to retrieve.
     * @memberof GlideRecord
     */
    setLimit(maxQuery: number): void;
    [key: string]: any;
}

//type GlideRecordConstructor = (new (tableName: string) => GlideRecord);

declare type GlideAjaxResultCallback<T> = Function & { (result: T): void; };
declare type GetGlideRecordCallback<T extends GlideRecord> = Function & { (gr: T): void; };

declare type GlideFormFieldMessageType = "error" | "info" | "warning";

/**
 * Provides methods to customize forms.
 * @interface GlideForm
 * @description This is typically accesed through the variable g_form.
*/
declare abstract class GlideForm {
    /**
     * Adds an icon on a field's label.
     * @param {string} fieldName - The field name.
     * @param {DecorationFontIcon} icon -The font icon to show next to the field.
     * @param {string} title - The text title for the icon.
     * @param {string} [color] - A CSS color.
     * @memberof GlideForm
     */
    addDecoration(fieldName: string, icon: DecorationFontIcon, title: string, color?: string): void;
    /**
     * Displays the error message at the top of the form.
     * @param {string} message - The message to display.
     * @memberof GlideForm
     */
    addErrorMessage(message: string): void;
    /**
     * Adds an informational message to the top of the form.
     * @param {string} message - The message to display.
     * @memberof GlideForm
     */
    addInfoMessage(message: string): void;
    /**
     * Adds a choice to the end of a choice list field.
     * @param {string} fieldName - The field name.
     * @param {string} choiceValue - The value to be stored in the database.
     * @param {string} choiceLabel - The value displayed.
     * @param {number} [choiceIndex] - Order of the choice in the list as a zero-based index.
     * @memberof GlideForm
     */
    addOption(fieldName: string, choiceValue: string, choiceLabel: string, choiceIndex?: number): void;
    /**
     * Removes all informational and error messages from the top of the form.
     * @memberof GlideForm
     */
    clearMessages(): void;
    /**
     * Removes all options from the choice list.
     * @param {string} fieldName - The field name.
     * @memberof GlideForm
     */
    clearOptions(fieldName: string): void;
    /**
     * Removes any value(s) from the field.
     * @param {string} fieldName - The field name.
     * @memberof GlideForm
     */
    clearValue(fieldName: string): void;
    /**
     * Prevents file attachments from being added.
     * @memberof GlideForm
     */
    disableAttachments(): void;
    /**
     * Allows file attachments to be added. Shows the paper clip icon.
     * @memberof GlideForm
     */
    enableAttachments(): void;
    /**
     * Used to draw attention to a particular field. Flashes the specified color for a specified duration of time in the specified field.
     * @param {string} fieldName - The field name.
     * @param {string} color - RGB color or acceptable CSS color.
     * @param {GlideFormFlashDuration} count - Specifies how long the label will flash.
     * @memberof GlideForm
     * @description This method is not supported by Service Catalog.
     */
    flash(fieldName: string, color: string, count: GlideFormFlashDuration): void;
    /**
     * Returns the most recent action name, or, for a client script, the sys_id of the UI action clicked.
     * @returns {string}
     * @memberof GlideForm
     * @description Not available in Wizard client scripts.
     */
    getActionName(): string;
    /**
     * Returns a Boolean value for the specified field.
     * @param {string} fieldName - The field name.
     * @returns {boolean}
     * @memberof GlideForm
     */
    getBooleanValue(fieldName: string): boolean;
    /**
     * Returns the HTML element for the specified field.
     * @param {string} fieldName - The field name.
     * @returns {HTMLElement}
     * @memberof GlideForm
     * @description Compound fields may contain several HTML elements. This method is generally not necessary as there are built-in methods that use the fields on a form.
     */
    getControl(fieldName: string): HTMLElement;
    /**
     * Returns the decimal value of the specified field.
     * @param {string} fieldName - The field name.
     * @returns {string}
     * @memberof GlideForm
     */
    getDecimalValue(fieldName: string): string;
    /**
     * Returns the HTML element specified by the parameter.
     * @param {string} id -
     * @returns {HTMLElement}
     * @memberof GlideForm
     * @description This method is not available in mobile scripts or Service Portal scripts.
     *  Compound fields may contain several HTML elements. This method is generally not necessary as there are built-in methods that use the fields on a form.
     */
    getElement(id: string): HTMLElement;
    /**
     * Returns the HTML element for the form.
     * @returns {HTMLElement}
     * @memberof GlideForm
     * @description This method is not available in mobile scripts or Service Portal scripts.
     */
    getFormElement(): HTMLFormElement;
    /**
     * Returns the HTML element of the help text for the specified field.
     * @param {string} fieldName - The field name.
     * @returns {HTMLElement}
     * @memberof GlideForm
     * @description This method is applicable to service catalog variables only.
     */
    getHelpTextControl(fieldName: string): HTMLElement;
    /**
     * Returns the integer value of the field.
     * @param {string} fieldName - The field name.
     * @returns {number}
     * @memberof GlideForm
     */
    getIntValue(fieldName: string): number;
    /**
     * Returns the plain text value of the field label.
     * @param {string} fieldName - The field name.
     * @returns {string}
     * @memberof GlideForm
     */
    getLabelOf(fieldName: string): string;
    /**
     * Returns the option element for a selected box named fieldName where choiceValue matches the option value.
     * @param {string} fieldName - The field name.
     * @param {string} choiceValue -
     * @returns {HTMLElement}
     * @memberof GlideForm
     * @description This method does not work on read-only fields.
     */
    getOption(fieldName: string, choiceValue: string): HTMLElement;
    /**
     * Returns the GlideRecord for a specified field.
     * @param {string} fieldName - The field name.
     * @returns {GlideRecord}
     * @memberof GlideForm
     * @description This routine runs synchronously and processing halts (causing the browser to appear to hang) while waiting on a server response.
     */
    getReference<T extends GlideRecord>(fieldName: string): T;
    /**
     * Asynchronously gets the GlideRecord for a specified field.
     * @param {string} fieldName - The field name.
     * @param {GlideRecordCallback} choiceValue - The callback function.
     * @memberof GlideForm
     */
    getReference<T extends GlideRecord>(fieldName: string, callBack: GetGlideRecordCallback<T>): void;
    /**
     * Returns all section names, whether visible or not.
     * @returns {string[]}
     * @memberof GlideForm
     */
    getSectionNames(): string[];
    /**
     * Returns an array of the form's sections.
     * @returns {HTMLElement[]}
     * @memberof GlideForm
     */
    getSections(): HTMLElement[];
    /**
     * Returns the name of the table to which this record belongs.
     * @returns {string}
     * @memberof GlideForm
     */
    getTableName(): string;
    /**
     * Returns the sys_id of the record displayed in the form.
     * @returns {string}
     * @memberof GlideForm
     */
    getUniqueValue(): string;
    /**
     * Returns the value of the specified field.
     * @param {string} fieldName - The field name.
     * @returns {string}
     * @memberof GlideForm
     */
    getValue(fieldName: string): string;
    /**
     * Hides all field messages.
     * @param {GlideFormFieldMessageType} [type] - If specified, only messages of this type are hidden.
     * @memberof GlideForm
     */
    hideAllFieldMsgs(GlideFormFieldMessageType?: string): void;
    /**
     * Hides the error message placed by showErrorBox().
     * @param {string} fieldName - The field name.
     * @memberof GlideForm
     * @description Whenever possible, use hideFieldMsg() rather than this method whenever possible.
     */
    hideErrorBox(fieldName: string): void;
    /**
     * Hides messages placed by showFieldMsg().
     * @param {string} fieldName - The field name.
     * @param {boolean} [clearAll] - When true, all messages for the field are cleared; otherwise, only the last message is removed.
     * @memberof GlideForm
     */
    hideFieldMsg(fieldName: string, clearAll?: boolean): void;
    /**
     * Hides the specified related list on the form.
     * @param {string} listTableName - Name of the related list. Use the sys_id to hide a list through a relationship.
     * @memberof GlideForm
     */
    hideRelatedList(listTableName: string): void;
    /**
     * Hides all related lists on the form.
     * @memberof GlideForm
     */
    hideRelatedLists(): void;
    /**
     * Returns true while a live update is being done on the record the form is showing.
     * @returns {boolean}
     * @memberof GlideForm
     */
    isLiveUpdating(): boolean;
    /**
     * Returns true if the field is mandatory.
     * @param {string} fieldName - The field name.
     * @returns {boolean}
     * @memberof GlideForm
     */
    isMandatory(fieldName: string): boolean;
    /**
     * Returns true if the record has never been saved.
     * @returns {boolean}
     * @memberof GlideForm
     */
    isNewRecord(): boolean;
    /**
     * Returns true if the section is visible.
     * @param {string} sectionName - The name of the section.
     * @returns {boolean}
     * @memberof GlideForm
     * @description The section name is lower case with an underscore replacing the first space in the name, and with the remaining spaces being removed, for example "Section Four is Here" becomes "section_fourishere".
     */
    isSectionVisible(sectionName: string): boolean;
    /**
     * You can update a list collector variable.
     * @param {string} fieldName - Name of the slush bucket.
     * @memberof GlideForm
     */
    refreshSlushbucket(fieldName: string): void;
    /**
     * Removes the specified option from the choice list.
     * @param {string} fieldName - The field name.
     * @param {string} choiceValue - The value stored in the database. This is not the label.
     * @memberof GlideForm
     */
    removeOption(fieldName: string, choiceValue: string): void;
    /**
     * Removes the icon from the specified field that matches the icon and title.
     * @param {string} fieldName - The field name.
     * @param {DecorationFontIcon} icon - Name of the icon to remove.
     * @param {string} title - The icon's text title (name).
     * @param {string} [color] - A CSS color
     * @memberof GlideForm
     * @description This method is not supported by Service Catalog.
     */
    removeDecoration(fieldName: string, icon: DecorationFontIcon, title: string, color?: string): void;
    /**
     * Saves the record without navigating away (update and stay).
     * @memberof GlideForm
     */
    save(): void;
    /**
     * Makes the specified field available or unavailable.
     * @param {string} fieldName - The field name.
     * @param {boolean} disable - When true disables the field. When false enables the field.
     * @memberof GlideForm
     */
    setDisabled(fieldName: string, disable: boolean): void;
    /**
     * Displays or hides a field.
     * @param {string} fieldName - The field name.
     * @param {boolean} display - When true displays the field, when false hides the field.
     * @memberof GlideForm
     * @description This method cannot hide a mandatory field with no value.
     */
    setDisplay(fieldName: string, display: boolean): void;
    /**
     * Sets the plain text value of the field label.
     * @param {string} fieldName - The field name.
     * @param {string} label - The field text label.
     * @memberof GlideForm
     * @description This method is not supported by Service Catalog.
     */
    setLabelOf(fieldName: string, label: string): void;
    /**
     * Makes the specified field mandatory.
     * @param {string} fieldName - The field name.
     * @param {boolean} mandatory - When true makes the field mandatory. When false makes the field optional.
     * @memberof GlideForm
     * @description Whenever possible, use a UI policy instead of this method.
     */
    setMandatory(fieldName: string, mandatory: boolean): void;
    /**
     * Makes the specified field read only or editable.
     * @param {string} fieldName - The field name.
     * @param {boolean} readOnly - When true makes the field read only. When false makes the field editable.
     * @memberof GlideForm
     * @description Whenever possible, use a UI policy instead of this method.
     */
    setReadOnly(fieldName: string, readOnly: boolean): void;
    /**
     * Sets the value of a field.
     * @param {string} fieldName - The field name.
     * @param {string | number} value - Value in the database.
     * @memberof GlideForm
     * @description The method setValue() can cause a stack overflow when used in an OnChange client script.
     *  When defining a value in a choice list, be sure to use number value rather than the label.
     *  To improve performance by preventing a round trip, use the displayValue parameter.
     */
    setValue(fieldName: string, value: string | number): void;
    /**
     * Sets the value of a field.
     * @param {string} fieldName - The field name.
     * @param {string | number} value - The choice value or System ID for the reference value in the database. Can be an array of system IDs if the field is a glide-list.
     * @param {string} displayValue - Display name for the referenced value in the database. Can be an array of display names if the field is a glide-list.
     * @memberof GlideForm
     * @description The method setValue() can cause a stack overflow when used in an OnChange client script.
     *  When defining a value in a choice list, be sure to use number value rather than the label.
     */
    setValue(fieldName: string, value: string | number, displayValue: string): void;
    /**
     * Shows or hides a section.
     * @param {string} sectionName - The name of the section.
     * @param {boolean} display - When true shows the section. When false hides the section.
     * @memberof GlideForm
     * @description The section name is lower case with an underscore replacing the first space in the name, and with the remaining spaces being removed, for example "Section Four is Here" becomes "section_fourishere".
     */
    setSectionDisplay(sectionName: string, display: boolean): void;
    /**
     * Displays or hides the field.
     * @param {string} fieldName - The field name.
     * @param {boolean} display - When true displays the field. When false hides the field.
     * @memberof GlideForm
     * @description On desktop UI, the space is left blank when hidden. On Mobile or Service Portal UI, the space is filled in my other fields when hidden. This method cannot hide mandatory fields with no value.
     *  Use UI Policy rather than this method whenever possible.
     */
    setVisible(fieldName: string, display: boolean): void;
    /**
     * Displays an error message under the specified form field (either a control object or the name of the field).
     * @param {string} name - Name of the field or control.
     * @param {string} message - Message to display.
     * @param {boolean} [scrollForm] - When false, the form does not scroll to the field; otherwise, the form scrolls to the control or field.
     * @memberof GlideForm
     */
    showErrorBox(name: string, message: string, scrollForm?: boolean): void;
    /**
     * Displays either an informational or error message under the specified form field (either a control object or the name of the field).
     * @param {string} field - The field name.
     * @param {string} message - Message to display.
     * @param {GlideFormFieldMessageType} type - The message type.
     * @param {boolean} [scrollForm] - When false, the form does not scroll to the field; otherwise, the form scrolls to the control or field.
     * @memberof GlideForm
     * @description This method does not work with the journal_field type field in UI16.
     *  The showErrorBox() method is a shorthand method that does not require the type parameter.
     */
    showFieldMsg(field: string, message: string, type: GlideFormFieldMessageType, scrollForm?: boolean): void;
    /**
     * Displays the specified related list on the form.
     * @param {string} listTableName - Name of the related list.
     * @memberof GlideForm
     */
    showRelatedList(listTableName: string): void;
    /**
     * Displays all the form's related lists.
     * @memberof GlideForm
     */
    showRelatedLists(): void;
    /**
     * Saves the record.
     * @param {string} [verb] - Name of UI action to be performed. The action name must be for a visible form button.
     * @memberof GlideForm
     * @description If the action verb is not specified, the user is taken away from the form, returning them to where they were.
     */
    submit(verb?: string): void;
}

/**
 * Provides access to information about the current user and current user roles.
 * @interface GlideUser
 */
declare class GlideUser {
    /**
     * Returns the current user's first name.
     * @type {string}
     * @memberof GlideUser
     */
    readonly firstName: string;
    /**
     * Returns the current user's last name.
     * @type {string}
     * @memberof GlideUser
     */
    readonly lastName: string;
    /**
     * Returns the sys_id of the current user.
     * @type {string}
     * @memberof GlideUser
     */
    readonly userID: string;
    /**
     * Returns the current user's username.
     * @type {string}
     * @memberof GlideUser
     */
    readonly userName: string;
    /**
     * Returns a session client value previously set with putClientData().
     * @param {string} key - Name of the client data to retrieve.
     * @returns {string}
     * @memberof GlideUser
     */
    getClientData(key: string): string;
    /**
     * Returns the first and last name of the current user.
     * @returns {string}
     * @memberof GlideUser
     */
    getFullName(): string;
    /**
     * Returns true if the current user has the specified or admin role.
     * @param {string} role - Role to check.
     * @param {boolean} [includeDefaults] - Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request.
     * @returns {boolean}
     * @memberof GlideUser
     */
    hasRole(role: string, includeDefaults?: boolean): boolean;
    /**
     * Returns true only if the current user has the specified role.
     * @param {string} role - Role to check.
     * @param {boolean} [includeDefaults] - Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request.
     * @returns {boolean}
     * @memberof GlideUser
     */
    hasRoleExactly(role: string, includeDefaults?: boolean): boolean;
    /**
     * Returns true if the current user has at least one of the specified roles or has the admin role.
     * @param {string} role - Comma-separated list of roles to check.
     * @param {boolean} [includeDefaults] - Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request.
     * @returns {boolean}
     * @memberof GlideUser
     */
    hasRoleFromList(role: string, includeDefaults?: boolean): boolean;
    /**
     * Returns true if the current user has any role.
     * @param {boolean} [includeDefaults] - Flag that indicates whether to include default roles, such as snc_internal and snc_external, in the request.
     * @returns {boolean}
     * @memberof GlideUser
     */
    hasRoles(includeDefaults?: boolean): boolean;
}

/**
 * The current user.
 */
declare var g_user: GlideUser;

/**
 * GlideDialogWindow API - Provides methods for displaying a dialog in the current window and frame.
 * @class GlideDialogWindow
 */
declare class GlideDialogWindow {
    /**
     * Creates an instance of the GlideDialogWindow class.
     * @param {string} [id] The UI page to load into the modal.
     * @param {boolean} [readOnly] When true, hides the close button.
     * @param {number} [width] The width in pixels.
     * @param {number} [height] The height in pixels.
     * @memberof GlideModal
     */
    constructor(id?: string, readOnly?: boolean, width?: number, height?: number);

    adjustBodySize(): void;

    /**
     * Closes the dialog window.
     * @memberof GlideDialogWindow
     */
    destroy(): void;

    /**
     * Get a GlideDialogWindow object by ID.
     * @param {string} [id] The element id of the GlideDialogWindow object or null to get the current GlideDialogWindow object.
     * @returns {GlideDialogWindow} The GlideDialogWindow.
     * @memberof GlideDialogWindow
     * @static
     */
    static get(id?: string): GlideDialogWindow;

    /**
     * Returns the value of the specified property.
     * @param {string} name The property name
     * @returns {*} The specified property's value
     * @memberof GlideDialogWindow
     */
    getPreference(name: string): any;

    /**
     *
     * @param {string} evtName
     * @param {Function} callbackFn
     * @memberof GlideDialogWindow
     * @description Event names include 'bodyrendered', 'closeconfirm', and 'beforeclose'.
     * @example
     * var gm: GlideDialogWindow = new GlideDialogWindow('my_dialog');
     * gm.on('closeconfirm', function (gm: GlideModal): boolean {
     *      return canCancel == true;
     * });
     */
    on(evtName: string, callbackFn: Function): void;

    removeCloseDecoration(): void;

    /**
     * Renders the UI page in the modal.
     * @memberof GlideDialogWindow
     */
    render(): void;

    /**
     * Sets the body of the dialog.
     * @param {string} html The dialog body.
     * @param {boolean} [noEvaluate] If true, scripts won't be evaluated.
     * @memberof GlideDialogWindow
     */
    setBody(html: string, noEvaluate?: boolean): void;

    /**
     * Set a property that is read by the loaded UI page.
     * @param {string} name The property name
     * @param {*} value The property value
     * @memberof GlideDialogWindow
     */
    setPreference(name: string, value: any): void;

    /**
     * Set the width in pixels or predefined sizes.
     * @param {number} [width] The width of the dialog window.
     * @param {number} [height] The height of the dialog window.
     * @memberof GlideDialogWindow
     */
    setSize(width?: number, height?: number): void;

    /**
     * Sets the title of the modal.
     * @param {string} title The title to be displayed
     * @memberof GlideDialogWindow
     */
    setTitle(title: string): void;

}

declare class Template {
    template: string;
    pattern: string;
    constructor(template: any);
    evaluate(object: any): any;
}

declare class XMLTemplate extends Template {
    constructor($super: any, id: any);
}

declare var ScriptLoader: {
    getScripts(scripts: any, callback: any): void;
}

declare var GlideEvent: {
    WINDOW_CLICKED: 'glide:window_clicked';
    WINDOW_BLURRED: 'glide:window_blurred';
    WINDOW_FOCUSED: 'glide:window_focused';
    IMAGE_PICKED: 'glide:image_picked';
    NAV_MANAGER_LOADED: 'glide:nav_manager_loaded';
    NAV_FORM_DIRTY_CANCEL_STAY: 'glide:nav_form_dirty_cancel_stay';
    NAV_SYNC_LIST_WITH_FORM: 'glide:nav_sync_list_with_form';
    NAV_LOAD_FORM_FROM_LIST: 'glide:nav_load_form_from_list';
    NAV_SAVE_PREFERENCES: 'glide:nav_save_preferences';
    NAV_UPDATE_EDGE_BUTTON_STATES: 'glide:nav_update_edge_button_states';
    NAV_OPEN_URL: 'glide:nav_open_url';
    NAV_ADD_BOOKMARK: 'glide:nav_add_bookmark';
    NAV_REMOVE_BOOKMARK: 'glide:nav_remove_bookmark';
    NAV_UPDATE_BOOKMARK: 'glide:nav_update_bookmark';
    NAV_DRAGGING_BOOKMARK_START: 'glide:nav_dragging_bookmark_start';
    NAV_DRAGGING_BOOKMARK_STOP: 'glide:nav_dragging_bookmark_stop';
    NAV_HIDE_ALL_TOOLTIPS: 'glide:nav_hide_all_tooltips';
    NAV_QUEUE_BOOKMARK_OPEN_FLYOUT: 'glide:nav_queue_bookmark_open_flyout';
    NAV_OPEN_BOOKMARK: 'glide:nav_open_bookmark';
    NAV_BOOKMARK_ADDED: 'glide:nav_bookmark_added';
    NAV_BOOKMARK_REMOVED: 'glide:nav_bookmark_removed';
    NAV_EAST_PANE_RESIZED: 'glide:nav_east_pane_resized';
    NAV_ADD_FLYOUT: 'glide:nav_add_flyout';
    NAV_REMOVE_FLYOUT: 'glide:nav_remove_flyout';
    NAV_TOGGLE_FLYOUT: 'glide:nav_toggle_flyout';
    NAV_HIDE_FLYOUTS: 'glide:nav_hide_flyouts';
    NAV_PANE_CLICKED: 'glide:nav_window_clicked'
};

declare var userAgentLowerCase: boolean;
declare var isMSIE: boolean;
declare var ie5: boolean;
declare var isMSIE6: boolean;
declare var isMSIE7: boolean;
declare var isMSIE8: boolean;
declare var isMSIE9: boolean;
declare var isMSIE10: boolean;
declare var isMSIE11: boolean;
declare var isChrome: boolean;
declare var isFirefox: boolean;
declare var isSafari: boolean;
declare var isSafari5: boolean;
declare var isMacintosh: boolean;
declare var isWebKit: boolean;
declare var isTouchDevice: boolean;
declare var isMicrosoftXMLHTTP: boolean;

declare class GwtObservable {
    constructor();
    on(name: any, func: any): void;
    forward(name: any, element: any, func: any): void;
    un(name: any, func: any): void;
    unAll(name: any): void;
    isFiring(): any;
    fireEvent(): boolean;
}

declare class Point<X, Y> {
    constructor(x: X, y: Y);
    getX(): X;
    getY(): Y;
}

declare class CookieJar {
    appendString: "__CJ_";
    constructor(options: any);
    put(name: any, value: any): boolean;
    get(name: any): any;
}

declare class GwtMessage {
    DEFAULT_LANGUAGE: "en";
    PREFETCH_ENTRY_KEY: "PREFETCH_ENTRY_KEY";
    constructor();
    set(n: any, v: any): void;
    format(msg: any): string;
    getMessage(strVal: any): string;
    getMessages(resolveList: any): { [key: string]: string; };
    setMessage(key: any, msg: any): void;
    isDefaultLanguage(): boolean;
    getLanguage(): string;
    getDefaultLanguage(): string;
    fetch(resolveList: any, callback: any): void;
    fetched(response: any, parms: any): void;
}

declare class GlideFilterDescription {
    constructor();
    setParsedQuery(strVal): void;
    getParsedQuery(): any;
    setBaseLine(value): void;
    getBaseLine(): any;
    setMetaData(value): void;
    getMetaData(): any;
    setPreferenceParam(value): void;
    getPreferenceParam(): any;
    setExpanded(value): void;
    getExpanded(): any;
    setName(value): void;
    getName(): any;
    setFilter(value) : void;
    getFilter(): any;
    setTableName(value): void;
    getTableName(): any;
    setPinned(value): void;
    getPinned(): any;
    setMainFilterTable(filterTable): void;
    getMainFilterTable(): any;
    setPinnable(value): void;
    getPinnable(): any;
    setShowRelated(value): void;
    getShowRelated(): any;
    setChoiceListMap(value): void;
    getChoiceList(table): any;
}

declare class GlideFilterHandler {
    constructor(tableName: any, item: any, mappingId?: any);
    destroy(): void;
    create(tr: any, values: any, filterClass: any): void;
    getTableName(): any;
    getFilterText(oper: any): string;
    setOriginalTable(tableNameFull: any): void;
    getValues(): any;
    selectRightOperand(select: any, selection: any): void;
    rightOperandfieldOnChange(table: any, t: any): void;
    addChoices(s: any, target: any, fValue: any, filterMethod: any, fieldName: any, filter: any, showRelated: any, leftOperandElement: any): any;
    setFilterClass(filterClass: any): void;
    getFilterClass(): any;
    initMappingSupport(shouldEnable: any, type: any, mappingMgr: any): void;
    destroyMappingSupport(): void;
    activateMapping(): void;
    deactivateMapping(): void;
    getMappingValue(): any;
    setMappingValue(value: any): void;
}

declare class GlideFilterString extends GlideFilterHandler { }

declare class GlideFilterNumber extends GlideFilterString { }

declare class GlideFilterDuration extends GlideFilterHandler { }

declare class GlideFilterStringMulti extends GlideFilterString { }

declare class GlideFilterChoice extends GlideFilterHandler {
    setChoices(choices: any): void;
    setWidth(width: any): void;
    setMulti(multi: any): void;
    setSize(size: any): void;
}

declare class GlideFilterChoiceDynamic extends GlideFilterChoice {
    amendLabel(i: any): any;
}

declare class GlideFilterCurrency extends GlideFilterString {
    constructor(tableName: any, item: any);
}

declare class GlideDuration {
    MAX_UNIT_DAYS: 4;
    MAX_UNIT_HOURS: 3;
    MAX_UNIT_MINUTES: 2;
    MAX_UNIT_SECONDS: 1;
    constructor(value: any, item: any);
    buildHTML(parent: any): void;
    getDays(): any;
    getHours(): any;
    getMinutes(): any;
    getSeconds(): any;
    getValue(): any;
    getAriaLabel(id: any): any;
    static parseDurationToParts(value: any): any;
}

declare class GlideFilterReference extends GlideFilterHandler { }

declare class GlideFilterVariables extends GlideFilterHandler { }

declare class GlideFilterVariablesChoiceDynamic extends GlideFilterChoiceDynamic { }

declare class GlideFilterQuestions extends GlideFilterVariables { }

declare class GlideFilterItemVariables extends GlideFilterVariables { }

declare class GlideFilterVariableMap extends GlideFilterHandler { }

declare class GlideFilterLabels extends GlideFilterHandler { }

declare class GlideFilterReferenceMulti extends GlideFilterReference { }

declare class GlideFilterDate extends GlideFilterHandler {
    SYS_DATE_FORMAT: "yyyy-MM-dd";
    SYS_TIME_FORMAT: "HH:mm:ss";
    SYS_DATE_TIME_FORMAT: "yyyy-MM-dd HH:mm:ss";
    initBetweenMapping(value1: any, value2: any): void;
    initAlphaMapping(value: any): void;
    emTemplate: {
        makeBtn(): JQuery<HTMLButtonElement>;
        makeField(): JQuery<HTMLElement>;
        makeInput(): JQuery<HTMLInputElement>;
    };
}

declare class GlideEventHandler {
    handlerName: any;
    handler: any;
    fieldName: any;
    constructor(handlerName: any, handler: any, fieldName: any);
}

declare class GlideUIElement {
    CACHE_ELEMENTS: boolean;
    ENABLE_CHILD_WALKING: boolean;
    constructor(tableName: string, fieldName: string, type: any, mandatory: boolean, reference: any, attributes: any, scope: any);
    getType(): any;
    getID(): string;
    getElementParentNode(): Element;
    getElement(): Element;
    getLabelElement(): Element;
    getStatusElement(): Element;
    getChildElementById(id: string): Element;
    getChildElementById0(id: string): Element;
    isMandatory(): boolean;
    isDerived(): boolean;
    setMandatory(mandatory: boolean): void;
    getScope(): any;
    type: "GlideUIElement";
}

declare class GlideURL {
    constructor(contextPath?: string);
    setFromCurrent(): void;
    setFromString(href): void;
    getContexPath(): string;
    getContextPath(): string;
    setContextPath(c): void;
    getParam(p: string): string;
    getParams(): { [key: string]: string; }
    addParam(name, value): GlideURL;
    addToken(): GlideURL;
    deleteParam(name): void;
    addEncodedString(s): void;
    getQueryString(additionalParams: { [key: string]: string; }): string;
    getURL(additionalParams: { [key: string]: string; }): string;
    setEncode(b): void;
    static refresh(): void;
}

declare interface AjaxErrorResponse extends Pick<XMLHttpRequest, 'status' | 'statusText' | 'responseText'>, Partial<Pick<XMLHttpRequest, 'responseXML'>> {
    error: string;
    description: string;
    responseJSON?: any;
}
declare class GlideAjax {
    constructor(processor: string, targetURL?: string);
    addParam(parm_name: string, parm_value: string): void;
    getParam(name: string): string;
    getParams(): { [key: string]: string };
    getAnswer(): void;
    getProcessor(): string;
    getURL(): string;
    getXML(callback: GlideAjaxResultCallback<XMLHttpRequest>): void;
    getXMLAnswer(callback: GlideAjaxResultCallback<string>): void;
    getXMLWait(): void;
    setErrorCallback(callback: GlideAjaxResultCallback<AjaxErrorResponse>): void;
    setProcessor(serverScript: string): void;
}

declare class GlideAjaxForm extends GlideAjax {
    constructor($super: any, templateName: string);
    getRenderedBodyText(callback: GlideAjaxResultCallback<String>): void;
    setPreference(k: string, v: any): void;
    getPreferences(): { [key: string]: any; };
    getSysparmValue(): string;
}