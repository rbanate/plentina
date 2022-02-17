import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  // host: '127.0.0.1',
  // port: 3307,
  username: 'root',
  password: 'p@ssw0rd1',
  database: 'plentina',
  entities: ['dist/**/**.entity{.ts,.js}'],
  // entities: ['src/**/**.entity.ts'],
  synchronize: false,
  migrations: ['dist/src/db/migration/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export default config;
