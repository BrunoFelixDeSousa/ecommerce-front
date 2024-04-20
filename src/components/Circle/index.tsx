import { Container, InfoCircle } from "./styles";

interface CircleProps {
    info: string;
    backgroundColor?: string;
    showCircle: boolean;
}

export function Circle({ info, backgroundColor, showCircle }: CircleProps) {
    const circleColor = info.toLowerCase() === "new" ? "#2EC1AC" : "#E97171";
    const displayInfo = info.toLowerCase() === "new" ? info : `-${info}%`;
    
    if (!showCircle) return null;

    return (
        <Container style={{backgroundColor: circleColor}}>
            <InfoCircle>{displayInfo}</InfoCircle>
        </Container>
    );
}