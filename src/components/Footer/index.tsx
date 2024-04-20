import { Link } from "react-router-dom";
import {
  Container,
  ContainerContent,
  FooterContent,
  FooterDescription,
  FooterContent1,
  FooterContent2,
  FooterContent3,
  FooterContent4,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <ContainerContent>
        <FooterContent>
          <FooterContent1>
            <span>Funiro.</span>
            <div>
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </FooterContent1>
          <FooterContent2>
            <ul>
              <li>Links</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </FooterContent2>
          <FooterContent3>
            <ul>
              <li>Help</li>
              <li>
                <Link to="/">Payment Options</Link>
              </li>
              <li>
                <Link to="/">Returns</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Privacy Policies</Link>
              </li>
            </ul>
          </FooterContent3>
          <FooterContent4>
            <span>Newsletter</span>
            <div>
              <input type="text" placeholder="Enter Your Email Address"></input>
              <button>SUBSCRIBE</button>
            </div>
          </FooterContent4>
        </FooterContent>
        <FooterDescription>2023 furino. All rights reverved</FooterDescription>
      </ContainerContent>
    </Container>
  );
}
