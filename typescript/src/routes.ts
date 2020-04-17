import { Request, Response } from 'express';
import CreateUser from './CreateUser';

export function HelloTypescript(request: Request, response: Response) {
  const user = CreateUser({
    name: 'Jean Barbosa',
    email: 'jeanbarbosa@email.com',
    password: '123456',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'JavaScript', expirience: 80 },
      { title: 'TypeScript', expirience: 5 },
    ]
  })
  return response.json({ message: 'Hello TypeScript!', user });
};
