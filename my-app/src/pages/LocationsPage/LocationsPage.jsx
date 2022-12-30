import ErrorBoundary from "../../components/ErrorBoundry/ErrorBoundry";
import { LocationsCharactersContainer } from "../../containers/Locations/LocationsCharacters";

export const LocationsPage = () => {
  return (
    <ErrorBoundary>
      <LocationsCharactersContainer />
    </ErrorBoundary>
  );
};
