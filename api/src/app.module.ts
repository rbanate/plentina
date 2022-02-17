import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { LeadModule } from './leads/lead.module';

import config from '../ormconfig';
@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, LeadModule],
})
export class AppModule {}
