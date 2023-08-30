import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Input,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoryList = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const onSubmit = () => {
    searchRepositories(term);

    setTerm("");
  };

  return (
    <div style={{ padding: 20 }}>
      <Stack spacing={4} direction="row" align="center">
        <Input
          placeholder="Search with package name"
          value={term}
          onChange={onChange}
        />
        <Button colorScheme="teal" onClick={onSubmit}>
          Search
        </Button>
      </Stack>
      <div style={{ padding: 10 }}>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Network Request Error!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {loading && (
          <Spinner
            thickness="6px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {!error &&
          !loading &&
          data.map((model) => {
            return <h1 key={model.name}>{model.npmUrl}</h1>;
          })}
      </div>
    </div>
  );
};
