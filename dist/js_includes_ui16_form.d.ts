/// <reference path="js_includes_doctype.d.ts" />

declare class GlideNavigation {
    /**
     * Redirects to another URL.
     * @param {string} url - URL to be loaded. It can be any URL supported by the browser
     * @param {*} [target] - the target frame. If left blank, the URL will load in the current frame
     * @memberof GlideNavigation
     */
    open(url: string, target?: any): void;

    openList(table: string, query?: string): void;
    
    /**
     * Redirects to a record
     * @param {string} table
     * @param {string} sys_id
     * @memberof GlideNavigation
     */
    openRecord(table: string, sys_id: string): void;
    
    /**
     * Reload the current frame
     * @memberof GlideNavigation
     */
    reloadWindow(): void;
    
    /**
     * Refresh the navigator contents
     * @memberof GlideNavigation
     */
    refreshNavigator(): void;
    
    getURL(): string;

    /**
     * Open a popup window with features
     * @param {string} url - The url to open
     * @param {string} name - The name of the new window
     * @param {string} [features] - a comma separated list of features. See https://developer.mozilla.org/en-US/docs/Web/API/Window/open.
     * @param {boolean} [noStack] - True to append sysparm_stack=no to the url. This prevents weirdness when using the form back button
     * @return {Window} the instance of newly opened Window
     * @memberof GlideNavigation
     */
    openPopup(url: string, name: string, features?: string, noStack?: boolean): Window;

    setPermalink(title: string, relativePath: string): void;

    addUserHistoryEntry(title: string, relativePath: string, description: string, isTable: boolean): void;
}

/**
 * Global object used in client-side scripts to customize forms
 */
declare const g_form: GlideForm;
