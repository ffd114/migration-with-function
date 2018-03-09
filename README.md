**Issue type:**

* [ ] question
* [X] bug report
* [ ] feature request
* [ ] documentation issue

**Database system/driver:**

* [ ] `cordova`
* [ ] `mongodb`
* [ ] `mssql`
* [ ] `mysql` / `mariadb`
* [ ] `oracle`
* [X] `postgres`
* [ ] `sqlite`
* [ ] `sqljs`
* [ ] `websql`

**TypeORM version:**

* [X] `latest`
* [ ] `@next`
* [ ] `0.x.x` (or put your version here)

**Steps to reproduce or a small repository showing the problem:**

1. Create entity, e.g: `User` with column `email`
2. Generate and run migration `typeorm migrations:generate -n Init && typeorm migrations:run`
3. Add new column `createdAt` with `default` set to `() => 'NOW()'`
4. Generate and run migration `typeorm migrations:generate -n AlterCreated && typeorm migrations:run`
5. Add new column `name`
6. If we generate migration again `typeorm migrations:generate -n Test`, the queries that generated because the changes on step 3 will show up again