// ErrorBoundary.tsx
import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundaryでエラーをキャッチ:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>エラーが発生しました。しばらくしてから再度お試しください。</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
