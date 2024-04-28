import { RiApps2Fill, RiEqualizerLine } from "@remixicon/react";
import { Container, ContainerFilter, ContainerInfo, Icon } from "./styles";
import filter from "../../assets/svg/filter.svg";

interface FilterProps {
  resultsStart: number;
  resultsEnd: number;
  totalResults: number;
}

export function Filter({ resultsStart, resultsEnd, totalResults }: FilterProps) {
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
        <select name="show">
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>
        </select>
        Short by
        <select name="short">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="new">New</option>
        </select>
      </ContainerInfo>
    </Container>
  );
}
