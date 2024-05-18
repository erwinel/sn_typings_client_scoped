/// <reference path="js_includes_ui16_form.d.ts" />
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
 * The current user.
 */
declare const g_user: GlideUser;

/**
 * Navigation API.
 */
declare const g_navigation: GlideNavigation;