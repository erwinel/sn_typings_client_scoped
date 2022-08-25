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