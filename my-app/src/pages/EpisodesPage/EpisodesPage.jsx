import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";
import { EpisodesharactersContainer } from "../../containers/Episodes/EpisodesCharacters";

export const EpisodesPage = () => {
  return (
    <ErrorBoundary>
      <EpisodesharactersContainer />
    </ErrorBoundary>
  );
};
