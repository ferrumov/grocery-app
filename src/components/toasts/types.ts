export type RenderProps = { id: string };

export type ErrorProps = {
  title?: string;
  message?: string;
};

export type ErrorToastProps = RenderProps & ErrorProps;
