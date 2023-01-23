export interface ServiceConfig {
    version: string;
    port: number;
    [key: string]: any;
}
export interface Config {
    services: {
        [serviceName: string]: ServiceConfig;
    };
    db: {
        uri: string;
    };
}
export declare const config: Config;
