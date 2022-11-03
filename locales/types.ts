export interface Resources {
  pages: {
    home: {
      title: string;
      message: string;
    };
    orders: {
      title: string;
      message: string;
    };
  };
  forms: {
    label: string;
  };
  errors: {
    required: string;
    notfound: string;
  };
}
