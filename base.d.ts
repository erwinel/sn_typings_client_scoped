/// <reference path="js_includes_doctype.d.ts" />

declare type StringQueryOperator = "=" | "!=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF";
declare type NumberQueryOperator = "=" | "!=" | ">" | ">=" | "<" | "<=";
declare type QueryOperator = StringQueryOperator | NumberQueryOperator;
//declare type YEAR_FORMAT_TOKENS = 'y' | 'yy' | 'yyyy';
//declare type MONTH_FORMAT_TOKENS = 'M' | 'MM' | 'MMM' | 'NNN' | 'MMMM';
//declare type DAY_FORMAT_TOKENS = 'd' | 'dd' | 'E' | 'EE';
//declare type WEEK_FORMAT_TOKENS = 'w' | 'ww';
//declare type DAY_OF_WEEK_FORMAT_TOKEN = 'D';
//declare type HOUR_FORMAT_TOKENS = 'h' | 'hh' | 'H' | 'HH' | 'k' | 'K' | 'KK';
//declare type MINUTE_FORMAT_TOKENS = 'm' | 'mm';
//declare type APMPM_FORMAT_TOKEN = 'a';
//declare type GMT_FORMAT_TOKEN = 'z';
//declare type SECOND_FORMAT_TOKENS = 's' | 'ss';
//declare type DATE_FORMATS_GENERAL = 'yyyy-MM-dd' | 'y-M-d' | 'MMM d, y' | 'MMM d,y' | 'y-MMM-d' | 'd-MMM-y' | 'MMM d';
//declare type DATE_FORMATS_MONTH_FIRST = 'M/d/y' | 'M-d-y' | 'M.d.y' | 'MMM-d' | 'M/d' | 'M-d';
//declare type DATE_FORMATS_DATE_FIRST = 'd/M/y' | 'd-M-y' | 'd.M.y' | 'd-MMM' | 'd/M' | 'd-M';
//declare type DATE_FORMATS_YEAR_FIRST = 'yyyyw.F' | 'yyw.F';
//declare type DATE_FORMATS = DATE_FORMATS_GENERAL | DATE_FORMATS_MONTH_FIRST | DATE_FORMATS_DATE_FIRST | DATE_FORMATS_YEAR_FIRST;
//declare type TIME_FORMATS = "HH:mm:ss" | "hh:mm:ss a" | "hh:mm:ss" | "h:mm:ss a" | "h:mm:ss" | "HH:mm:ss" | "hh:mm a" | "hh:mm" | "h:mm a" | "h:mm";
//declare type DATETIME_FORMATS = "yyyy-MM-ddTHH:mm:ss" | "yyyy-MM-ddTHH:mm:ssz" | "M/d/y hh:mm:ss a" | "MM/dd/yyyy hh:mm:ss" | "M/d/y h:mm:ss a" | "M/d/y h:mm:ss" | "yyyy-MM-dd HH:mm:ss" | "MM/dd/yyyy hh:mm a" | "MM/dd/yyyy hh:mm" | "h:mm a" | "h:mm";

//var MONTH_NAMES = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
//var DAY_NAMES = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

/**
 * Global glide variable.
 */
declare var glide: {
    ui: {
        /**
         * Controls automatic message scrolling.
         * @type {boolean}
         */
        scroll_to_message_field: boolean;
    };
}

/**
 * Scratchpad object
 * @interface IScratchPad
 * @description This is typically accessed through the variable named g_scratchpad.
 */
declare interface IScratchPad {
    [key: string]: any;
}
declare type DecorationFontIcon = "icon-user" | "icon-user-group" | "icon-lightbulb" | "icon-home" | "icon-mobile" | "icon-comment" | "icon-mail" | "icon-locked" | "icon-database" | "icon-book" | "icon-drawer" | "icon-folder" |
    "icon-catalog" | "icon-tab" | "icon-cards" | "icon-tree-right" | "icon-tree" | "icon-book-open" | "icon-paperclip" | "icon-edit" | "icon-trash" | "icon-image" | "icon-search" | "icon-power" | "icon-cog" |
    "icon-star" | "icon-star-empty" | "icon-new-ticket" | "icon-dashboard" | "icon-cart-full" | "icon-view" | "icon-label" | "icon-filter" | "icon-calendar" | "icon-script" | "icon-add" | "icon-delete" | "icon-help" |
    "icon-info" | "icon-check-circle" | "icon-alert" | "icon-sort-ascending" | "icon-console" | "icon-list" | "icon-form" | "icon-livefeed";

declare enum GlideFormFlashDuration {
    oneSecond = 2,
    twoSeconds = 0,
    threeSeconds = -2,
    fourSeconds = -4
}

