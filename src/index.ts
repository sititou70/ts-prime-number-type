import {
  GetInitialSieve,
  SieveOfEratosthenes,
  SieveToNumbers,
} from './eratosthenes';
import { NumberToNatural } from './natural';

type PrimeNumbers = SieveToNumbers<
  SieveOfEratosthenes<GetInitialSieve<NumberToNatural<300>>>
>;

const primes: PrimeNumbers = 'string';
