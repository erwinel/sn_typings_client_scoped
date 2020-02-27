/* ServiceNow Resource: /scripts/doctype/js_includes_last_doctype.js */

declare type ModalWidth = "modal-md" | "modal-alert" | "modal-sm" | "modal-lg";

/**
 * GlideModalV3 API - Provides methods for displaying a content overlay.
 * @class GlideModal
 * @description This is a fully-featured replacement for GlideWindow and GlideDialogWindow.
 * ServiceNow Resource: /scripts/classes/doctype/GlideModal.js
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
 * ServiceNow Resource: /scripts/classes/doctype/GlideModalForm.js
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