/**
 * JavaScript class used to customize (v2) lists.
 * @class GlideList2
 * @description The g_list variable is not available to the related lists form link UI action. It is available to the lists form link UI action.
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

declare abstract class spUtil {
    static addErrorMessage(message: string): void;
    static addInfoMessage(message: string): void;
    static addTrivialMessage(message: string): void;
    static format(template: string, data: any): string;
    static get(widgetId: string, data: any): object;
    static recordWatch<T>($scope: ng.IScope, table: string, filter: string, callback: { (response: any): T; } & Function): Promise<T>;
    static refresh($scope: ng.IScope): any;
    static update($scope: ng.IScope): any;
}

declare type ModalWidth = "modal-md" | "modal-alert" | "modal-sm" | "modal-lg";

/**
 * GlideModalV3 API - Provides methods for displaying a content overlay.
 * @class GlideModal
 * @description This is a fully-featured replacement for GlideWindow and GlideDialogWindow.
 */
declare class GlideModal {
    /**
     * Creates an instance of the GlideModalV3 class.
     * @param {string} [id] The UI page to load into the modal.
     * @param {boolean} [readOnly] When true, hides the close button.
     * @param {number} [width] The width in pixels.
     * @param {number} [height] The height in pixels.
     * @memberof GlideModal
     */
    constructor(id?: string, readOnly?: boolean, width?: number, height?: number);

    /**
     * 
     * @memberof GlideModal
     */
    applyAutoFocus();

    /**
     * Closes the dialog window.
     * @memberof GlideModal
     */
    destroy(): void;

    /**
     * 
     * @param {string} evtName
     * @param {...any[]} args
     * @returns {boolean}
     * @memberof GlideModal
     */
    fireEvent(evtName: string, ...args: any[]): boolean;

    /**
     * Get a GlideModal object by ID.
     * @param {string} [id] The element id of the GlideModal object or null to get the current GlideModel object.
     * @returns {GlideModal} The GlideModal
     * @memberof GlideModal
     */
    get(id?: string): GlideModal;

    /**
     * 
     * @returns {string}
     * @memberof GlideModal
     */
    getDescribingText(): string;

    /**
     * 
     * @returns {Element}
     * @memberof GlideModal
     */
    getDescribingXML(): Element;

    /**
     * 
     * @returns {string}
     * @memberof GlideModal
     */
    getID(): string;

    /**
     * Returns the value of the specified property.
     * @param {string} name The property name
     * @returns {*} The specified property's value
     * @memberof GlideModal
     */
    getPreference(name: string): any;

    /**
     * 
     * @returns {{ [key: string]: *; }}
     * @memberof GlideModal
     */
    getPreferences(): { [key: string]: any; };

    /**
     * Finds the parent modal window for a DOM element.
     * @param {Element} domElement The child DOM elelement.
     * @returns {GlideModal | null} The modal window or null if the window was not found.
     * @memberof GlideModal
     */
    locate(domElement: Element): GlideModal | null;

    /**
     * 
     * @param {{ (d: GlideModal); }} callback
     * @memberof GlideModal
     */
    maximizeHeight(callback: { (d: GlideModal); }): void;

    /**
     *
     * @param {string} evtName
     * @param {Function} callbackFn
     * @memberof GlideModal
     * @description Event names include 'bodyrendered', 'closeconfirm', and 'beforeclose'.
     * @example
     * var gm: GlideModal = new GlideModal('x_44813_usasoc_cst_profile_incomplete_warning');
     * gm.on('closeconfirm', function (gm: GlideModal): boolean {
     *      return canCancel == true;
     * });
     */
    on(evtName: string, callbackFn: Function): void;

    /**
     * Renders the UI page in the modal.
     * @memberof GlideModal
     */
    render(): void;

    /**
     * 
     * @param {string} url
     * @param {Function} onloadCallback
     * @memberof GlideModal
     */
    renderIframe(url: string, onloadCallback: Function): void;

    /**
     * Display a modal with the specified HTML content.
     * @param {(string | object)} html The HTML content to be shown in the modal.
     * @memberof GlideModal
     */
    renderWithContent(html: string | object): void;

    /**
     * 
     * @param {boolean} isAutoFullHeight
     * @memberof GlideModal
     */
    setAutoFullHeight(isAutoFullHeight: boolean): void;

    /**
     * 
     * @param {boolean} makeStatic
     * @memberof GlideModal
     */
    setBackdropStatic(makeStatic: boolean): void;

    /**
     * Sets the body of the dialog.
     * @param {string} html The dialog body.
     * @param {boolean} [noEvaluate] If true, scripts won't be evaluated.
     * @memberof GlideModal
     */
    setBody(html: string, noEvaluate?: boolean): void;

    /**
     *
     * @param {string} dialogName
     * @memberof GlideModal
     */
    setDialog(dialogName: string): void;

    /**
     * 
     * @param {string} body
     * @memberof GlideModal
     */
    setEscapedBody(body: string): void;

