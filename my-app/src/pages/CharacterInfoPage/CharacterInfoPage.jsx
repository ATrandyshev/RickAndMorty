import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";
import { CharacterInfoContainer } from "../../containers/CharacterInfo/CharacterInfo";

export const CharacterInfoPage = () => {
  return (
    <ErrorBoundary>
      <CharacterInfoContainer />
    </ErrorBoundary>
  );
};
