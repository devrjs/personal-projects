import type { Knex } from "knex"
import { resolve } from "node:path"

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: resolve(__dirname, "src/database/database.db"),
    },
    pool: {
      afterCreate: (conn: any, cb: any) => conn.run("PRAGMA foreing_keys = ON", cb),
    },
    migrations: {
      directory: resolve(__dirname, "src/database/knex/migrations"),
    },
    useNullAsDefault: true,
  },
}

export default config

