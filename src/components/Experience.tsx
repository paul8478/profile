
import { Card, CardContent } from "./ui/card";
import "../css/experience.css";
import bluestocks from "../../src/images/bluestocks.png";
import glob from "../images/globsyn.jpg";


export function Experience() {
  return (
    <section id="experience" className="py-20 experience-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Work Experience</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            My professional journey and the impact I've made at different organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-xyz">
            <Card className="h-60 overflow-hidden bg-transparent shadow-none bord-non">
              <CardContent className="p-0 h-full">
                <img
                  src={bluestocks}
                  alt="Bluestocks Company Logo"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="h-60 overflow-hidden bg-transparent shadow-none bord-non">
              <CardContent className="p-0 h-full">
                <img
                  src={glob}
                  alt="Card 2"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="h-60 overflow-hidden bg-transparent shadow-none bord-non">
              <CardContent className="p-0 h-full">
                <img
                  src={bluestocks}
                  alt="Card 3"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>

            <Card className="h-60 overflow-hidden bg-transparent shadow-none bord-non">
              <CardContent className="p-0">
                <img
                  src={bluestocks}
                  alt="Card 4"
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}