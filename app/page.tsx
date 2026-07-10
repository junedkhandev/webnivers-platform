import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold leading-tight">
            Engineering Growth Systems
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Websites, Funnels, Automation and AI that help businesses
            attract, nurture and convert customers.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>
              Book a Discovery Call
            </Button>

            <Button variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}