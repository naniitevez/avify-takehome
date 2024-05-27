import React from "react";

const ErrorComponent: React.FC<{ errorMessage: string }> = ({
  errorMessage,
}) => {
  return (
    <div className="error-message">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
