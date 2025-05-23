import { createAction } from '@reduxjs/toolkit';

export const replaceOffer = createAction<string>('offers/offer/replace');
export const removeFavoriteOffers = createAction('offers/removeFavorite');
