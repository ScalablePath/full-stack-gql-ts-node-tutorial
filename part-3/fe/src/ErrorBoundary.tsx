import { Component, ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Something went wrong, logs the error.
    console.log(`An unexpected error has happened: ${errorInfo}`, error);
  }

  render(): React.ReactNode {
    // Display an error message to the user when an error occurs.
    if (this.state.hasError) {
      return (
        <h1>Something went wrong! Please refresh the page and try again.</h1>
      );
    }

    return this.props.children;
  }
}
