module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "typeorm_test",

    entities: ["entity/*{.ts,.js}"],
    migrations: ["migration/*{.ts,.js}"],
    cli: {
        migrationsDir: "migration"
    }
}