import { BannerImage, Box, Container, Text } from "./styles";
import imageBanner from "../../assets/images/img-banner.png";

export function Banner() {
  return (
    <Container>
      <BannerImage src={imageBanner} />
      <Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Text>
      </Box>
    </Container>
  );
}
