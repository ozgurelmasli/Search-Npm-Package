import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export type SearchSuccessModel = {
  name: string;
  npmUrl: string;
};

interface SearchRepositoriesActionSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: SearchSuccessModel[];
}

interface SearchRepositoriesActionError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesActionSuccess
  | SearchRepositoriesActionError;
