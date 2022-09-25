/* eslint-disable prettier/prettier */
import AppError from 'shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer'; //dados do usuário
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomerService {
  public async execute({
    id,
    name,
    email,

  }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const custumer = await customersRepository.findById(id);

    if (!custumer) {
      throw new AppError('Costumer not found.');
    }

    const custumerExists = await customersRepository.findByEmail(email);

    if (custumerExists && email !== custumer.email) {
      throw new AppError('There is already one customer with this email.');
    }
    custumer.name = name;
    custumer.email = email;

    await customersRepository.save(custumer);

    return custumer;
  }
}

export default UpdateCustomerService;
