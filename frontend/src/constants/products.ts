import bbpost from '../images/bbpost-terminal.png';
import stripe from '../images/stripe-terminal.png';
import { IProduct } from '../types/product.type';

export const products: IProduct[] = [
  {
    id: 1,
    title: 'STRIPE READER S700',
    image: stripe,
    alt: 'stripe-terminal',
    description:
      'A versatile handheld payment terminal that supports various payment methods, including EMV chip, contactless, and mobile wallets, offering a seamless checkout experience for businesses.',
    price: '349',
    info: `The Stripe Reader S700 is a sleek, all-in-one point-of-sale terminal designed for seamless in-person payments. It supports a wide range of payment methods, including chip cards, contactless payments, and mobile wallets like Apple Pay and Google Pay.`,
  },
  {
    id: 2,
    title: 'BBPOS WISEPOS E',
    image: bbpost,
    alt: 'bbpost-terminal',
    description:
      'A sleek countertop payment terminal designed for easy integration with Stripe, enabling fast and secure in-person transactions with support for multiple payment types.',
    price: '249',
    info: `The BBPOS WisePOS E is a compact countertop payment terminal designed for fast, secure in-person transactions. It integrates easily with Stripe, supporting a variety of payment methods, including chip cards, contactless payments, and mobile wallets.`,
  },
];
