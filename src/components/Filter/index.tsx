import { RiApps2Fill, RiEqualizerLine } from "@remixicon/react";
import { Container, ContainerFilter, ContainerInfo, Icon } from "./styles";
import filter from "../../assets/svg/filter.svg";

interface FilterProps {
  resultsStart: number;
  resultsEnd: number;
  totalResults: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export function Filter({
  resultsStart,
  resultsEnd,
  totalResults,
  pageSize,
  setPageSize,
  sortBy,
  setSortBy
}: FilterProps) {
  return (
    <Container>
      <ContainerFilter>
        <RiEqualizerLine />
        Filter
        <a href="/">
          <RiApps2Fill size={28} />
        </a>
        <a href="/">
          {" "}
          <Icon src={filter} />{" "}
        </a>
        <div>
          <p>
            Showing {resultsStart}–{resultsEnd} of {totalResults} results
          </p>
        </div>
      </ContainerFilter>

      <ContainerInfo>
        Show
        <select
          name="show"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="30">30</option>
        </select>
        Short by
        <select
          name="short"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="isNew">New</option>
        </select>
      </ContainerInfo>
    </Container>
  );
}
