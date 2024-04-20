import { Container, Image, InfoDescription, PrimaryText, SecondaryText } from "./styles";
import custumerSupoort from "../../assets/svg/customer-support.svg"
import shipping from "../../assets/svg/shipping.svg"
import trophy from "../../assets/svg/trophy.svg"
import guarantee from "../../assets/svg/guarantee.svg"

export function Info() {
    return (
        <Container>
            <InfoDescription>
                <div>
                    <Image src={trophy} />
                </div>
                <div>
                    <PrimaryText>InfoDescription</PrimaryText>
                    <SecondaryText>crafted from top materials</SecondaryText>
                </div>
            </InfoDescription>
            <InfoDescription>
                <div>
                    <Image src={guarantee} />
                </div>
                <div>
                    <PrimaryText>Warranty Protection</PrimaryText>
                    <SecondaryText>Over 2 years</SecondaryText>
                </div>
            </InfoDescription>
            <InfoDescription>
                <div>
                    <Image src={shipping} />
                </div>
                <div>
                    <PrimaryText>Free Shipping</PrimaryText>
                    <SecondaryText>Free Shipping</SecondaryText>
                </div>
            </InfoDescription>
            <InfoDescription>
                <div>
                    <Image src={custumerSupoort} />
                </div>
                <div>
                    <PrimaryText>24 / 7 Support</PrimaryText>
                    <SecondaryText>Dedicated support</SecondaryText>
                </div>
            </InfoDescription>
        </Container>
    )
}