    /**
     *
     * @param {Element} el
     * @memberof GlideModal
     */
    setFocus(el: Element): void;

    /**
     *
     * @param {boolean} nolog
     * @memberof GlideModal
     */
    setNologValue(nolog: boolean): void;

    /**
     * Set a property that is read by the loaded UI page.
     * @param {string} name The property name
     * @param {*} value The property value
     * @memberof GlideModal
     */
    setPreference(name: string, value: any): void;

    /**
     * Set the properties and reload the modal.
     * @param {{ [key: string]: string; }} properties Name-value pairs to be set.
     * @memberof GlideModal
     */
    setPreferenceAndReload(properties: { [key: string]: any; }): void;

    /**
     *
     * @param {XMLDocument} xml
     * @memberof GlideModal
     */
    setPreferencesFromBody(xml: XMLDocument): void;

    /**
     * Set the width in pixels or predefined sizes.
     * @param {(number | ModalWidth)} width The width in pixels or predefined width name.
     * @memberof GlideModal
     */
    setSize(width: number | ModalWidth): void;

    /**
     * Sets the title of the modal.
     * @param {string} title The title to be displayed
     * @memberof GlideModal
     */
    setTitle(title: string): void;

    /**
     * Set the width in pixels or predefined sizes.
     * @param {(number | ModalWidth)} width The width in pixels or predefined width name.
     * @memberof GlideModal
     */
    setWidth(width: number | ModalWidth): void;

    /**
     * Change the view and reload the modal.
     * @param {string} newView The view to use.
     * @memberof GlideModal
     */
    switchView(newView: string): void;

    /**
     * Updates the modal element title.
     * @memberof GlideModal
     */
    updateTitle(): void;

    /**
     * Updates the modal element size.
     * @memberof GlideModal
     */
    updateSize(): void;
}

/**
 * Callback used by {@link GlideModalForm#setCompletionCallback}.
 * @callback GlideModalForm~onCompletionCallback
 * @param {string} action_verb The name of the UI action executed. Examples are sysverb_insert (Submit button), sysverb_cancel, sysverb_save (Save button).
 * @param {string} sys_id The sys_id of the affected record.
 * @param {string} table The name of the table containing the record.
 * @param {string} displayValue The affected rcord display value.
 */
declare interface GlideModalFormCompletionCallback {
    (action_verb: string, sys_id: string, table: string, displayValue: string): void;
}

/**
 * Displays a form in a GlideModal.
 * @class GlideModalForm
 * @description General usage of the GlideModalForm class involves creating the object, setting any preferences, and then rendering the GlideModalForm.
 * The GlideFormModal is set to fill the height of the document window.
 */
declare class GlideModalForm {
    /**
     * Creates an instance of the GlideModalForm class.
     * @param {string} title The form title.
     * @param {string} [tableName] The table being shown.
     * @param {GlideModalFormCompletionCallback} [onCompletionCallback] The function to call after the form has been submitted and processed on the server.
     * @param {boolean} [readOnly]
     * @memberof GlideModalForm
     */
    constructor(title: string, tableName?: string, onCompletionCallback?: GlideModalFormCompletionCallback, readOnly?: boolean);

    /**
     *
     * @param {boolean} bool
     * @memberof GlideModalForm
     */
    setFooter(bool: boolean): void;

    /**
     * Sets the object's sys_id preference.
     * @param {string} id The id preference. One of the query parameters passed to the form.
     * @memberof GlideModalForm
     */
    setSysID(id: string): void;

    /**
     * 
     * @param {string} template
     * @memberof GlideModalForm
     */
    setTemplate(template: string): void;

    /**
     * Sets the function to be called when the form has been successfully submitted and processed by the server.
     * @param {GlideModalFormCompletionCallback} func The callback function to be called when the form has been successfully processed.
     * @memberof GlideModalForm
     */
    setCompletionCallback(func: GlideModalFormCompletionCallback): void;

    /**
     * Sets the function to be called after the form has been loaded.
     * @param {{ (obj: GlideModalForm): void; }} func The function to be called after the form has been loaded.
     * @memberof GlideModalForm
     */
    setOnloadCallback(func: { (obj: GlideModalForm): void; }): void;

    /**
     * Shows the form.
     * @memberof GlideModalForm
     */
    render(): void;

    /**
     * Change the view and reload the modal.
     * @param {string} newView The view to use.
     * @memberof GlideModal
     */
    switchView(newView: string): void;

    /**
     * Set the properties and reload the modal.
     * @param {{ [key: string]: string; }} properties Name-value pairs to be set.
     * @memberof GlideModal
     */
    setPreferenceAndReload(properties: { [key: string]: string; }): void;

    /**
     * Sets the specified parameter to the specified value.
     * @param {string} name The parameter name.
     * @param {string} value The parameter value.
     * @memberof GlideModalForm
     */
    addParm(name: string, value: string): void;
}
