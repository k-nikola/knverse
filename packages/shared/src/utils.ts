import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as path from 'path'

export interface ServiceConfig {
  version: string
  port: number
  [key: string]: any
}
export interface Config {
  services: {
    [serviceName: string]: ServiceConfig
  }
  db: {
    uri: string
  }
}
// Load config from YAML file
export const config: Config = yaml.load(
  fs.readFileSync(path.join(__dirname, '../config.yml'), 'utf8')
) as Config
