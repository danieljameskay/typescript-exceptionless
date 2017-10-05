export declare class Exceptionless {
    private static client;
    static createClient(apiKey: string, serverUrl: string): void;
    static createLog(projectName: string, message: string, logLevel: string, tags: string[]): void;
}
