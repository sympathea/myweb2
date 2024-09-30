import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Message() {
  return (
    <section className="mx-auto max-w-7xl">
      <Card className="flex flex-col space-y-10 border-none mt-7">
        <CardHeader>
          <CardTitle className="text-4xl">Message Board</CardTitle>
          <CardDescription>Leave me A Message!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send</Button>
          </div>
        </CardContent>
        <CardFooter>
          <ul className="flex flex-col space-y-2">
            {}
            <li>Message</li>
            <li>Message</li>
            <li>Message</li>
          </ul>
        </CardFooter>
      </Card>
    </section>
  );
}
