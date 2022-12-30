import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";
import { CharactersContainer } from "../../containers/Characters/Characters";

export const CharactersPage = () => {
  return (
    <ErrorBoundary>
      <CharactersContainer />
    </ErrorBoundary>
  );
};
