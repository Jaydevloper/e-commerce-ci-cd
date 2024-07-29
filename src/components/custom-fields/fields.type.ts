export type ComponentProps = {
  components: (props: unknown) => JSX.Element;
  name?: string;
};
