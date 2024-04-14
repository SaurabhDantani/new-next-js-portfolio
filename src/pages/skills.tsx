import { CardHoverEffectDemo } from "@/components/skill/Skills.Index";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function Skills() {
  return (
    <Card id="skills">
      <CardBody className="dark:bg-gray-900">
        <CardHoverEffectDemo />
      </CardBody>
    </Card>
  );
}
