import { ExceptionlessClient } from "exceptionless";

export class Exceptionless {

    private static client:ExceptionlessClient;

    static createClient(apiKey: string, serverUrl: string): void {
        Exceptionless.client = new ExceptionlessClient(apiKey,serverUrl);
    }

    static createLog(projectName: string, message: string, logLevel: string, tags: string[]): void {
        if(Exceptionless.client instanceof ExceptionlessClient) {
            Exceptionless.client.createLog(projectName, message, logLevel).addTags(...tags).submit();
        } else {
            console.log("A log cannot be created as a client doesnt exist.");
        }
    }

}