import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";
import { NotFound } from "../../components/NotFound/NotFound";

export const NotFoundPage = () => {
  return (
    <>
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    </>
  );
};
