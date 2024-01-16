import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'john123',
      roles: ['ADMIN']
    },
    {
      userId: 2,
      username: 'maria',
      password: 'maria123',
      roles: ['ADMIN']
    },
    {
      userId: 1,
      username: 'teja',
      password: 'teja123',
      roles: ['USER']
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async addProfile(usersDto: UsersDto) {
    
    // sample code for example
    this.users.push(usersDto); 

    // Write code here to add user in table instead of above code.

    return this.users.find(user => user.username === usersDto.username);
  }

  async editProfile(usersDto: UsersDto) {

    // sample code for example
    let user=this.users.find(user => user.userId === usersDto.userId);
    user.password=usersDto.password;
    user.username=usersDto.username;
    
    // Write code here to update user in table instead of above code.

    return user;
  }

  async deleteProfile(usersDto: UsersDto) {
    
    // Write code here to delete user in table instead of above code.

    return this.users;
  }
}