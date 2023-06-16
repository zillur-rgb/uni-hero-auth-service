import { SortOrder } from 'mongoose';

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
};

type IOptionsResult = {
  page: number;
  limit: number;
  skip: number;
  sortBy: string;
  sortOrder: SortOrder;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
  // The value of page will come from request query or default value will be 1
  const page = Number(options.page || 1);
  // The value of limit will come from request query or default value will be 10
  const limit = Number(options.limit || 10);
  // The value of sortBy will come from request query or default value will be year
  const sortBy = options.sortBy || 'year';
  // The value of sortOrder will come from request query or default value will be desc
  const sortOrder = options.sortOrder || 'desc';

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  };
};

export const paginationHelpers = {
  calculatePagination,
};
