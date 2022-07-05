/// <reference path="js_includes_doctype.d.ts" />

declare class GlideNavigation {
    open(url: string, target?: any): void;
    openList(table: string, query?: string): void;
    openRecord(table: string, sys_id: string): void;
    reloadWindow(): void;
    refreshNavigator(): void;
    getURL(): string;
    openPopup(url: string, name: string, features?: string, noStack?: boolean): Window;
    setPermalink(title: string, relativePath: string): void;
    addUserHistoryEntry(title: string, relativePath: string, description: string, isTable: boolean): void;
}

declare var g_form: GlideForm;
