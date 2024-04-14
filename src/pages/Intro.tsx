import { BackgroundBoxesDemo } from "@/components/header/Index.background-boxes";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Intro() {
  return (
    <Card id="intro">
      <CardBody className="dark:bg-gray-900">
        <BackgroundBoxesDemo />
      </CardBody>
    </Card>
  );
}
