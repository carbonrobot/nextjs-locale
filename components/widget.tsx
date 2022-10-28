interface WidgetProps {
  message: string;
}

export const Widget = ({ message }: WidgetProps) => {
  return (
    <div>
      <p>Widget Data - {message}</p>
    </div>
  )
};
